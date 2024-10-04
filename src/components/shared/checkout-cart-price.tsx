import { FC } from "react";
import { WhiteBlock } from "./white-block";
import { CheckoutItemDetails } from "./checkout-item-details";
import { FaArrowRight, FaBox, FaPercent } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { Button } from "../ui";
import { Skeleton } from "../ui/skeleton";


interface ICheckoutCartPriceProps {
    totalAmount: number;
    submitting?: boolean;
    loading?: boolean;
}

const VAT = 15;
const DELIVERY = 80;
export const CheckoutCartPrice: FC<ICheckoutCartPriceProps> = ({ totalAmount, loading, submitting }) => {
    
    const vatPrice = (totalAmount * VAT) / 100;
    const delivery = totalAmount > 1000 ? 0 : DELIVERY;
    const totalPrice = totalAmount + vatPrice + delivery;
    return (
      <WhiteBlock className='p-6 sticky top-4'>
                        <div className='flex flex-col gap-1'>
                            <span className='text-xl'>Всього:</span>
                {loading ? <Skeleton className="h-11 w-44" /> : <span className='text-[34px] font-extrabold'>{totalPrice} ₴</span>}
               {totalAmount>1000 && !loading && <p className="text-primary">При замовленні від 1000 ₴ доставка безкоштовна</p>}
                        </div>
                        <CheckoutItemDetails title={
                            <div className='flex items-center'>
                            <FaBox size={18} className='mr-2 text-gray-400'/> Ціна на кошик
                            </div>
                        } value={loading? <Skeleton className="h-6 w-12"/> : `${totalAmount} ₴`} />
                    <CheckoutItemDetails title={
                            <div className='flex items-center'>
                            <FaPercent size={18} className='mr-2 text-gray-400'/> Податки
                            </div>
                        } value={loading? <Skeleton className="h-6 w-12"/> : `${vatPrice} ₴`}/>
                    <CheckoutItemDetails title={
                            <div className='flex items-center'>
                            <TbTruckDelivery size={20} className='mr-2 text-gray-400'/> Доставка
                            </div>
                        } value={loading? <Skeleton className="h-6 w-12"/> : `${delivery} ₴`}
                        />
                        <Button loading={submitting } className='w-full h-14 rounded-2xl mt-6 text-base font-bold'>
                            Сплатити
                            < FaArrowRight className='w-5 ml-2'/>
                        </Button>
                        
                    </WhiteBlock>  
  );
};


