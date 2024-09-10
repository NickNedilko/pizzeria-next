import { Ingridient, Product, ProductItem } from "@prisma/client";

export type IProduct = Product & { items: ProductItem[]; ingridients: Ingridient[] }
