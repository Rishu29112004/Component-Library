import React, { useState } from 'react'
import Button from '../Button/Button'
import { toast } from "react-hot-toast"

const InputField = () => {
    const [errors, setErrors] = useState({})
    const [formData, setFormData] = useState({
        name: "",
        gender: "",
        dob: "",
        email: "",
        phone: ""
    })

    const handleInput = (e) => {
        setFormData({
            ...formData, [e.target.name]: e.target.value
        })
    }

    const validateForm = () => {
        let tempErrors = {};

        if (!formData.name.trim()) tempErrors.name = "Full Name is required";
        if (!formData.gender) tempErrors.gender = "Please select gender";
        if (!formData.dob) tempErrors.dob = "Date of Birth required";

        // email regex
        const emailRegex = /\S+@\S+\.\S+/;
        if (!emailRegex.test(formData.email)) tempErrors.email = "Enter valid email";

        if (formData.phone.length !== 10) tempErrors.phone = "Phone must be 10 digits";

        setErrors(tempErrors);

        return Object.keys(tempErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!validateForm()) {
            toast.error("Please fix the errors!")
            return
        }
          toast.success("Form Submitted Successfully!")
    }
    return (
        <form onSubmit={handleSubmit} className='min-h-screen w-full flex items-center justify-center'>
            <div className='border rounded-md w-[500px] bg-amber-50'>

                <div className='bg-blue-500 rounded-t-md text-white p-4'>
                    <p className='font-mono text-2xl'>Personal Details</p>
                </div>

                {/* personal details part */}
                <div className='flex flex-col gap-1 p-3'>
                    <label className='text-lg font-mono text-gray-700' htmlFor="">Full Name:</label>
                    <input name='name' value={formData.name} onChange={handleInput} type="text" placeholder='Write your full name...' className='border p-1 outline-none border-gray-500 rounded-md' />
                    {errors.name && <p className='text-red-500 text-sm'>{errors.name}</p>}
                </div>

                <div className='flex flex-col gap-1 p-3'>
                    <label className='text-lg font-mono text-gray-700' htmlFor="">Gender:</label>
                    <div className='flex items-center gap-5'>
                        <div className='flex items-center gap-1'>
                            <input type="radio" value="male" onChange={handleInput} name='gender' className='border cursor-pointer p-1 outline-none border-gray-500 rounded-md' />
                            <p>Male</p>
                        </div>
                        <div className='flex items-center gap-1'>
                            <input type="radio" value='female' onChange={handleInput} name='gender' className='border p-1 cursor-pointer outline-none border-gray-500 rounded-md' />
                            <p>Female</p>
                        </div>
                        <div className='flex items-center gap-1'>
                            <input type="radio" value='other' onChange={handleInput} name='gender' className='border cursor-pointer outline-none border-gray-500 rounded-md' />
                            <p>Other</p>
                        </div>

                    </div>
                    {errors.gender && <p className='text-red-500 text-sm'>{errors.gender}</p>}
                </div>

                <div className='flex flex-col gap-1 p-3'>
                    <label className='text-lg font-mono text-gray-700' htmlFor="">Date of Birth:</label>
                    <input name='dob' type="date" value={formData.dob} onChange={handleInput} className='border p-1 outline-none border-gray-500 rounded-md' />
                    {errors.dob && <p className='text-red-500 text-sm'>{errors.dob}</p>}
                </div>

                <div className='flex flex-col gap-1 p-3'>
                    <label className='text-lg font-mono text-gray-700' htmlFor="">Email id:</label>
                    <input type="email" name='email' value={formData.email} onChange={handleInput} className='border p-1 outline-none border-gray-500 rounded-md' />
                    {errors.email && <p className='text-red-500 text-sm'>{errors.email}</p>}
                </div>

                <div className='flex flex-col gap-2 p-3'>
                    <label className='text-lg font-mono text-gray-700' htmlFor="">Phone no:</label>
                    <input name='phone' type="text" value={formData.phone} maxLength={10} onChange={handleInput} className='border p-1 outline-none border-gray-500 rounded-md' />
                    {errors.phone && <p className='text-red-500 text-sm'>{errors.phone}</p>}
                </div>
                <div className='flex justify-center pb-4 pt-2'>
                    <Button className='w-[80%] cursor-pointer flex justify-center text-white font-bold text-xl rounded-md bg-green-500' buttonName="Submit" type="Submit" />
                </div>
            </div>

        </form>
    )
}

export default InputField
