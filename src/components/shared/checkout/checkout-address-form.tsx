import { FC } from "react";
import { WhiteBlock } from "../white-block";
import { Input, Textarea } from "@/components/ui";


interface ICheckoutAddressFormProps {
    className?: string;
}


export const CheckoutAddressForm:FC <ICheckoutAddressFormProps> = ({className}) => {
    return (
                          <WhiteBlock title='3. Адреса доставки' className={className}>
                <div className='flex flex-col gap-5'>
                <Input name='adress' className='text-base' placeholder="Адреса доставки" />
                            <Textarea
                                placeholder='Комментар до замовлення'
                                className='text-base'
                            rows={5}
                            />
                </div>
            </WhiteBlock>
  ) ;
};

