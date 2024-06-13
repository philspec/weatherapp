import { createClient } from '@supabase/supabase-js';
import logo from '../assets/logo.jpg';
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
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
          email:"qwertysonata@gmail.com",
          password:"qazxswedc"
        }})
    
    async function onSubmit (data) {
      console.log(data)
      console.log("ok")
      const { error } = await supabase.auth.signInWithPassword({
        email: data.email,
        password: data.password
      });
      if (error) {
        setisSignIn(false)
      }
      else{
        dispatch(setAuth(true))
        navigate("/")
      }
    }
     


      


    return (
        <div className="grid w-screen h-full grid-cols-12 text-white bg-gradient-to-tl from-blue-950 via-blue-800 to-cyan-700">
          <div className="grid col-span-6 grid-rows-12 place-items-center">
            <img src={logo} className="w-16 h-16 row-start-6 border rounded-2xl border-cyan-200" alt="logo" />
            <h1 className="row-start-7 text-2xl font-bold">Weather App</h1>
          </div>
          <div className="grid grid-cols-5 col-span-4 col-start-8 place-content-center">
            <Button className="col-span-3 col-start-2 mb-5 bg-blue-500 border-blue-300 rounded-xl">Login with Google</Button>
            
            <Form {...form} >
            <form onSubmit={form.handleSubmit(onSubmit)}  className="grid grid-cols-5 col-span-5">
            <hr className='col-span-5 mb-3 border-blue-300'/>
                <FormField  
                control={form.control}
                name="email"
                render={({ field }) => (
                    <FormItem className="col-span-5 mb-3">
                    <FormLabel >Email</FormLabel>
                    <FormControl>
                        <Input type="email" {...field} />
                    </FormControl>
                    <FormMessage className="text-red-600"/>
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                
                name="password"
                render={({ field }) => (
                    <FormItem className="col-span-5 mb-3">
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                        <Input type="password" {...field}/>
                    </FormControl>
                    <FormMessage className="text-red-600"/>

                    </FormItem>
                )}
                />
            <Button className="col-span-3 col-start-2 border-blue-300 rounded-xl" type="submit">{isSignIn ? "Login" : "Sign Up"}</Button>
            </form>
            </Form>
    </div>
    </div>
  )
}
