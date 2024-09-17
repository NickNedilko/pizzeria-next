'use client'

import { SlBasket } from "react-icons/sl"
import { Button } from "../ui"
import { IoIosArrowRoundForward } from "react-icons/io"
import { CartDrawer } from "./cart-drawer"
import { useCartStore } from "@/store/cart"
import { cn } from "@/lib/utils"

export const CartButton = () => {
     const [totalAmount, loading, items] = useCartStore(state=>[state.totalAmount, state.loading, state.items])
    
    return ( 
        <CartDrawer>
        <Button
          loading={loading}
        className={cn('group relative', {'w-[125px]': loading})}>
        <b>{totalAmount} ₴</b>
        <span className="h-full w-[1px] bg-white/30 mx-3" />
        <div className="flex items-center gap-1 transition duration-300 group-hover:opacity-0">
          <SlBasket size={16} className="relative" strokeWidth={2} />
            <b>{items.length}</b>
        </div>
        <IoIosArrowRoundForward
          size={20}
          className="absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
        />
            </Button>
        </CartDrawer>
    )
}