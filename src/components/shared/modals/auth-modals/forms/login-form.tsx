import {FC} from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { formLoginSchema, TFormLoginValues } from './schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { Title } from '@/components/shared/title';
import { FormInput } from '@/components/shared/form';
import { Button } from '@/components/ui';
import toast from 'react-hot-toast';
import { signIn } from 'next-auth/react';
import { assert } from 'console';

interface ILoginFormProps {
    onClose: () => void;
}

export const LoginForm: FC<ILoginFormProps> = ({ onClose }) => {
    const form = useForm<TFormLoginValues>({
        resolver: zodResolver(formLoginSchema),
        defaultValues: {
            email: '',
            password: ''    
        }
    });

    const onSubmit = async (data: TFormLoginValues) => {
      try {
          const resp = await signIn('credentials', {
              ...data,
              redirect: false,
          });
          if (!resp?.ok) {
              throw new Error();
          }

          toast.success("Ви успішно увійшли в акаунт");
          onClose?.();
      } catch (error) {
          console.error("Error [Login]", error);
          toast.error("Не вдалося увійти в акаунт");  
      }
    };

    return <FormProvider {...form}>
        <form className='flex flex-col gap-5' onSubmit={form.handleSubmit(onSubmit)}>
            <div className='flex justify-between items-center'>
                <Title text='Sign in' size='md' className='font-bold' />
                <p className='text-gray-400'>Введіть свою пошту та пароль </p>
            </div>
            <img src="/assets/images/phone-icon.png" alt="phone-icon"width={60} height={60} />
        
            <FormInput name='email' label='E-mail' placeholder='E-mail' required />
            <FormInput name='password' label='Password' placeholder='Password' type='password' required />
        
            <Button loading={form.formState.isSubmitting} type='submit' className='h-12 text-base'>
                Увійти
            </Button>
        </form>
  </FormProvider>;
};


