import axios from "axios"
import crypto from 'crypto';

interface PaymentData {
  order_id: number;
  merchant_id: string;
  amount: number; 
  currency: string; 
  order_desc: string;
 signature?: string;  
 server_callback_url?: string;
}

export const fondyPayment = async (order: number, totalAmount: number) => {
    const order_id = order + Date.now() 
    const orderBody: PaymentData = {
        order_id,
        merchant_id: process.env.FONDY_MERCHANT_ID as string,
        order_desc: 'Pizzeria Nick / Оплатіть замовлення №' + order_id,
        amount: totalAmount * 100,
        currency: 'UAH',
        server_callback_url: process.env.FONDY_CALLBACK_URL as string
    }

    function generateSignature(data:any, secretKey : string):string {
    const dataString = Object.keys(data)
        .sort()
        .map((key) => data[key])
            .join('|');
    return crypto.createHash('sha1').update(`${secretKey}|${dataString}`).digest('hex');
}
    orderBody.signature = generateSignature(orderBody, process.env.FONDY_PASSWORD as string)
   
     const {data} = await axios.post('https://pay.fondy.eu/api/checkout/url/', {
        request: orderBody
     })
    
    return data;
}