import { currentUser } from "@/lib/api/currentUser";
import { TUser } from "@/types/user";
import NavbarContent from "./NavbarContent";

const Navbar = async () => {
  const user = (await currentUser()) as TUser;

  return (
    <header className="sticky top-0 lg:fixed lg:w-full z-10 group">
      <NavbarContent user={user} />
    </header>
  );
};

export default Navbar;
