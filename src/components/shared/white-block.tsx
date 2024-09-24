import React, { FC, PropsWithChildren } from 'react'
import { Title } from './title'
import { cn } from '@/lib/utils'

interface Props {
  title?: string;
  endAdornment?: React.ReactNode;
  className?: string;
  contentClassName?: string;

}

export const WhiteBlock:FC<PropsWithChildren<Props>> = ({title, endAdornment, children, contentClassName}) => {
    return (
        <div className='bg-white rounded-3xl'>
            {title && (
                <div className='flex items-center justify-between p-5 px-7 border-b border-gray-100'>
            <Title text={title} size='md' className='font-bold'/>
              {endAdornment}
                </div>
            )}
            <div className={cn('px-5 py-4', contentClassName)}>
                {children}
            </div>
        </div>
    )
}
