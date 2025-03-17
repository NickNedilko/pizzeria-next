'use client'
import { useState } from 'react';
import { CartButton } from "../cart-button";
import { ProfileBtn } from '../profile-btn';
import { AuthModal } from '../modals/auth-modals';



interface IHeaderNavProps {
  cart?: boolean; 
}

export const HeaderNav: React.FC<IHeaderNavProps> = ({cart}) => {
  const [openAuthModal, setOpenAuthModal] = useState(false)
   
  return (
    <div className='flex items-center gap-3'>
      <AuthModal onClose={() => setOpenAuthModal(false)} open={openAuthModal}/>
      <ProfileBtn onClickSignIn={() => setOpenAuthModal(true)} />
    {cart && <CartButton/>}
    </div>
  );
};


