import { AppStage, useAppStore } from '@state/app.state';
import { Button } from '@ui/button';
import { Input } from '@ui/input';
import { ChevronLeft } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { loginFormSchema } from './register-state.constants';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@ui/form';

export function RegisterStage() {
  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      login: '',
    },
  })

  const onSubmit = (values: z.infer<typeof loginFormSchema>) => {
    console.log(values);
  }

  const change = useAppStore((state) => state.changeStage);
  const goBackClickHandler = () => {
    change(AppStage.welcome);
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
          name='login'
          control={form.control}
          render={({field}) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="Login" {...field} />
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
