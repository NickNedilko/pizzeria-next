import { cn } from "@/lib/utils";
import { FC } from "react";


interface Props{
    text: string;
    className?: string;
}

export const ErrorText: FC<Props> = ({ text, className }) => {
    return <p className={cn('text-red-500 text-sm mt-2', className)}>{text}</p>
};