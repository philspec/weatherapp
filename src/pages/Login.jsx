import { createClient } from '@supabase/supabase-js';
import logo from '../assets/logo.jpg';
import ExportGoogleLogo from '../assets/googleicon.jsx'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { useDispatch } from "react-redux"
import { setAuth } from '@/features/auth/auth';
import { useNavigate } from 'react-router-dom';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage

} from "@/components/ui/form";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
})

export default function Login() {
    const [isSignIn , setisSignIn] = useState(true)
    const [error, setError] = useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
          email:"qwertysonata@gmail.com",
          password:"12345678"
        }});
    
    async function onGoogleSignIn(){
      const response = await supabase.auth.signInWithOAuth({
          provider: 'google',
        })
    }
    
    async function onSubmit (formdata,event) {
      if (event.nativeEvent.submitter.name === 'login') {
        const response = await supabase.auth.signInWithPassword({
          email: formdata.email,
          password: formdata.password
        });
        if (response.error) {
          setisSignIn(false)
          setError(response.error.message)
        }
        else{
          dispatch(setAuth(true))
          navigate("/")
        }
      } else if (event.nativeEvent.submitter.name === 'signup') {
        const response = await supabase.auth.signUp({
          email: formdata.email,
          password: formdata.password
        })
        if (response.error) {
          setisSignIn(false)
          setError(response.error.message)
        }
        else{
          dispatch(setAuth(true))
          navigate("/")
      }}}
     

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
              <p className="col-span-6 mb-4 text-red-600 justify-self-center">{error}</p>
            <Button name="login" className="col-span-3 col-start-1 border-blue-300 rounded-xl" type="submit">Login</Button>
            <Button name="signup" className="col-span-3 col-start-4 border-blue-300 rounded-xl" type="submit">Sign Up</Button>
            </form>
            </Form>
    </div>
    </div>
  )
}
