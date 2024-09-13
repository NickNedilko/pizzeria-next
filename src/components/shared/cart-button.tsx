import { SlBasket } from "react-icons/sl"
import { Button } from "../ui"
import { IoIosArrowRoundForward } from "react-icons/io"
import { CartDrawer } from "./cart-drawer"

export const CartButton = () => {
     
    
    return ( 
        <CartDrawer>
            <Button
        className='group relative'>
        <b>525 ₴</b>
        <span className="h-full w-[1px] bg-white/30 mx-3" />
        <div className="flex items-center gap-1 transition duration-300 group-hover:opacity-0">
          <SlBasket size={16} className="relative" strokeWidth={2} />
          <b>3</b>
        </div>
        <IoIosArrowRoundForward
          size={20}
          className="absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
        />
            </Button>
        </CartDrawer>
    )
}