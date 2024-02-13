import { z } from 'zod';

export const loginFormSchema = z.object({
  name: z.string().min(5, {
    message: 'Min 5 symbols'
  }).max(50, {
    message: 'Max 50 symbols'
  }),
  email: z.string()
    .min(5, {
      message: 'Min 5 symbols'
    }).max(50, {
      message: 'Max 50 symbols'
    }).email({
      message: 'Should have valid email'
    })
})

export type LoginForm = z.infer<typeof loginFormSchema>;

export enum ResponseErrorCodes {
  bodyValidationError = 'BodyValidationError'
};

export interface ServerResponse<T = any> {
  success: boolean;
  errorCode?: ResponseErrorCodes;
  errorMsg?: string;
  data?: T;
}

export type ServerResponseRegisterStart = ServerResponse<{challenge: string}>;
