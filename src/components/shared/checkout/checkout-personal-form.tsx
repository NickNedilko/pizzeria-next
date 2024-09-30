import { FC } from "react";
import { WhiteBlock } from "../white-block";
import { FormInput } from "../form";

interface ICheckoutPersonalFormProps {
    className?: string;
}


export const CheckoutPersonalForm: FC<ICheckoutPersonalFormProps> = ({className}) => {
    return (
        <WhiteBlock title='2. Персональні данні' className={className}>
                <div className='grid grid-cols-2 gap-5'>
                <FormInput name='firstName' className='text-base' placeholder="Ім'я" />
                <FormInput name='lastName' className='text-base' placeholder="Фамілія"/>
                <FormInput name='email' className='text-base' placeholder="E-mail"/>
                <FormInput name='phone' className='text-base' placeholder="Телефон"/>
                </div>
                    </WhiteBlock>
      
  ) ;
};

