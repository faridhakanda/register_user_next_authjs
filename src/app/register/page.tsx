import React from 'react'
import RegisterForm from '@/components/registerform'
import Link from 'next/link'
const Register = () => {
  return (
    <div>
        
        <RegisterForm />
        <p className="my-3 text-center">
            Already have an account?
            <Link className="mx-2 underline" href="/">Login</Link>
        </p>
    </div>
  )
}

export default Register