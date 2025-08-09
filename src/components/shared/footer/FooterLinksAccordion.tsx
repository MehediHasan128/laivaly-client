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
    </Accordion>
  );
};

export default FooterLinksAccordion;
