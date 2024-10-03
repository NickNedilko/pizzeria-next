import { FC } from "react";
import { WhiteBlock } from "../white-block";
import { FormInput, FormTextarea } from "../form";


interface ICheckoutAddressFormProps {
    className?: string;
}


export const CheckoutAddressForm: FC<ICheckoutAddressFormProps> = ({ className }) => {
    
    

    return (
                          <WhiteBlock title='3. Адреса доставки' className={className}>
                <div className='flex flex-col gap-5'>
                <FormInput name='address' className='text-base' placeholder="Адреса доставки" />
                <FormTextarea
                    name="comment"
                    className='text-base'
                    placeholder='Комментар до замовлення'
                    rows={5}
                />
                </div>
            </WhiteBlock>
  ) ;
};

