import SignupForm from "./components/SignupForm";


export default function Home() {
  return (
    <main className="p-8">
      
      {/* Form Validation Demo */}
      <h1 className="text-2xl font-bold mb-4">Home Page</h1>
      <SignupForm />
    </main>
  );
}
