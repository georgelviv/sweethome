import { AppStage, useAppStore } from '@state/app.state';
import { Button } from '@ui/button';
import { Input } from '@ui/input';
import { ChevronLeft } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { loginFormSchema } from './register-state.constants';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@ui/form';

export function RegisterStage({ changeStage }: {changeStage: (stage: AppStage) => void}) {
  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      login: '',
    },
  });

  const toggleSpinner = useAppStore((state) => state.toggleSpinner);

  const onSubmit = (values: z.infer<typeof loginFormSchema>) => {
    console.log(values);
    toggleSpinner(true);
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
