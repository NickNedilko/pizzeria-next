import { getCartDetails } from "@/lib";
import { CartStateItem } from "@/lib/get-cart-details";
import { Api } from "@/services/api-client";
import { create } from "zustand";


export interface CartState {
    loading: boolean;
    error: boolean;
    totalAmount: number;
    items: CartStateItem[];
    fetchCartItems: () => Promise<void>;
    updateItemQuantity: (id: number, quantity: number) => Promise<void>;
    addCartItem: (values: any) => Promise<void>;
    removeCartItem: (id: number) => Promise<void>;
}

export const useCartStore = create<CartState>((set) => ({
    items: [],
    error: false,
    loading: false,
    totalAmount: 0,

    fetchCartItems: async () => {
    try {
      set({ loading: true, error: false });
      const data = await Api.cart.fetchCart();
      set(getCartDetails(data));
    } catch (error) {
    //   console.error(error);
      set({ error: true });
    } finally {
      set({ loading: false });
    }
  },

   removeCartItem: async (id: number) => {},
    updateItemQuantity: async (id: number, quantity: number) => { },
   addCartItem: async (values: any)=>{}           
       
}));