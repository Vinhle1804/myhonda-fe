import {z} from 'zod';

const configSchema = z.object({
    NEXT_PUBLIC_API_ENDPOINT: z.string()
})

const conficProject = configSchema.safeParse({
    NEXT_PUBLIC_API_ENDPOINT: process.env.NEXT_PUBLIC_API_ENDPOINT
})

if(!conficProject.success){
    console.log(conficProject.error.issues)
    throw new Error('gia tri .env d hop le')
}
 const envConfig = conficProject.data
 export default envConfig
