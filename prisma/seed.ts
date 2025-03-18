import { hashSync } from "bcrypt";
import { prisma } from "./prisma-client";
import { error } from "console";
import { ingridients, categories, products } from "./constants";
import { Prisma } from "@prisma/client";


const randomPrice = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min) * 10 + min * 10) / 10;
};


async function up() {
    
    await prisma.user.createMany({
        data: [
            {
                fullName: "Nick",
                email: "nick@gmail.com",
                password: hashSync("123456", 10),
                verified: new Date(),
                role: "USER"
            },
             {
                fullName: "Admin Admin",
                email: "admin@gmail.com",
                password: hashSync("123456", 10),
                verified: new Date(),
                role: "ADMIN"
            },
        ]
    })

    await prisma.category.createMany({
        data: categories
    })

      await prisma.ingridient.createMany({
        data: ingridients
      })
    
      await prisma.product.createMany({
        data: products
    })

     const pizza1 = await prisma.product.create({
    data: {
      name: 'Пеппероні фреш',
      imageUrl:
        'https://media.dodostatic.net/image/r:233x233/11EE7D61304FAF5A98A6958F2BB2D260.webp',
      categoryId: 1,
      ingridients: {
        connect: ingridients.slice(0, 5),
      },
    },
  });

  const pizza2 = await prisma.product.create({
    data: {
      name: 'Сирна',
      imageUrl:
        'https://media.dodostatic.net/image/r:233x233/11EE7D610CF7E265B7C72BE5AE757CA7.webp',
      categoryId: 1,
      ingridients: {
        connect: ingridients.slice(5, 10),
      },
    },
  });

  const pizza3 = await prisma.product.create({
    data: {
      name: 'Чорізо фреш',
      imageUrl:
        'https://media.dodostatic.net/image/r:584x584/11EE7D61706D472F9A5D71EB94149304.webp',
      categoryId: 1,
      ingridients: {
        connect: ingridients.slice(10, 40),
      },
    },
  });
    
     await prisma.productItem.createMany({
    data: [
         // Піцца "Пеппероні фреш"
         { productId: pizza1.id, price: randomPrice(100, 350), pizzaType: 1, size: 20 },
         { productId: pizza1.id, price: randomPrice(100, 350),  pizzaType: 2, size: 30 },
         { productId: pizza1.id, price: randomPrice(100, 350),  pizzaType: 2, size: 40 },
      
      // generateProductItem({ productId: pizza1.id, pizzaType: 1, size: 20 }),
      // generateProductItem({ productId: pizza1.id, pizzaType: 2, size: 30 }),
      // generateProductItem({ productId: pizza1.id, pizzaType: 2, size: 40 }),
  
         // Піцца "Сирная"
         { productId: pizza2.id, price: randomPrice(100, 350),  pizzaType: 1, size: 20 },
         { productId: pizza2.id, price: randomPrice(100, 350),  pizzaType: 1, size: 30 },
         { productId: pizza2.id, price: randomPrice(100, 350),  pizzaType: 1, size: 40 },
         { productId: pizza2.id, price: randomPrice(100, 350),  pizzaType: 2, size: 20 },
         { productId: pizza2.id, price: randomPrice(100, 350),  pizzaType: 2, size: 30 },
         { productId: pizza2.id, price: randomPrice(100, 350),  pizzaType: 2, size: 40 },
      // generateProductItem({ productId: pizza2.id, pizzaType: 1, size: 20 }),
      // generateProductItem({ productId: pizza2.id, pizzaType: 1, size: 30 }),
      // generateProductItem({ productId: pizza2.id, pizzaType: 1, size: 40 }),
      // generateProductItem({ productId: pizza2.id, pizzaType: 2, size: 20 }),
      // generateProductItem({ productId: pizza2.id, pizzaType: 2, size: 30 }),
      // generateProductItem({ productId: pizza2.id, pizzaType: 2, size: 40 }),

         // Піцца "Чорізо фреш"
         { productId: pizza3.id, price: randomPrice(100, 350),  pizzaType: 1, size: 20 },
         { productId: pizza3.id, price: randomPrice(100, 350),  pizzaType: 2, size: 30 },
         { productId: pizza3.id, price: randomPrice(100, 350),  pizzaType: 2, size: 40 },
      // generateProductItem({ productId: pizza3.id, pizzaType: 1, size: 20 }),
      // generateProductItem({ productId: pizza3.id, pizzaType: 2, size: 30 }),
      // generateProductItem({ productId: pizza3.id, pizzaType: 2, size: 40 }),

         // Інші продукти
      { productId: 1, price: randomPrice(100, 350) },
      { productId: 2, price: randomPrice(100, 350) },
      { productId: 3, price: randomPrice(100, 350) },
      { productId: 4, price: randomPrice(100, 350) },
      { productId: 5, price: randomPrice(100, 350) },
      { productId: 6, price: randomPrice(100, 350) },
      { productId: 7, price: randomPrice(100, 350) },
      { productId: 8, price: randomPrice(100, 350) },
      { productId: 9, price: randomPrice(100, 350) },
      { productId: 10, price: randomPrice(100, 350) },
      { productId: 11, price: randomPrice(100, 350) },
      { productId: 12, price: randomPrice(100, 350) },
      { productId: 13, price: randomPrice(100, 350) },
      { productId: 14, price: randomPrice(100, 350) },
      { productId: 15, price: randomPrice(100, 350) },
      { productId: 17, price: randomPrice(100, 350) },
      { productId: 16, price: randomPrice(100, 350) },
      
      // generateProductItem({ productId: 1 }),
      // generateProductItem({ productId: 2 }),
      // generateProductItem({ productId: 3 }),
      // generateProductItem({ productId: 4 }),
      // generateProductItem({ productId: 5 }),
      // generateProductItem({ productId: 6 }),
      // generateProductItem({ productId: 7 }),
      // generateProductItem({ productId: 8 }),
      // generateProductItem({ productId: 9 }),
      // generateProductItem({ productId: 10 }),
      // generateProductItem({ productId: 11 }),
      // generateProductItem({ productId: 12 }),
      // generateProductItem({ productId: 13 }),
      // generateProductItem({ productId: 14 }),
      // generateProductItem({ productId: 15 }),
      // generateProductItem({ productId: 16 }),
      // generateProductItem({ productId: 17 }),
    ],
  });

      await prisma.cart.createMany({
    data: [
      {
        userId: 1,
        totalAmount: 0,
        token: '11111',
      },
      {
        userId: 2,
        totalAmount: 0,
        token: '222222',
      },
    ],
  });

  await prisma.cartItem.create({
    data: {
      productItemId: 1,
      cartId: 1,
      quantity: 2,
      ingridients: {
        connect: [{ id: 1 }, { id: 2 }, { id: 3 }],
      },
    },
  });

}

async function down() {
    // удаление всех пользователй с  id
    await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`
    await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE`
    await prisma.$executeRaw`TRUNCATE TABLE "Ingridient" RESTART IDENTITY CASCADE`
    await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE`
    await prisma.$executeRaw`TRUNCATE TABLE "ProductItem" RESTART IDENTITY CASCADE`
    await prisma.$executeRaw`TRUNCATE TABLE "Cart" RESTART IDENTITY CASCADE`
    await prisma.$executeRaw`TRUNCATE TABLE "CartItem" RESTART IDENTITY CASCADE`
    
}

async function main() {
   try {
       await down();
       await up();
   } catch (error) {
       console.log(error);
   }
}

main().then(async () => {
    await prisma.$disconnect();
}).catch(async (e) => {
    console.log(error);
    await prisma.$disconnect();
    process.exit(1)
})