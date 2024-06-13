//a simple react component
import { useState } from "react"
import supabase from './supabaseclient.js';



export default function Home() {
  const [error, setError] = useState("")

   async function handleclick(){

  const { error } = await supabase.auth.signOut()
  setError(error)

   }

  return (
    <div className="grid w-screen h-screen place-items-center">
      <h1>Home</h1>
      <button onClick={handleclick}>Sign out</button>
      {error && <p className="text-red-600">{error}</p>}
    </div>
  );
}