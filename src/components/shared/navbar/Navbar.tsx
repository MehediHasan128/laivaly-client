import { currentUser } from "@/lib/api/currentUser";
import { TUser } from "@/types/user";
import NavbarContent from "./NavbarContent";

const Navbar = async () => {
  const user = (await currentUser()) as TUser;

  return (
    <>
      <NavbarContent user={user} />
    </>
  );
};

export default Navbar;
