import { PizzaSize, PizzaType } from "@/constants/pizza";
import { Ingridient } from "@prisma/client";

export const getCartItemDetails = (
    pizzaType: PizzaType,
    pizzaSize: PizzaSize,
    ingridients: Ingridient[]
):string => {
    
    const details = [];

  if (pizzaSize) {
    const typeName = pizzaType === 1 ? 'Традиційне' : 'Тонке';
    details.push(`${typeName} ${pizzaSize} см`)
  }

  if (ingridients) {
    details.push(...ingridients.map((ingridient)=> ingridient.name))
    }
    return details.join(', ');
}