import { PizzaSize, PizzaType } from "@/constants/pizza";
import { Ingridient, ProductItem } from "@prisma/client";



/**
 * Підрахунок загальної вартості 
 * 
 * @param items - перелік варіацій
 * @param ingridients -перелік інгредіетів
 * @param type - тип тіста
 * @param size - розмір піци
 * @param selectedIngridient - обрані інгредіенти 
 * 
 * @returns  number загальна ціна
 */
export const CalcTotalPizzaPrice = (
    items: ProductItem[],
    ingridients: Ingridient[],
    type: PizzaType,
    size: PizzaSize,
    selectedIngridient: Set<number> = new Set<number>(),
): number => {
    const pizzaPrice = items.find(item => item.pizzaType === type && item.size === size)?.price || 0 
    const ingridientsPrice = ingridients
        .filter((ingridient )=> selectedIngridient.has(ingridient.id))
        .reduce((acc, ingridient)=>acc+ingridient.price, 0)    

    return pizzaPrice + ingridientsPrice;
}