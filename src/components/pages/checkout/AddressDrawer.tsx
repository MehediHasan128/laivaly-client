"use client";

import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { TShippingAddress } from "@/types/customer.type";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";

const AddressDrawer = ({
  children,
  shippingAddress,
  defaultAddress,
  setShippingAddress,
}: {
  children: ReactNode;
  shippingAddress: TShippingAddress[] | [];
  defaultAddress: TShippingAddress;
  setShippingAddress: Dispatch<SetStateAction<TShippingAddress | undefined>>;
}) => {
  const [direction, setDirection] = useState<"right" | "bottom">("bottom");
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);

  useEffect(() => {
    const updateDirection = () => {
      if (window.innerWidth >= 1024) {
        setDirection("right");
      } else {
        setDirection("bottom");
      }
    };

    updateDirection();

    window.addEventListener("resize", updateDirection);

    return () => window.removeEventListener("resize", updateDirection);
  }, []);

  const handleChangeShippingAddress = (value: string) => {
    const selectedAddress = shippingAddress.find(
      (address) => address._id === value
    );
    setShippingAddress(selectedAddress);
    setOpenDrawer(false);
  };

  return (
    <Drawer
      direction={direction}
      open={openDrawer}
      onOpenChange={setOpenDrawer}
    >
      <DrawerTrigger asChild>{children}</DrawerTrigger>
      <DrawerContent className="data-[vaul-drawer-direction=right]:sm:max-w-lg pb-10 xl:pb-0">
        <DrawerHeader className="border-b">
          <DrawerTitle className="text-center">
            Choose Another Address
          </DrawerTitle>
        </DrawerHeader>

        <div className="h-full p-10">
          <RadioGroup
            defaultValue={defaultAddress._id}
            onValueChange={(value) => handleChangeShippingAddress(value)}
          >
            {shippingAddress?.length > 0 ? (
              <>
                {shippingAddress.map((address: TShippingAddress) => (
                  <div
                    key={address._id}
                    className="flex items-center gap-5 border-b py-5"
                  >
                    <RadioGroupItem value={address._id} id={address._id} />
                    <Label htmlFor={address._id} className="cursor-pointer">
                      <div className="font-medium text-gray-600 text-sm md:text-base">
                        <p>{address?.addressCategory}</p>
                        <h1 className="text-base md:text-xl">
                          {address?.recipientsName}
                        </h1>
                        <p>{address?.phoneNumber}</p>
                        <p>{address?.address}</p>
                        <p>
                          {address?.city}-{address?.postalCode}
                        </p>
                        <p>
                          {address?.state}, {address?.country}
                        </p>
                      </div>
                    </Label>
                  </div>
                ))}
              </>
            ) : (
              <></>
            )}
          </RadioGroup>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default AddressDrawer;
