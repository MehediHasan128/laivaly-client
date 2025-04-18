import { generateUserRoutes } from "@/utils/generateUserRoutes";
import { LiaClipboardListSolid } from "react-icons/lia";
import { VscAccount } from "react-icons/vsc";
import { MdOutlineLocalShipping, MdOutlinePayment } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import { IoGiftOutline, IoSettingsOutline } from "react-icons/io5";
import MyAccount from "@/buyer/myAccount/MyAccount";
import MyOrders from "@/buyer/myOrders/MyOrders";
import Payment from "@/buyer/payment/Payment";
import SupportAndCommunication from "@/buyer/support&Communication/SupportAndCommunication";
import ShippingAndReturns from "@/buyer/shipping&Returns/ShippingAndReturns";
import Reward from "@/buyer/rewards/Reward";
import Settings from "@/buyer/settings/Settings";

export const userRoutesAndPaths = [
  {
    index: true,
    title: "My Account",
    element: <MyAccount />,
    icon: <VscAccount />,
  },
  {
    title: "My Account",
    path: "/profile/my-account",
    element: <MyAccount />,
    icon: <VscAccount />,
  },
  {
    title: "My Oders",
    path: "/profile/my-orders",
    element: <MyOrders />,
    icon: <LiaClipboardListSolid />,
  },
  {
    title: "Payment",
    path: "/profile/payment",
    element: <Payment />,
    icon: <MdOutlinePayment />,
  },
  {
    title: "Shipping & Returns",
    path: "/profile/shipping-returns",
    element: <ShippingAndReturns />,
    icon: <MdOutlineLocalShipping />,
  },
  {
    title: "Support & Communication",
    path: "/profile/support",
    element: <SupportAndCommunication />,
    icon: <BiSupport />,
  },
  {
    title: "Rewards & Offers",
    path: "/profile/rewards",
    element: <Reward />,
    icon: <IoGiftOutline />,
  },
  {
    title: "Settings",
    path: "/profile/settings",
    element: <Settings />,
    icon: <IoSettingsOutline />,
  },
];

export const userRoutes = generateUserRoutes(userRoutesAndPaths);
