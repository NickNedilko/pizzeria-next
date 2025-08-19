export const categories = [{
    name: "Піцци"
},
{
    name: "Завтрак"
    },
{
    name: "Закуски"
    },
    {
    name: "Коктейлі"
    },
    {
    name: "Напої"
}
] 

export const ingridients = [
  {
    name: 'Сирний бортік',
    price: 80,
    imageUrl:
      '/assets/images/ingredients/cheese-crust.png',
  },
  {
    name: 'Вершкова моцарелла',
    price: 39,
    imageUrl:
      '/assets/images/ingredients/mozzarella.png',
  },
  {
    name: 'Сири чеддер и пармезан',
    price: 40,
    imageUrl: '/assets/images/ingredients/cheddar-parmesan.png',
  },
  {
    name: 'Гострий перец халапеньо',
    price: 25,
    imageUrl:
      '/assets/images/ingredients/jalapeno-pepper.png',
  },
  {
    name: 'Ніжне курча',
    price: 35,
    imageUrl: '/assets/images/ingredients/chicken.png',
  },
  {
    name: 'Шампіньони',
    price: 25,
    imageUrl: '/assets/images/ingredients/mushrooms.png',
  },
  {
    name: 'Ветчина',
    price: 25,
    imageUrl: '/assets/images/ingredients/ham.png',
  },
  {
    name: 'Пепперони',
    price: 35,
    imageUrl: '/assets/images/ingredients/pepperoni.png',
  },
  {
    name: 'Гостра чоризо',
    price: 35,
    imageUrl: '/assets/images/ingredients/chorizo.png',
  },
  {
    name: 'Маринованні огірки',
    price: 22,
    imageUrl: '/assets/images/ingredients/pickles.png',
  },
  {
    name: 'Свежі томати',
    price: 25,
    imageUrl: '/assets/images/ingredients/tomatoes.png',
  },
  {
    name: 'Цибуля червона',
    price: 20,
    imageUrl: '/assets/images/ingredients/red-onion.png',
  },
  {
    name: 'Сочні ананаси',
    price: 23,
    imageUrl: '/assets/images/ingredients/sweet-pineapples.png',
  },
  {
    name: 'Итальянскі трави',
    price: 15,
    imageUrl:
      '/assets/images/ingredients/italian-herbs.png',
  },
  {
    name: 'Солодкий перец',
    price: 20,
    imageUrl: '/assets/images/ingredients/sweet-peppers.png',
  },
  {
    name: 'Кубікі бринзи',
    price: 35,
    imageUrl: '/assets/images/ingredients/feta-cubes.png',
  },
  {
    name: 'Мітболи',
    price: 37,
    imageUrl:
      '/assets/images/ingredients/meatballs.png',
  },
].map((obj, index) => ({ id: index + 1, ...obj }));


export const products = [
  {
    name: 'Омлет з ветчиною та грибами',
    imageUrl: '/assets/images/products/omelet.webp',
    categoryId: 2,
  },
  {
    name: 'Омлет з пеппероні',
    imageUrl: '/assets/images/products/pepperoni-omelet.webp',
    categoryId: 2,
  },
  {
    name: 'Кофе Лате',
    imageUrl: '/assets/images/products/latte.webp',
    categoryId: 2,
  },
  {
    name: 'Денвіч ветчіна та сир',
    imageUrl: '/assets/images/products/sandwich.webp',
    categoryId: 3,
  },
  {
    name: 'Курячі нагетси',
    imageUrl: '/assets/images/products/chicken-nuggets.webp',
    categoryId: 3,
  },
  {
    name: 'Картопля з печі з соусом 🌱',
    imageUrl: '/assets/images/products/baked-potatoes.webp',
    categoryId: 3,
  },
  {
    name: 'Додстер',
    imageUrl: '/assets/images/products/dodster.webp',
    categoryId: 3,
  },
  {
    name: 'Гострий Додстер 🌶️🌶️',
    imageUrl: '/assets/images/products/spicy-dodster.webp',
    categoryId: 3,
  },
  {
    name: 'Банановий молочний коктейль',
    imageUrl: '/assets/images/products/banana-milkshake.webp',
    categoryId: 4,
  },
  {
    name: 'Карамельне яблуко молочний коктейль',
    imageUrl: '/assets/images/products/caramel-apple-milkshake.webp',
    categoryId: 4,
  },
  {
    name: 'Молочний коктейль з печевом Орео',
    imageUrl: '/assets/images/products/oreo-milkshake.webp',
    categoryId: 4,
  },
  {
    name: 'Классичний молочний коктейль 👶',
    imageUrl: '/assets/images/products/classic-milkshake.webp',
    categoryId: 4,
  },
  {
    name: 'Ірландский Капучіно',
    imageUrl: '/assets/images/products/irish-cappuccino.webp',
    categoryId: 5,
  },
  {
    name: 'Кофе Карамельний капучіно',
    imageUrl: '/assets/images/products/caramel-cappuccino.webp',
    categoryId: 5,
  },
  {
    name: 'Кофе Кокосовий Лате',
    imageUrl: '/assets/images/products/coconut-latte.webp',
    categoryId: 5,
  },
  {
    name: 'Кофе Американо',
    imageUrl: '/assets/images/products/americano.webp',
    categoryId: 5,
  },
  {
    name: 'Кофе Лате',
    imageUrl: '/assets/images/products/latte.webp',
    categoryId: 5,
  },
];

