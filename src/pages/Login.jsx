import logo from '../assets/logo.jpg';
import ExportGoogleLogo from '../assets/googleicon.jsx'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { useNavigate } from 'react-router-dom';
import supabase from './supabaseclient.js';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage

} from "@/components/ui/form";



const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
})

export default function Login() {
    const [error, setError] = useState("")
    const [isSignin, setIsSignin] = useState(true)
    const navigate = useNavigate()
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
          email:"qwertysonata@gmail.com",
          password:"12345678"
        }});
    
    async function onGoogleSignIn(){
      await supabase.auth.signInWithOAuth({
          provider: 'google',
        })
    }
    
    async function onSubmit (formdata,event) {
      if (event.nativeEvent.submitter.name === 'login') {
        const response = await supabase.auth.signInWithPassword({
          email: formdata.email,
          password: formdata.password,
        });       
        
        if (response.error) {
          setError(response.error.message)
        }
        else{
          navigate('/')
        }
      
      } else if (event.nativeEvent.submitter.name === 'signup') {
        const response = await supabase.auth.signUp({
          email: formdata.email,
          password: formdata.password
        })
        if (response.error) {
          setError(response.error.message)
        }
        else{
          navigate('/')
        }}
      } 

      function handleSignUp(){
        setIsSignin(!isSignin)
      }
     

    return (
        <div className="grid w-screen h-screen grid-cols-12 text-white bg-gradient-to-tl from-blue-950 via-blue-800 to-cyan-400">
          <div className="grid col-span-6 grid-rows-12same place-items-center">
            <img src={logo} className="w-16 h-16 row-start-6 border rounded-2xl border-cyan-200" alt="logo" />
            <h1 className="row-start-7 text-2xl font-bold">Weather App</h1>
          </div>
          <div className="grid grid-cols-6 col-span-4 col-start-8 place-content-center">
            <Button onClick={onGoogleSignIn} className="col-span-4 col-start-2 p-0 mb-5 border-blue-300 text-slate-900 bg-slate-100 rounded-xl"><ExportGoogleLogo className="w-4 h-4"/>Sign in with Google</Button>
            
            <Form {...form} >
            <form onSubmit={form.handleSubmit(onSubmit)}  className="grid grid-cols-6 col-span-6 gap-2">
            <hr className='col-span-6 mb-3 border-blue-300'/>
                <FormField  
                control={form.control}
                name="email"
                render={({ field }) => (
                    <FormItem className="col-span-6 mb-3">
                    <FormLabel >Email</FormLabel>
                    <FormControl className="h-12 border rounded-xl" >
                        <Input type="email"  {...field} />
                    </FormControl>
                    <FormMessage className="text-red-600"/>
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                
                name="password"
                render={({ field }) => (
                    <FormItem className="col-span-6 ">
                    <FormLabel>Password</FormLabel>
                    <FormControl className="h-12 border rounded-xl">
                        <Input type="password" {...field}/>
                    </FormControl>
                    <FormMessage className="col-span-6 text-red-600"/>

                    </FormItem>
                )}
                />
              <p className="col-span-6 mb-1 text-red-600 justify-self-center">{error}</p>
            {isSignin ? <Button name="login" className="col-span-4 col-start-2 border-blue-300 rounded-xl" type="submit">Login</Button> : <Button name="signup" className="col-span-4 col-start-2 border-blue-300 rounded-xl" type="submit">Sign Up</Button>}
            <a onClick={handleSignUp} className="col-span-6 underline underline-offset-2 text-slate-300 justify-self-center">{isSignin ? "Don't have an account?":"Already have an account?" } </a >

            </form>
            </Form>
    </div>
    </div>
  )
}
