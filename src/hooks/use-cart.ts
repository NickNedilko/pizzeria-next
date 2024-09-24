import { useCartStore } from "@/store/cart";
import { useEffect } from "react";


export const useCart = () => {
    
    const [totalAmount, fetchCartItems,  items, updateItemQuantity, deleteCartItem, loading] = useCartStore(state =>
        [state.totalAmount, state.fetchCartItems, state.items, state.updateItemQuantity, state.deleteCartItem, state.loading]);
 
    useEffect(() => {
        fetchCartItems();

    }, [fetchCartItems])

      const onClickCountButton = (id: number, quantity: number, type: 'plus' | 'minus') => {
    const newQuantity = type === 'plus' ? quantity + 1 : quantity - 1;
    updateItemQuantity(id, newQuantity);
  };

    return {totalAmount, items, onClickCountButton, deleteCartItem, loading}
}