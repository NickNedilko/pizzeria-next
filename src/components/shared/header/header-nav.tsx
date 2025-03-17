
import * as React from 'react';
import { CartButton } from "../cart-button";
import { ProfileBtn } from '../profile-btn';



interface IHeaderNavProps {
  cart?: boolean; 
}

export const HeaderNav: React.FC<IHeaderNavProps> = ({cart}) => {
  
   
  return (
    <div className='flex items-center gap-3'>
      <ProfileBtn/>
    {cart && <CartButton/>}
    </div>
  );
};


