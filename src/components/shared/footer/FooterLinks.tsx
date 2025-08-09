import Link from "next/link";


interface TFooterLinksProps {
    title: string;
    links: {
        label: string;
        path: string;
    }[];
}


const FooterLinks = ({title, links}: TFooterLinksProps) => {
    return (
        <div>
            <h1 className="text-xl xl:text-2xl font-medium">{title}</h1>
            <div className="mt-5 flex flex-col gap-3">
              {links?.map((link, index) => (
                <Link key={index} href={link.path}>
                  <p className="hover:underline duration-500">{link.label}</p>
                </Link>
              ))}
            </div>
          </div>
    );
};

export default FooterLinks;