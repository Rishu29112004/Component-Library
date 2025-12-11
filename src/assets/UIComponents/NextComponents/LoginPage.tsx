// "use client";

import React, { useState } from 'react'

const LoginPage = () => {

    const [name, setName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const [errors, setErrors] = useState<{
        name?: string;
        email?: string;
        password?: string;
    }>({});

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const newErrors: typeof errors = {}

        if (!name.trim()) newErrors.name = "Name is required";
        if (!email.trim()) newErrors.email = "Email is required";
        if (!password.trim()) newErrors.password = "Password is required";

        setErrors(newErrors);

        // If any error exists → don't submit
        if (Object.keys(newErrors).length > 0) {
            return;
        }

        alert(`Name: ${name}\nEmail: ${email}\nPassword: ${password}`)
    }
    return (
        <div className='flex items-center justify-center'>
            <form onSubmit={handleSubmit} className='flex border p-5 flex-col items-center mt-5 gap-3'>
                <h1 className='text-2xl text-blue-500 underline'>Login-Page</h1>

                <div className='flex gap-2'>
                    <p>Name:</p>
                    <input type="text" onChange={(e) => setName(e.target.value)} className='border rounded-md' />
                </div>

                {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

                <div className='flex gap-2'>
                    <p>Email:</p>
                    <input type="email" onChange={(e) => setEmail(e.target.value)} className='border rounded-md' />
                </div>

                {errors.email && (
                    <p className="text-red-500 text-sm">{errors.email}</p>
                )}

                <div className='flex gap-2'>
                    <p>Password:</p>
                    <input type="password" onChange={(e) => setPassword(e.target.value)} className='border rounded-md' />
                </div>

                {errors.password && (
                    <p className="text-red-500 text-sm">{errors.password}</p>
                )}
                
                <div>
                    <button type='submit' className='border px-1 rounded-md text-red-500 border-white'>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default LoginPage
