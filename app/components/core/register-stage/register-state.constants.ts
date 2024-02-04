import { z } from 'zod'
 
export const loginFormSchema = z.object({
  login: z.string().min(5, {
    message: 'Min 5 symbols'
  }).max(50, {
    message: 'Max 50 symbols'
  }),
})