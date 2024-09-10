import { Ingridient, Product, ProductItem } from "@prisma/client";

export type IProduct = Product & { items: ProductItem[];  indridients: Ingridient[]}
