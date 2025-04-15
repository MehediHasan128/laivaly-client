import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import logo from "../../../assets/images/logo/lWhite160.png";
import FooterNav from "@/components/reusable/FooterNav";

const categories = [
  { lable: "Shirt", path: "/shirt" },
  { lable: "T-Shirt", path: "/t-shirt" },
  { lable: "Pant", path: "/pant" },
  { lable: "Jacket", path: "/jacket" },
  { lable: "Bottoms", path: "/bottoms" },
];
const customerCares = [
  { lable: "FAQ", path: "/faq" },
  { lable: "Shipping", path: "/shipping" },
  { lable: "Order Status", path: "/orderStatus" },
  { lable: "Return & Exchange", path: "/returnExchange" },
];
const companies = [
  { lable: "Privacy", path: "/privacy" },
  { lable: "Guides", path: "/guides" },
  { lable: "Terms & Condition", path: "/termsCondition" },
];

const Footer = () => {
  return (
    <div className="bg-black px-10 text-white">
      <div className="flex justify-between flex-col lg:flex-row gap-20 lg:gap-0 py-20">
        <div className="flex flex-wrap gap-16 lg:gap-46">
          <div className="text-justify text-5xl space-y-5 lg:w-[20%]">
            <div className="space-y-5 w-fit">
              <img className="w-16 mx-auto" src={logo} alt="" />
              <h1 style={{fontFamily: "Great Vibes"}}>Laivaly</h1>
            </div>
            <div className="text-sm md:w-[50%] lg:w-[100%] text-gray-400">
              <p>
                At Laivaly, we believe that fashion should be accessible,
                empowering, and expressive. Our carefully curated collections
                bring you the latest trends, timeless styles, and everyday
                essentials—all in one place. Whether you're dressing up for a
                special occasion or keeping it casual, Laivaly is here to help
                you look and feel your best. Thank you for choosing us to be
                part of your style journey. Stay stylish, stay confident—stay
                Laivaly.
              </p>
            </div>
          </div>
          <FooterNav navTitle="Categories" items={categories} />
          <FooterNav navTitle="Coustomer Care" items={customerCares} />
          <FooterNav navTitle="Company" items={companies} />
        </div>
        <div className="text-3xl flex gap-10">
          <FaFacebookF />
          <FaInstagram />
          <FaYoutube />
          <FaXTwitter />
        </div>
      </div>

      <div className="flex-grow border-t border-gray-800"></div>

      <div className="text-center p-5">
        <h1>© 2025 Laivaly - All Rights Reserved</h1>
      </div>
    </div>
  );
};

export default Footer;
