import Container from "@/components/reusable/Container";
import Link from "next/link";
import FooterLinks from "./FooterLinks";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterest,
  FaTiktok,
} from "react-icons/fa6";
import FooterLinksAccordion from "./FooterLinksAccordion";

const quickLinks = {
  title: "Shop",
  links: [
    { label: "Men", path: "/" },
    { label: "Women", path: "/" },
    { label: "Kids", path: "/" },
    { label: "New Arrivals", path: "/" },
  ],
};

const customerServicesLinks = {
  title: "Customer Service",
  links: [
    { label: "Contact Us", path: "/" },
    { label: "FAQs", path: "/" },
    { label: "Shipping Information", path: "/" },
    { label: "Returns & Exchanges", path: "/" },
  ],
};

const aboutLinks = {
  title: "About",
  links: [
    { label: "Our Story", path: "/" },
    { label: "Sustainability", path: "/" },
    { label: "Careers", path: "/" },
    { label: "Blog", path: "/" },
  ],
};

const legalLinks = {
  title: "Legal",
  links: [
    { label: "Privacy Policy", path: "/" },
    { label: "Terms & Conditions", path: "/" },
    { label: "Cookie Policy", path: "/" },
  ],
};

const allLinks = [quickLinks, customerServicesLinks, aboutLinks, legalLinks]

const Footer = () => {
  return (
    <footer className="mt-10">
      <div className="border-t lg:hidden">
        <Container>
          <div className="px-5">
            <FooterLinksAccordion props={allLinks} />
          </div>
        </Container>
      </div>

      <div className="border-t hidden lg:block">
        <Container>
          {/* Nav links and news letter */}
          <div className="grid grid-cols-5">
            {/* Quick Links / Shop */}
            <FooterLinks props={quickLinks} />
            {/* Quick Links / Shop */}
            <FooterLinks props={customerServicesLinks} />
            {/* About */}
            <FooterLinks props={aboutLinks} />
            {/* Legal */}
            <FooterLinks props={legalLinks} />

            {/* News Letter section */}
            <div>
              <h1 className="text-xl xl:text-2xl font-medium">
                Newsletter Signup
              </h1>
              <p className="my-2">
                Subscribe for exclusive offers and new arrivals
              </p>
              <div>
                {/* Email Input */}
                <input
                  type="email"
                  placeholder="Drop your email, get the trends"
                  className="border w-full outline-none focus:border-black p-3 rounded-md mb-2"
                />
                {/* Subscribe button */}
                <button className="border rounded-md bg-black text-white cursor-pointer active:scale-95 duration-500 px-5 py-2">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div className="border-t py-10">
        <div className="text-center space-y-4">
          <div className="relative size-16 md:size-20 lg:size-24 mx-auto">
            <Image
              src="/images/logo/logo.png"
              alt="logo"
              quality={100}
              fill
              className="object-center"
            />
          </div>
          <h1 className="md:text-lg font-medium">
            Laivaly — Modern, high-quality fashion for Men, Women & Kids.
          </h1>
          <p className="font-bold">Follow Us On</p>
          <div className="flex justify-center items-center gap-3 text-2xl">
            <FaInstagram className="cursor-pointer hover:-translate-y-1 duration-500" />
            <FaFacebookF className="cursor-pointer hover:-translate-y-1 duration-500" />
            <FaTiktok className="cursor-pointer hover:-translate-y-1 duration-500" />
            <FaPinterest className="cursor-pointer hover:-translate-y-1 duration-500" />
          </div>
        </div>
      </div>

      <div className="border-t p-5 text-center font-semibold">
        <p>© 2025 Laivaly. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
