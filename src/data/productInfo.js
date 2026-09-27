// productInfo.js
import classicTiffin from "../assets/Classic-Full-Tiffin-homemade-food.webp";
import khichdiBowl from "../assets/Khichdi-Bowl-homemade-food.webp";
import miniTiffin from "../assets/Mini-Tiffin-homemade-food.webp";

const productInfo = [
  {
    productId: 1,
    name: "Khichdi Bowl",
    description: "Moong Khichdi · Kadhi · Papad · Pickle",
    price: 70,
    type: "veg",
    spice: "mild",
    bestseller: false,
    image: khichdiBowl,
  },
  {
    productId: 2,
    name: "Dal Rice Mini",
    description: "Dal Tadka · Steamed Rice · Raita",
    price: 90,
    type: "veg",
    spice: "mild",
    bestseller: true,
    image: miniTiffin,
  },
  {
    productId: 3,
    name: "Diet Full Meal",
    description: "Light Dal · Sabji · 3 Roti · Brown Rice · Raita",
    price: 110,
    type: "veg",
    spice: "mild",
    bestseller: true,
    image: classicTiffin,
  },
  {
    productId: 4,
    name: "Classic Full Tiffin",
    description: "Dal Tadka · Paneer Butter Masala · Rice · 3 Roti · Raita",
    price: 120,
    type: "veg",
    spice: "medium",
    bestseller: false,
    image: classicTiffin,
  },
  {
    productId: 5,
    name: "Chicken Curry Meal",
    description: "Chicken Curry · Steamed Rice · 2 Roti",
    price: 130,
    type: "nonveg",
    spice: "medium",
    bestseller: false,
    image: classicTiffin,
  },
  {
    productId: 6,
    name: "Rajma Chawal Bowl",
    description: "Rajma · Steamed Rice · Onion Salad",
    price: 75,
    type: "veg",
    spice: "mild",
    bestseller: false,
    image: khichdiBowl,
  },
];

export default productInfo;