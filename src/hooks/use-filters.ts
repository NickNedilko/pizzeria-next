import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { useSet } from "react-use";


interface PriceProps {
    priceFrom?: number;
    priceTo?: number;
}

interface QueryFilters extends PriceProps {
    pizzaTypes: string;
    sizes: string;
    ingridients: string
}
    
export interface Filters {
    sizes: Set<string>;
    pizzaTypes: Set<string>;
    selectedIngridients: Set<string>;
    prices: PriceProps
}

interface ReturnProps extends Filters {
    updatePrices: (name: keyof PriceProps, value: number) => void;
    toggleSizes: (value: string) => void;
    togglePizzaTypes: (value: string) => void;
    toggleIngridients: (value: string) => void;

}

export const useFilters = ():ReturnProps => {
    const router = useRouter();

const searchParams = useSearchParams() as unknown as Map<keyof QueryFilters, string>;
/* Фильтр ингридиентов */
  const [selectedIngridients, {toggle: toggleIngridients}] = useSet(new Set<string>(searchParams.get('ingridients')?.split(',')))
/* Фильтр цен */
    const [prices, setPrice] = useState<PriceProps>({
        priceFrom: Number(searchParams.get('priceFrom')) || undefined,
        priceTo: Number(searchParams.get('priceTo')) || undefined
    })  
    
      const updatePrices = (name: keyof PriceProps, value: number) => {
        setPrice({
            ...prices,
            [name]:value
         })
     } 
/* Фильтр размера пиццы */
    const [sizes, { toggle: toggleSizes }] = useSet<string>(new Set(searchParams.get('sizes') ? searchParams.get('sizes')?.split(',') : [] ));
/* Фильтр типов теста */
   
    const [pizzaTypes, { toggle: togglePizzaTypes }] = useSet<string>(new Set(searchParams.get('pizzaTypes') ? searchParams.get('pizzaTypes')?.split(',') : []));
    
return { selectedIngridients, toggleIngridients, prices, updatePrices, sizes, toggleSizes, pizzaTypes, togglePizzaTypes}


}