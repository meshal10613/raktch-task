"use client";

import React from 'react'
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

export default function Contact() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    // Handle successful form submission
    const onSubmit = (data) => {
        console.log(data);
        Swal.fire({
            title: "Congratulations!",
            text: "wait for the upcoming updates",
            icon: "success",
            confirmButtonColor: "#872BFF"
        });
    };
    return (
        <div className='px-[1%] md:px-[5%] my-5 2xl:px-[7%]'>
            <h2 className='text-[#F411CF] font-bold text-2xl mb-3'>Contact Us</h2>
            <p  className='text-[#A8A8A8] text-xl'>Reach out to us for any inquiries or support—we’re here to help!</p>
            <div className='my-20 px-2 md:px-10 xl:px-20 flex flex-col lg:flex-row items-center justify-around gap-10'>
                <div className='flex-1 py-0'>
                    <h2 className='font-bold text-4xl mb-3'>Let’s connect and talk about your <br /> travel dreams</h2>
                    <p>Talk about and plan what your travel dreams are this year, and we <br /> will help you to make your dreams come true</p>
                </div>
                <div className="flex-1 flex justify-center items-center py-0">
                    {/* <form className="w-md bg-white shadow-md rounded-2xl p-6 space-y-4">
                        <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                        <input
                            type="text"
                            placeholder="Your name"
                            className="input input-bordered w-full"
                        />
                        </div>
                        <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input
                            type="email"
                            placeholder="hello@email.com"
                            className="input input-bordered w-full"
                        />
                        </div>
                        <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">How can we help?</label>
                        <textarea
                            placeholder="Tell us a little bit about your destination dream"
                            className="textarea textarea-bordered w-full h-28"
                        ></textarea>
                        </div>
                        <button className="btn w-full bg-[#872BFF] text-white text-lg rounded-full">
                            Send
                        </button>
                    </form> */}
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="w-md bg-white shadow-md rounded-2xl p-6 space-y-4"
                        >
                        {/* Name */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                            Name
                            </label>
                            <input
                            type="text"
                            placeholder="Your name"
                            className={`input input-bordered w-full ${
                                errors.name ? "input-error" : ""
                            }`}
                            {...register("name", { required: "Name is required" })}
                            />
                            {errors.name && (
                            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                            )}
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                            Email
                            </label>
                            <input
                            type="email"
                            placeholder="hello@email.com"
                            className={`input input-bordered w-full ${
                                errors.email ? "input-error" : ""
                            }`}
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                value: /\S+@\S+\.\S+/,
                                message: "Invalid email format",
                                },
                            })}
                            />
                            {errors.email && (
                            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                            )}
                        </div>

                        {/* Message */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                            How can we help?
                            </label>
                            <textarea
                            placeholder="Tell us a little bit about your destination dream"
                            className="textarea textarea-bordered w-full h-28"
                            {...register("message")}
                            ></textarea>
                        </div>

                        {/* Button */}
                        <button
                            type="submit"
                            className="btn w-full bg-[#872BFF] text-white text-lg rounded-full"
                        >
                            Send
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
