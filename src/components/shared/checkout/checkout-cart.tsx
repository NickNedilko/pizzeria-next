import { FC } from "react";
import { WhiteBlock } from "../white-block";
import { CheckoutSkeleton } from "../checkout-skeleton";
import { CheckoutItem } from "../checkout-item";
import { CartStateItem } from "@/lib/get-cart-details";
import { getCartItemDetails } from "@/lib";
import { PizzaSize, PizzaType } from "@/constants/pizza";


interface ICheckoutCartProps {
    items: CartStateItem[];
    loading: boolean;
    onClickCountButton: (id: number, quantity: number, type: 'plus' | 'minus') => void;
    deleteCartItem: (id: number) => void;
    className?: string;
}

export const CheckoutCart: FC<ICheckoutCartProps> = ({items, loading, onClickCountButton, deleteCartItem, className}) => {
    return (
        
            <WhiteBlock title='1. Кошик' className={className}>
                        <div className='flex flex-col gap-5'>
                            { loading && !items?.length ? (
                                    <CheckoutSkeleton/>
                                   ) :
                                 items.map((item) => (
                                     <CheckoutItem
                                    key={item.id}
                                    details={item.pizzaSize ? getCartItemDetails(item.pizzaType as PizzaType, item.pizzaSize as PizzaSize, item.ingridients) : ''}
                                         id={item.id}
                                         disabled = {item.disabled}
                                    imageUrl={item.imageUrl}
                                    name={item.name}
                                    price={item.price}
                                    quantity={item.quantity}
                                    onClickCountButton={(type)=>onClickCountButton(item.id, item.quantity, type)}
                                    onClickDelete={()=>deleteCartItem(item.id)}
                                />
                            ))} 
                        </div>
                </WhiteBlock>
      
  ) ;
};


