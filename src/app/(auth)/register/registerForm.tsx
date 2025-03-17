"use client"

// import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {Input} from "@/components/ui/input" 
import { RegisterBody, RegisterBodyType } from "@/schemaValidations/auth.schema"
// import envConfig from "@/config"
import authApiRequest from "@/apiRequest/auth"
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation"
import { clientSessionToken } from "@/lib/http"
import { handleErrorApi } from "@/lib/utils"
import { useState } from "react"




const RegisterForm = () => {
    const [loading, setLoading] = useState(false);
    const { toast } = useToast();
    const router = useRouter()
  // 1. Define your form.
  const form = useForm<RegisterBodyType>({
    resolver: zodResolver(RegisterBody),
    defaultValues: {
      email: '',
      name:'',
      password:'',
      confirmPassword:'',
      
    },
  })
  
  // 2. Define a submit handler.
  async function onSubmit(values: RegisterBodyType) {
    if(loading) return
    setLoading(true);
    try {
      const result = await authApiRequest.register(values)
  await authApiRequest.auth({sessionToken: result.payload.data.token, expriresAt: result.payload.data.expiresAt})
  toast({
    description: result.payload.message
  })
  clientSessionToken.value = result.payload.data.token
  router.push('/me')
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
    } catch (error: any) {
      handleErrorApi({
           error,
           setError: form.setError
         })
    }finally{
      setLoading(false)
    }
  
  // fetch(`${envConfig.NEXT_PUBLIC_API_ENDPOINT}/auth/register`,{
  //   method: 'POST',
  //   body: JSON.stringify(values),
  //   headers:{
  //   'Content-Type': 'application/json'
  //   }
    
  // }).then((res) => res.json())
  }
  

  
  return (
<Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2 max-w-[600px] w-full">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tên</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="!mt-8 w-full">Đăng kí</Button>
      </form>
    </Form>


  )
}

export default RegisterForm
