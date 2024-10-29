import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
//import Credentials from "next-auth/providers/credentials"
//import { getUserByEmail } from "./data/users";
//import { User } from "./model/user-model";
import { User } from "./model/user-model";
import bcrypt from "bcryptjs"
export const { 
    handlers: {GET, POST},
    auth,
    signIn,
    signOut
} = NextAuth({
    session: {
        strategy: 'jwt',
    },
    providers: [
        Credentials({
            credentials: {
                email: {},
                password: {},
            },
            async authorize(credentials) {
                if (credentials === null) return null;
                try {
                    //const user = getUserByEmail(credentials?.email);
                    const user = await User.findOne({
                        email: credentials?.email
                    });
                    
                    //console.log(user);
                    if (user) {
                        const isMatch =  await bcrypt.compare(
                            credentials.password,
                            user.password
                        );
                        //user?.password === credentials.password;
                        if (isMatch) {
                            return user;
                        } else {
                            throw new Error("Email  or Password is not correct!");
                        }
                    } else {
                        throw new Error("User not found!");
                    }
                }  catch(error) {
                    throw new Error(error);
                }
            }
        })
    ]
})