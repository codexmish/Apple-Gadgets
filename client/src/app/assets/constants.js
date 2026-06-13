import { Gift, Repeat, ShoppingCart, UserRound } from "lucide-react";

const upperMenuItem = [
  {
    itemName: "Blog",
    itemLink: "/",
  },
  {
    itemName: "Pre-order",
    itemLink: "/",
  },
  {
    itemName: "Offers",
    itemLink: "/",
    icon: Gift,
  },
  {
    itemName: "Compare",
    itemLink: "/",
    icon: Repeat,
  },
];

const iconMenu = [
  {
    name: "CarTaxiFront",
    itamLink: "/",
    icon: <ShoppingCart />,
  },
  {
    name: "account",
    itamLink: "/signin",
    icon: <UserRound />,
  },
];


const accountSidebar = [
    {
      name: "Account Details",
      href: "/account",
    },
    {
      name: "Orders",
      href: "/account/orders",
    },
    {
      name: "Addresses",
      href: "/account/addresses",
    },
  ];

export { upperMenuItem, iconMenu, accountSidebar };
