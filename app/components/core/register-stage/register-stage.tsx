import { AppStage, useAppStore } from '@state/app.state';
import { Button } from '@ui/button';
import { Input } from '@ui/input';
import { ChevronLeft } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form, FormControl, FormField, FormItem, FormLabel, FormMessage
} from '@ui/form';
import { LoginForm, loginFormSchema } from '@models';
import { registerUserWithPasskey } from './register-stage.utils';

export function RegisterStage({ changeStage }: {changeStage: (stage: AppStage) => void}) {
  const form = useForm<LoginForm>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      name: '',
      email: ''
    },
  });

  const toggleSpinner = useAppStore((state) => state.toggleSpinner);

  const onSubmit = async (values: LoginForm) => {
    toggleSpinner(true);
    const response = await registerUserWithPasskey(values);
    toggleSpinner(false);
    console.log(response);
  }

  const goBackClickHandler = () => {
    changeStage(AppStage.welcome);
  };

  return (
    <Form {...form}>
      <form className="flex justify-center flex-col items-center gap-3" onSubmit={form.handleSubmit(onSubmit)}>
        <div>
          <Button type="button" variant={'ghost'} onClick={goBackClickHandler}>
            <ChevronLeft />
          </Button>
        </div>
        <FormField
          name='name'
          control={form.control}
          render={({field}) => (
            <FormItem className='w-full'>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )} />
        <FormField
          name='email'
          control={form.control}
          render={({field}) => (
            <FormItem className='w-full'>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )} />
        <div>
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </Form>
  );
}
