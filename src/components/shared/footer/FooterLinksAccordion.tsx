import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

interface TFooterLinksAccordionProps {
  title: string;
  links: {
    label: string;
    path: string;
  }[];
}

const FooterLinksAccordion = ({
  props,
}: {
  props: TFooterLinksAccordionProps[];
}) => {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full"
      defaultValue={`${props[0].title}`}
    >
      {props.map((prop, index) => (
        <AccordionItem key={index} value={prop.title}>
          <AccordionTrigger className="text-md font-semibold">
            {prop?.title}
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <div className="mt-5 flex flex-col gap-3">
              {prop?.links?.map((link, index) => (
                <Link key={index} href={link.path}>
                  <p className="hover:underline duration-500">{link.label}</p>
                </Link>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
      <AccordionItem value="newsLetter">
        <AccordionTrigger className="text-md font-semibold">
          <h1>Newsletter Signup</h1>
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <div>
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
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default FooterLinksAccordion;
