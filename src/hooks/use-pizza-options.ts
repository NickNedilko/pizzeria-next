
import { Variant } from "@/components/shared/group-variants";
import { PizzaSize, PizzaType } from "@/constants/pizza"
import { getAvailablePizzaSizes } from "@/lib";
import { ProductItem } from "@prisma/client";
import { useEffect, useState } from "react"
import { useSet } from "react-use";

interface ReturnProps {
    size: PizzaSize;
    type: PizzaType;
    selectedIngridients: Set<number>;
    currentItemId?: number;
    availableSizes: Variant[]
    setType: (size: PizzaSize) => void;
    setSize: (type: PizzaType) => void;
    addIngridient: (id: number) => void;
}

export const usePizzaOptions = (
    items: ProductItem[]) => {

    const [type, setType] = useState<PizzaType>(1);
    const [size, setSize] = useState<PizzaSize>(20);
    const [selectedIngridients, {toggle: addIngridient}] = useSet(new Set<number>([]))
    const availableSizes = getAvailablePizzaSizes(type, items);

const currentItemId = items.find((item)=>item.pizzaType === type && size === item.size )?.id

     useEffect(() => {
        const isAvailableSize = availableSizes?.find(
            (item)=>Number(item.value) === size && !item.disabled
        )
        
        const availableSize = availableSizes?.find(item => !item.disabled)
        
        if (isAvailableSize && availableSize) {
        setSize(Number(availableSize.value) as PizzaSize)
    }
     }, [type])
    
    return {size, type, currentItemId, selectedIngridients, availableSizes, setSize, setType, addIngridient}
}