import { FaFacebookF, FaInstagram, FaXTwitter, FaYoutube } from "react-icons/fa6";
import logo from "../../../assets/images/logo/lWhite160.png";
import FooterNav from "@/components/ui/FooterNav";

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

      <div className="flex justify-between py-20">
        <div className="flex gap-46">
          <div className="text-justify text-5xl space-y-5 w-[20%]">
            <div className="space-y-5 w-fit">
              <img className="w-16 mx-auto" src={logo} alt="" />
              <h1 id="logo">Laivaly</h1>
            </div>
            <div className="text-sm">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
                ducimus nemo. Non voluptate fugiat neque quasi. Aliquam,
                aspernatur! At, dignissimos.
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
