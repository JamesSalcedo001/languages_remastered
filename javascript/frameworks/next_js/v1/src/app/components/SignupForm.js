"use client";

import React from "react";

export default function SignupForm() {
    return (
        <div className="max-w-md mx-auto mt-10 p-6 border rounded shadow-md">
            <h2 className="text-xl font-bold mb-4">Signup Form</h2>
            <form>
                <div className="mb-4">
                    <label className="block mb-1">Name: </label>
                    <input type="text" className="w-full px-3 px-2 border rounded" />
                </div>

                <div className="mb-b">
                    <label className="block mb-1">Email: </label>
                    <input type="email" className="ww-full px-3 py-2 border rounded" />
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