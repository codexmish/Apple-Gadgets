import {
  Box,
  Gift,
  MapPinHouse,
  Repeat,
  ShoppingCart,
  UserRound,
} from "lucide-react";

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
    icon: <UserRound />,
  },
  {
    name: "Orders",
    href: "/account/orders",
    icon: <Box />,
  },
  {
    name: "Addresses",
    href: "/account/addresses",
    icon: <MapPinHouse />,
  },
];

export { upperMenuItem, iconMenu, accountSidebar };
