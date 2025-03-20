import { cn } from "@/lib/utils"
import { FC } from "react"
import { Title } from "./title"
import Link from "next/link"
import { Button } from "../ui"
import { FaArrowLeft } from "react-icons/fa"

interface IInfoBlockProps {
    className?: string
    title?: string
    text?: string
    imageUrl?: string
}



export const InfoBlock:FC<IInfoBlockProps> = ({className, title, text, imageUrl}) => {
    return (
        <div className={cn(className, 'flex flex-col items-center justify-between w-[840px] gap-12')}>
            <div className="flex flex-col">
                <div className="w-[445px]">
                    <Title size="md" text={title ?? ''} className="text-center font-bold" />
                    <p className="text-lg text-gray-400">{text}</p>
                </div>
                <div className="flex gap-5 mt-11">
                    <Link href='/'>
                        <Button variant='outline' className='gap-2'>
                          <FaArrowLeft /> На головну
                        </Button>
                        
                    </Link>
                    <a href="">
                    <Button variant='outline' className='text-gray-500 border-gray-400 hover:bg-gray-50'>
                          Оновити
                        </Button>
                    </a>
                </div>
            </div>
            <img src={imageUrl} alt={title} width={300} />
        </div>
        )
}