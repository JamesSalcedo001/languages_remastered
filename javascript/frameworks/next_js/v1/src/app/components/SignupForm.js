"use client";

import React from "react";
import { useForm } from "react-hook-form";

export default function SignupForm() {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log("Form Submitted: ", data);
    }

    return (
        <div className="max-w-md mx-auto mt-10 p-6 border rounded shadow-md">
            <h2 className="text-xl font-bold mb-4">Signup Form</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">
                    <label className="block mb-1">Name: </label>
                    <input {...register("name")} type="text" className="w-full px-3 px-2 border rounded" />
                </div>

                <div className="mb-4">
                    <label className="block mb-1">Email: </label>
                    <input {...register("email")} type="email" className="ww-full px-3 py-2 border rounded" />
                </div>

                <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                        Submit
                    </button>
            </form>
        </div>
    )
}