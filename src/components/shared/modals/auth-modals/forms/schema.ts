import { z } from 'zod'; 

const passwordSchema = z.string().min(6, { message: 'Пароль повинен містити мінімум 6 символів' });

export const formLoginSchema = z.object({
    email: z.string().email({ message: 'Введіть актуальну пошту' }),
    password: passwordSchema,
})

export const formRegisterSchema = formLoginSchema.merge(z.object({
    fullName: z.string().min(2, { message: 'Повне ім’я повинно містити мінімум 2 символів' }),
    confirmPassword: passwordSchema,
})).refine((data) => data.password === data.confirmPassword, { message: 'Паролі повинні співпадати', path: ['confirmPassword'] }) 

export type TFormLoginValues = z.infer<typeof formLoginSchema>;
export type TFormRegisterValues = z.infer<typeof formRegisterSchema>;