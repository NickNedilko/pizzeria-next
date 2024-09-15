import { CartItemDTO } from "@/services/dto/cart.dto";

export const calcCartItemTotalPrice = (item: CartItemDTO): number => {
     const ingridientsPrice = item.ingridients?.reduce((acc, ingridient)=>acc + ingridient.price, 0)

    return item.quantity * (item.productItem.price + ingridientsPrice);
}
