
import { SlBasket } from "react-icons/sl";
import { IoPersonOutline} from "react-icons/io5";
import { IoIosArrowRoundForward } from "react-icons/io";


import * as React from 'react';
import { Button } from "@/components/ui";





interface IHeaderNavProps {
}

export const HeaderNav: React.FC<IHeaderNavProps> = (props) => {
    return (
        <div className='flex items-center gap-3'>
            <Button variant='outline' className='flex items-center gap-1'><IoPersonOutline className='gap-1'/>Увійти</Button>
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
        </div>
  );
};


