import { Button, Dialog, DialogContent } from '@/components/ui';
import { signIn } from 'next-auth/react';
import { FaGithub} from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import {FC, useState} from 'react';
import { LoginForm } from './forms/login-form';

interface IAuthModalProps {
    open: boolean;
    onClose: () => void
}

export const AuthModal: FC<IAuthModalProps> = ({ open, onClose }) => {
    const [type, setType] = useState<'login' | 'register'>('login');
    
    const onSwitchType = () => {
        setType(type === 'login' ? 'register' : 'login');
    }

    const handleClose = () => {
        onClose();
    }
    return (
        <Dialog open={open} onOpenChange={handleClose}>
            <DialogContent className='w-[450px] bg-white p-10'>

                {type === 'login' ? <LoginForm onClose={onClose}/> : <div>Реєстрація</div>}
                <div className='flex gap-2'>
                    <Button variant='secondary'
                    onClick={() => {
                            signIn('github', {
                                callbackUrl: '/',
                                redirect: true
                            });
                        }}
                        type='button'
                        className='gap-2 h-12 p-2 flex-1'>
                        <FaGithub className='w-6 h-6 text-black'/> GitHub
                    </Button>

                    <Button variant='secondary'
                    onClick={() => {
                            signIn('google', {
                                callbackUrl: '/',
                                redirect: true
                            });
                        }}
                        type='button'
                        className='gap-2 h-12 p-2 flex-1'>
                        <FcGoogle className='w-6 h-6'/> Google
                    </Button>
                </div>
                <Button variant='outline' onClick={onSwitchType} className='h-12'>
                    {type === 'login' ? 'Зареєструватися' : 'Увійти'  }
                </Button>
            </DialogContent>
      </Dialog>
  );
};


