import { useEffect } from "react"
import { Filters, useFilters } from "./use-filters";
import { useRouter } from "next/navigation";
import qs from "qs";



export const useQueryFilters = (filters: Filters) => {
    const router = useRouter();
    const { selectedIngridients, prices, sizes, pizzaTypes } = filters;
    
    useEffect(() => {
    const filters = {
        ...prices,
        pizzaTypes: Array.from(pizzaTypes),
        sizes: Array.from(sizes),
        ingridients: Array.from(selectedIngridients)
    }
     
     const query = qs.stringify(filters, {
            arrayFormat: 'comma'
     })
        // Вшимаем в строку запроса
        router.push(`?${query}`, {scroll: false})

    }, [pizzaTypes, prices, router, selectedIngridients, sizes]) 


}