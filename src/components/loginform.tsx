'use client'
import React from 'react'
//import { doCredentialLogin} from "@/app/actions"
import { doCredentialLogin } from '@/app/actions'
import { useState } from "react"
import { useRouter } from 'next/navigation'

const Login = () => {
    const router = useRouter();
    const [error, setError] = useState("");
    async function onSubmit(event) {
        event.preventDefault();
        try {
            const formData = new FormData(event.currentTarget);
            const response = await doCredentialLogin(formData);
            if (!!response.error) {
                //console.error(response.error);
                setError(response.error.message);
            } else {
                router.push("/home");
            }
        } catch(e) {
            console.error(e);
            setError("Check your Credentials!");
        }
    }
  return (
    <div>
        <div className="text-xl text-red-500">{error}</div>
        <form
            className="my-5 flex flex-col items-center border p-3 border-gray-300 rounded-md"
            onSubmit={onSubmit}
        >
            <div className="my-2">
                <label htmlFor="email">Email Address:</label>
                <input className="border mx-2 border-gray-200 text-slate-950 rounded" type="email" name="email" id="email" />
            </div>
            <div className="my-2">
                <label htmlFor="password">Password:</label>
                <input className="border mx-2 border-gray-200 text-slate-950 rounded" type="password" name="password" id="password" />
            </div>
            <button type="submit" className="bg-orange-500 mt-4 rounded flex justify-center items-center w-36">
                Credentails Login
            </button>
        </form>
    </div>
  )
}

export default Login