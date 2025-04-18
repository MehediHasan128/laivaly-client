import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenuItem,
  SidebarRail,
  SidebarTrigger,
} from "../ui/sidebar";
import NavMain from "./NavMain";
import NavUser from "./NavUser";
import logo from "../../assets/images/logo/logo.png";


interface TAppSidebarProps extends React.ComponentProps<typeof Sidebar> {
  buttonClicked: boolean;
  setButtonClicked: React.Dispatch<React.SetStateAction<boolean>>;
}

const AppSidebar = ({
  buttonClicked,
  setButtonClicked,
  ...props
}: TAppSidebarProps) => {
  return (
    <Sidebar collapsible="icon" variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenuItem className="flex justify-between">
          <div className="flex items-center gap-2 py-2">
            <div className="flex size-8 md:size-10 items-center justify-center rounded-lg">
              <img src={logo} alt="" />
            </div>
            <div className="grid flex-1 text-left">
              <span
                id="logo"
                className="truncate font-semibold text-2xl md:text-3xl"
              >
                Laivaly
              </span>
            </div>
          </div>

          <div className="block md:hidden">
            <SidebarTrigger
              onClick={() => setButtonClicked(!buttonClicked)}
              clicked={buttonClicked}
            />
          </div>
        </SidebarMenuItem>
      </SidebarHeader>

      <SidebarContent className="my-3">
        <NavMain />
      </SidebarContent>

      <SidebarFooter>
        <div className="bg-gray-100 rounded-lg py-0.5">
          <NavUser />
        </div>
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  );
};

export default AppSidebar;
