import { z } from 'zod';


export const checkoutFormSchema = z.object({
    firstName: z.string().min(2, { message: "Ім'я повинно містити мінімум 2 символи" }),
    lastName: z.string().min(2, { message: 'Фамілія повинна містити мінімум 2 символи' }),
    email: z.string().email({ message: 'Введіть актуальну пошту' }),
    phone: z.string().min(10, { message: 'Введіть актуальний номер телефону' }),
    address: z.string().min(5, { message: 'Введіть актуальну адресу ' }),
    comment: z.string().optional(),

});

export type CheckoutFormValues = z.infer<typeof checkoutFormSchema>;
