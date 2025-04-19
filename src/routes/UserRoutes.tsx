import { BiSupport } from "react-icons/bi";
import Reward from "@/buyer/rewards/Reward";
import Payment from "@/buyer/payment/Payment";
import MyOrders from "@/buyer/myOrders/MyOrders";
import Settings from "@/buyer/settings/Settings";
import MyAccount from "@/buyer/myAccount/MyAccount";
import { RiAccountCircleLine } from "react-icons/ri";
import { LiaClipboardListSolid } from "react-icons/lia";
import { generateUserRoutes } from "@/utils/generateUserRoutes";
import { IoGiftOutline, IoSettingsOutline } from "react-icons/io5";
import { MdOutlineLocalShipping, MdOutlinePayment } from "react-icons/md";
import ShippingAndReturns from "@/buyer/shipping&Returns/ShippingAndReturns";
import SupportAndCommunication from "@/buyer/support&Communication/SupportAndCommunication";
import { IoMdHeartEmpty } from "react-icons/io";

export const userRoutesAndPaths = [
  {
    index: true,
    title: "My Account",
    element: <MyAccount />,
    icon: <RiAccountCircleLine />,
  },
  {
    title: "My Account",
    path: "/profile/my-account",
    element: <MyAccount />,
    icon: <RiAccountCircleLine />,
  },
  {
    title: "My Oders",
    path: "/profile/my-orders",
    element: <MyOrders />,
    icon: <LiaClipboardListSolid />,
  },
  {
    title: "My Wishlist",
    path: "/profile/my-wishlist",
    element: <MyOrders />,
    icon: <IoMdHeartEmpty />,
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
