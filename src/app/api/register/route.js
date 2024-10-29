import { NextResponse } from "next/server"
//import { createUser } from "../../../queries/users";
import { createUser } from "@/queries/users"
import  { dbConnect } from "@/lib/mongo"
import bcrypt from "bcryptjs"
export const POST = async (request) => {
    const {name, email, password}  = await request.json();
    //console.log(name, email, password);
    // create a db connection
    await dbConnect();
    const hashedPassword = await bcrypt.hash(password, 5);
    
    const newUser = {
        name, 
        password: hashedPassword,
        email
    }
    
    // update the db
    try {
        await createUser(newUser);
    } catch(err) {
        return new NextResponse(err.message, {
            status: 500,
        });
    }

    return new NextResponse("User has been created!", {
        status: 201,
    })
}