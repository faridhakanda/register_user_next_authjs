const users = [
    {
        email: "farid@gmail.com",
        password: "farid"
    },
    {
        email: "zaheed@gmail.com",
        password: "zaheed"
    }
]

export const getUserByEmail = (email) =>  {
    const found = users.find(user => user.email === email);
    return found;
}