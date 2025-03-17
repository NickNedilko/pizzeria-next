'use client'
import { FC } from 'react';
import { useSession, signIn } from "next-auth/react";
import { Button } from '../ui';
import { IoPersonOutline } from 'react-icons/io5';
import Link from 'next/link';
import { FaRegUserCircle } from "react-icons/fa";

interface IProfileBtnProps {
    onClickSignIn?: () => void;
    className?: string;
}

export const ProfileBtn: FC<IProfileBtnProps> = ({ className, onClickSignIn }) => {
    const { data: session } = useSession();
    
    return (
        <div className={className}>
       {!session ? ( <Button  onClick={onClickSignIn}
        variant='outline'
        className='flex items-center gap-1'><IoPersonOutline className='gap-1' />Увійти</Button>) : (
           
            <Link href='/profile'>
                <Button variant='secondary' className='flex items-center gap-2'>
                    <FaRegUserCircle  size={18} />
                    Профіль
                </Button>
            </Link>
        ) }
        </div> 
      )

};


