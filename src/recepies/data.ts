import type { Category, Ingredient, Quantity, Recipe } from "../types";

// --- Master Data ---

const quantities: Quantity[] = [
  { id: 1, name: "g" },
  { id: 2, name: "ml" },
  { id: 3, name: "pcs" },
  { id: 4, name: "tbsp" },
  { id: 5, name: "tsp" },
  { id: 6, name: "cup" },
  { id: 7, name: "l" },
];

const ingredients: Ingredient[] = [
  { id: 1, name: "Potato" },
  { id: 2, name: "Onion" },
  { id: 3, name: "All-purpose flour" },
  { id: 4, name: "Egg" },
  { id: 5, name: "Salt" },
  { id: 6, name: "Vegetable oil" },
  { id: 7, name: "Sour cream" },
  { id: 8, name: "Beets" },
  { id: 9, name: "Cucumber" },
  { id: 10, name: "Radish" },
  { id: 11, name: "Green onions" },
  { id: 12, name: "Dill" },
  { id: 13, name: "Kefir" },
  { id: 14, name: "Pork belly" },
  { id: 15, name: "Smoked sausage" },
  { id: 16, name: "Sugar" },
  { id: 17, name: "Black pepper" },
  { id: 18, name: "Pork" },
  { id: 19, name: "Beef" },
  { id: 20, name: "Bay leaf" },
  { id: 21, name: "Allspice" },
];

const categories: Category[] = [
  { id: 1, name: "Main Course" },
  { id: 2, name: "Soup" },
  { id: 3, name: "Side Dish" },
  { id: 4, name: "Baked Goods" },
];

// --- Recipes ---

export const belarusianRecipes: Recipe[] = [
  {
    id: 1,
    name: "Draniki",
    description:
      "The quintessential Belarusian dish, these are crispy potato pancakes, golden-brown and delicious. Traditionally served with a generous dollop of sour cream or a rich mushroom sauce (machanka).",
    category: categories[2], // Side Dish
    ingredients: [
      { ingredient: ingredients[0], quantity: quantities[0], count: 1000 },
      { ingredient: ingredients[1], quantity: quantities[2], count: 1 },
      { ingredient: ingredients[3], quantity: quantities[2], count: 1 },
      { ingredient: ingredients[4], quantity: quantities[4], count: 1 },
      { ingredient: ingredients[5], quantity: quantities[1], count: 100 },
      { ingredient: ingredients[6], quantity: quantities[0], count: 200 },
    ],
    steps: [
      "Peel potatoes and one onion. Grate them finely, using a food processor or a hand grater.",
      "Transfer the grated mixture to a cheesecloth or a fine sieve and squeeze out as much liquid as possible. This is key to crispy draniki.",
      "In a bowl, combine the potato-onion mixture with an egg and a teaspoon of salt. Mix thoroughly.",
      "Heat vegetable oil in a large skillet over medium-high heat.",
      "Spoon the batter into the hot pan to form small pancakes. Fry for 3-5 minutes per side, until golden brown and crispy.",
      "Serve hot with sour cream.",
    ],
    image: "draniki.jpg",
  },
  {
    id: 2,
    name: "Chaladnik (Cold Borscht)",
    description:
      "A refreshing cold beet soup, perfect for hot summer days. Its vibrant pink color and tangy flavor come from beets and kefir, garnished with fresh herbs and hard-boiled eggs.",
    category: categories[1], // Soup
    ingredients: [
      { ingredient: ingredients[7], quantity: quantities[0], count: 500 },
      { ingredient: ingredients[8], quantity: quantities[2], count: 2 },
      { ingredient: ingredients[9], quantity: quantities[0], count: 200 },
      { ingredient: ingredients[10], quantity: quantities[0], count: 100 },
      { ingredient: ingredients[11], quantity: quantities[0], count: 50 },
      { ingredient: ingredients[3], quantity: quantities[2], count: 4 },
      { ingredient: ingredients[12], quantity: quantities[6], count: 1 },
      { ingredient: ingredients[4], quantity: quantities[4], count: 1 },
    ],
    steps: [
      "Boil the beets until tender, then peel and grate them. Let them cool.",
      "Hard-boil the eggs, peel, and chop them.",
      "Finely chop the cucumbers, radishes, green onions, and dill.",
      "In a large bowl, combine the grated beets, chopped vegetables, and eggs.",
      "Pour in the kefir, stirring gently to combine everything. Season with salt to taste.",
      "Chill the soup in the refrigerator for at least an hour before serving.",
      "Serve cold, garnished with extra dill.",
    ],
    image: "chaladnik.jpg",
  },
  {
    id: 3,
    name: "Babka (Potato Pie)",
    description:
      "A savory and hearty baked potato pie, often containing pieces of smoked pork belly or sausage. It's a rustic, filling dish that is baked until it has a wonderfully crisp crust.",
    category: categories[3], // Baked Goods
    ingredients: [
      { ingredient: ingredients[0], quantity: quantities[0], count: 1500 },
      { ingredient: ingredients[1], quantity: quantities[2], count: 2 },
      { ingredient: ingredients[13], quantity: quantities[0], count: 300 },
      { ingredient: ingredients[3], quantity: quantities[2], count: 2 },
      { ingredient: ingredients[2], quantity: quantities[3], count: 2 },
      { ingredient: ingredients[4], quantity: quantities[4], count: 2 },
      { ingredient: ingredients[16], quantity: quantities[4], count: 1 },
    ],
    steps: [
      "Preheat your oven to 180°C (350°F). Grease a baking dish.",
      "Cut the pork belly into small cubes and fry it with chopped onions until golden.",
      "Peel and grate the potatoes. Squeeze out excess liquid.",
      "In a large bowl, mix the grated potatoes, fried pork belly and onions, eggs, flour, salt, and pepper.",
      "Pour the mixture into the prepared baking dish and smooth the top.",
      "Bake for 60-90 minutes, or until the top is deeply golden and crispy.",
      "Let it cool slightly before slicing and serving. It's great with a glass of cold milk.",
    ],
    image: "babka.jpg",
  },
  {
    id: 4,
    name: "Machanka",
    description:
      "A rich and savory pork stew, often made with a variety of meats like ribs and sausage. It's typically served with thick pancakes (bliny) which are used to dip into the stew.",
    category: categories[0], // Main Course
    ingredients: [
      { ingredient: ingredients[17], quantity: quantities[0], count: 500 }, // Pork Ribs
      { ingredient: ingredients[14], quantity: quantities[0], count: 300 },
      { ingredient: ingredients[1], quantity: quantities[2], count: 2 },
      { ingredient: ingredients[2], quantity: quantities[3], count: 2 },
      { ingredient: ingredients[19], quantity: quantities[2], count: 2 },
      { ingredient: ingredients[20], quantity: quantities[2], count: 4 },
      { ingredient: ingredients[4], quantity: quantities[4], count: 1 },
      { ingredient: ingredients[16], quantity: quantities[4], count: 1 },
    ],
    steps: [
      "In a large pot, brown the pork ribs and sausage.",
      "Add chopped onions and cook until softened.",
      "Stir in the flour and cook for a minute to make a roux.",
      "Gradually add water or broth, stirring constantly to avoid lumps. Bring to a simmer.",
      "Add bay leaves and allspice. Season with salt and pepper.",
      "Cover and simmer for at least 1-1.5 hours, until the meat is very tender.",
      "Serve hot, traditionally with bliny (thick pancakes) for dipping.",
    ],
    image: "machanka.jpg",
  },
  {
    id: 5,
    name: "Kalduny",
    description:
      "Belarusian stuffed dumplings, similar to Polish pierogi or Russian pelmeni. These can be filled with minced meat, mushrooms, or cheese, and are boiled or fried.",
    category: categories[0], // Main Course
    ingredients: [
      // Dough
      { ingredient: ingredients[2], quantity: quantities[0], count: 400 },
      { ingredient: ingredients[3], quantity: quantities[2], count: 1 },
      { ingredient: ingredients[4], quantity: quantities[4], count: 1 },
      // Filling
      { ingredient: ingredients[18], quantity: quantities[0], count: 250 },
      { ingredient: ingredients[1], quantity: quantities[2], count: 1 },
      { ingredient: ingredients[16], quantity: quantities[4], count: 1 },
    ],
    steps: [
      "For the dough: Mix flour, egg, a pinch of salt, and warm water. Knead until smooth, then let it rest for 30 minutes.",
      "For the filling: Finely mince the pork and onion. Season with salt and pepper.",
      "Roll out the dough thinly and cut out circles using a glass.",
      "Place a small amount of filling in the center of each circle. Fold in half and press the edges to seal.",
      "Boil the kalduny in salted water for 5-7 minutes, until they float to the surface.",
      "Alternatively, they can be pan-fried after boiling until golden brown.",
      "Serve with sour cream or fried onions.",
    ],
    image: "kalduny.jpg",
  },
];
