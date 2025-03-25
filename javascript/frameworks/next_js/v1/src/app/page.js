"use client";


// import SignupForm from "./components/SignupForm";

import Button from "./components/Button";


export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen p-4">
      
      <h1>Component Demo</h1>
      {/* Button Component */}
      <Button label="Click Me!" onClick={() => alert("Button Clicked!")}/>

      {/* Form Validation Demo */}
      {/* <h1 className="text-2xl font-bold mb-4">Home Page</h1>
      <SignupForm /> */}

    </main>
  );
}
