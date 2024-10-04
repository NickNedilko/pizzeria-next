import { FC } from "react";

interface Props {
    orderId: number;
    totalAmount: number;
    paymentUrl: string;
}

export const PayOrderTemplate: FC<Props> = ({
  orderId, totalAmount, paymentUrl
}) => (
  <div>
        <h1>Замовлення №{orderId}!</h1>
        <p>Сплатіть замовлення на суму {totalAmount} ₴. Перейдіть по цьому <a href={paymentUrl}>посиланню для оплати!</a></p>
        
  </div>
);
