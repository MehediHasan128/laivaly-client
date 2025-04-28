import { NavLink } from "react-router-dom";

type TFooterNavProps = {
  navTitle: string;
  items: {
    lable: string;
    path: string;
  }[];
};

const FooterNav = ({ navTitle, items }: TFooterNavProps) => {
  return (
    <div>
      <h1 className="text-2xl font-semibold">{navTitle}</h1>
      <div className="mt-8 space-y-3 flex flex-col">
        {items?.map((item, idx) => (
          <NavLink
            key={idx}
            to={item.path}
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-white"
                : "hover:translate-x-2 duration-1000 text-gray-400 hover:text-white"
            }
          >
            {item.lable}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default FooterNav;
