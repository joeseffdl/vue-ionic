export default {
  products: [
    {
      id: 1,
      name: "Steak Fries Veggies",
      slug: "steak-fries-veggies",
      category: "Meat",
      price: 175,
      rating: 4.5,
      src: "steak_136.svg",
    },
    {
      id: 2,
      name: "Chicken Salad",
      slug: "chicken-salad",
      category: "Chicken",
      price: 172,
      rating: 4.5,
      src: "chicken_salad_136.svg",
    },
    {
      id: 3,
      name: "Sorvetes Primavera ..",
      slug: "sorvetes-primavera",
      category: "Dessert",
      price: 185,
      rating: 4.5,
      src: "sorvetes_136.svg",
    },
    {
      id: 4,
      name: "Fried Chicken",
      slug: "fried-chicken",
      category: "Chicken",
      price: 175,
      rating: 4.5,
      src: "fried_chicken_136.svg",
    },
  ],
  users: [
    {
      name: "Chou Tzuyu",
      contact_number: "+63 912 345 6789",
      email: "chou.tzu-yu@email.com",
      addresses: [
        {
          title: "My Home Address",
          text: "No. 21 St. Agustin Street, Brgy. De Jose Delgado City 2234 Philippines",
          active: true,
        },
        {
          title: "Work/Office",
          text: "3rd flr Anyeong, Bldg. Seareal St. Joaqin City 3456 Philippines",
        },
      ],
    },
  ],
  paymentOptions: [
    {
      type: "Cash on Delivery",
      description: "Pay when you received the order",
      active: true,
    },
    {
      type: "Loyalty Points",
      description: "Pay using you earned loyalty points",
      value: 0,
    },
    {
      type: "PayPal",
      logo: "",
      description: "A new tab will open to access you account",
    },
    {
      type: "paynamics",
      logo: "",
      description: "Choose paynamics services available from you",
    },
  ],
};
