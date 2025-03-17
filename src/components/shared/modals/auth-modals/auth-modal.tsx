import { Button, Dialog, DialogContent } from '@/components/ui';
import { signIn } from 'next-auth/react';
import { FaGithub} from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import {FC} from 'react';

interface IAuthModalProps {
    open: boolean;
    onClose: () => void
}

export const AuthModal: FC<IAuthModalProps> = ({ open, onClose }) => {
    
    const handleClose = () => {
        onClose();
    }
    return (
        <Dialog open={open} onOpenChange={handleClose}>
            <DialogContent className='w-[450px] bg-white p-10'>
                <h2 className='text-2xl font-bold'>LoginForm</h2>
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
            </DialogContent>
      </Dialog>
  );
};


