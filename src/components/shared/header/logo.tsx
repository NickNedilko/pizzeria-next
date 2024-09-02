import Image from 'next/image';
import * as React from 'react';

interface ILogoProps {
}

export const Logo: React.FC<ILogoProps> = () => {
    return (
        <div className='flex items-center gap-4 cursor-pointer'>
            <Image src='/logo.png' alt='Logo' width={35} height={35} />
            <div>
                <h1 className='text-2xl uppercase font-black'>Pizzeria Nick</h1>
                <p className='text-base text-gray-400 leading-5'>смачніше немає куди</p>
            </div>
        </div>
  );
};


