export const doughMap = [
  {
    name: "Тонкое",
    value: "light",
  },
  {
    name: "Толстое",
    value: "large",
  },
];

export const doughCartTextMap = {
  light: "на тонком тесте",
  large: "на толстом тесте",
};

export const sizeMap = [
  {
    multiplier: 1,
    value: "small",
  },
  {
    multiplier: 2,
    value: "normal",
  },
  {
    multiplier: 3,
    value: "big",
  },
];

export const sauceMap = [
  {
    name: "Томатный",
    value: "tomato",
  },
  {
    name: "Сливочный",
    value: "creamy",
  },
];

export const ingredientMap = [
  { name: "Грибы", value: "mushrooms" },
  { name: "Чеддер", value: "cheddar" },
  { name: "Салями", value: "salami" },
  { name: "Ветчина", value: "ham" },
  { name: "Ананас", value: "ananas" },
  { name: "Бекон", value: "bacon" },
  { name: "Лук", value: "onion" },
  { name: "Чили", value: "chile" },
  { name: "Халапеньо", value: "jalapeno" },
  { name: "Маслины", value: "olives" },
  { name: "Томаты", value: "tomatoes" },
  { name: "Лосось", value: "salmon" },
  { name: "Моцарелла", value: "mozzarella" },
  { name: "Пармезан", value: "parmesan" },
  { name: "Блю чиз", value: "blue_cheese" },
];

export const doughClassMapping = {
  light: "small",
  large: "big",
};

export const defaultPizzaCssClass = "pizza--foundation--small-tomato";

export const pizzaFillingMultipleClassMapping = {
  2: "pizza__filling--second",
  3: "pizza__filling--third",
};

export const calculateFilling = (filling, ingredients) => {
  let fillingTotal = 0;
  if (filling === undefined) {
    return 0;
  }
  Object.keys(filling).forEach((fillingItem) => {
    const fillingItemPrice = ingredients.find(
      (ingredient) => ingredient.value === fillingItem
    ).price;
    const fillingItemQuantity = filling[fillingItem];
    fillingTotal += fillingItemPrice * fillingItemQuantity;
  });
  return fillingTotal;
};

export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
