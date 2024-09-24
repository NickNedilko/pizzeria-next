

import { IoPersonOutline } from "react-icons/io5";
import * as React from 'react';
import { Button } from "@/components/ui";
import { CartButton } from "../cart-button";

interface IHeaderNavProps {
  cart?: boolean; 
}

export const HeaderNav: React.FC<IHeaderNavProps> = ({cart}) => {
  return (
    <div className='flex items-center gap-3'>
      <Button variant='outline' className='flex items-center gap-1'><IoPersonOutline className='gap-1' />Увійти</Button>
    {cart && <CartButton/>}
    </div>
  );
};


