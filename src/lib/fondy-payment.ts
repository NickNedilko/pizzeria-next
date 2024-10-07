import axios from "axios"
import crypto from 'crypto';

// interface PaymentData {
//   order_id: string;
//   amount: number; 
//   currency: string; 
//   order_desc: string; 
// }

export const fondyPayment = async() => {
    const fondyPassword = 'test'
    const orderBody = {
       order_id: 'ID1234',
        merchant_id: '1397120',
        order_desc: 'pizza, coca-cola 2l',
        amount: 52500,
        currency: 'UAH'
    }

    function generateSignature(data:any, secretKey : string):string {
    const dataString = Object.keys(data)
        .sort()
        .map((key) => data[key])
        .join('|');
    return crypto.createHash('sha1').update(`${secretKey}|${dataString}`).digest('hex');
}
    orderBody.signature = generateSignature(orderBody, fondyPassword)
   
     const data = axios.post('https://pay.fondy.eu/api/checkout/url/', {
        request: orderBody
    })
    return data;
}