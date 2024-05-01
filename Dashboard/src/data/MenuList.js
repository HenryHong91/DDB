import {
  AiOutlineCalendar,
  AiOutlineShoppingCart,
  AiOutlineAreaChart,
  AiOutlineBarChart,
  AiOutlineStock,
} from "react-icons/ai";
import { FiShoppingBag, FiEdit, FiPieChart } from "react-icons/fi";
import { BsKanban, BsBarChart } from "react-icons/bs";
import { BiColorFill } from "react-icons/bi";
import { IoMdContacts } from "react-icons/io";
import { RiContactsLine, RiStockLine } from "react-icons/ri";
import { GiLouvrePyramid } from "react-icons/gi";
export const MenuList = [
  {
    title: "Dashboard",
    links: [
      {
        name: "ecommerce",
        icon: <FiShoppingBag />,
      },
    ],
  },

  {
    title: "Pages",
    links: [
      {
        name: "orders",
        icon: <AiOutlineShoppingCart />,
      },
      {
        name: "employees",
        icon: <IoMdContacts />,
      },
      {
        name: "customers",
        icon: <RiContactsLine />,
      },
    ],
  },
  {
    title: "Apps",
    links: [
      {
        name: "calendar",
        icon: <AiOutlineCalendar />,
      },
      {
        name: "kanban",
        icon: <BsKanban />,
      },
      {
        name: "editor",
        icon: <FiEdit />,
      },
      {
        name: "color-picker",
        icon: <BiColorFill />,
      },
    ],
  },
  {
    title: "Report",
    links: [
      {
        name: "Vechicle",
        icon: <AiOutlineStock />,
      },
      {
        name: "Location",
        icon: <AiOutlineAreaChart />,
      },

      {
        name: "Customer Segement",

        icon: <FiPieChart />,
      },
      {
        name: "Platform",
        icon: <AiOutlineBarChart />,
      },
      {
        name: "Monthly Sale Report",
        icon: <RiStockLine />,
      },
      {
        name: "Hourly Sale Report",
        icon: <BsBarChart />,
      },
      {
        name: "Age Group",
        icon: <GiLouvrePyramid />,
      },
      {
        name: "Revenue Breakdown",
        icon: <AiOutlineBarChart />,
      },
    ],
  },
];
