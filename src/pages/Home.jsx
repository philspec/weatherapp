//a simple react component
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import supabase from './supabaseclient.js';



export default function Home() {
  const [error, setError] = useState("")
  const navigate = useNavigate()

  const handleClick = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      setError(error.message);
    } else {
      console.log("Signed out successfully");
      navigate('/login');
    }
  };

  return (
    <div className="grid w-screen h-screen place-items-center">
      <h1>Home</h1>
      <button onClick={handleClick}>Sign out</button>
      {error && <p className="text-red-600">{error}</p>}
    </div>
  );
}