import { resetPasswordLink, userLogin } from "@/lib/api/auth/auth";
import { createCustomerAcoount } from "@/lib/api/user/user";
import { TError, TResponce } from "@/types/types";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { getWishlistProductFromLocalStorage } from "./wishlist";
import { ProductWishlistType } from "@/types/wishlist.type";
import { addWishlistProductToLocalStorage } from "@/lib/api/wishlist/wishlist.api";
import { decodedUserToken } from "@/utils";
import { TUser } from "@/types/user";

export const handleCustomerLogin = async (
  userCredential: FieldValues,
  loading: (value: boolean) => void,
  setIsPassWrong: (value: boolean) => void,
  router: AppRouterInstance,
) => {
  loading(true);
  try {
    const res = (await userLogin(userCredential)) as TResponce;

    if (res?.success) {
      const wishlistProducts =
        getWishlistProductFromLocalStorage() as ProductWishlistType[];
      if (wishlistProducts.length > 0) {
        const productIds = wishlistProducts.map((product) => product._id);

        const productIdsToAddInWishlist =
          (await addWishlistProductToLocalStorage(productIds)) as TResponce;
        if (productIdsToAddInWishlist.success) {
          localStorage.removeItem("guest_wishlist_items");
        }
      }
    }

    const accessToken = res?.data.accessToken;

    const userData = decodedUserToken(accessToken as string) as TUser;

    switch (userData.userRole) {
      case "customer":
        router.push("/home");
        break;
      case "admin":
        router.push("/admin/dashboard");
        break;
      default:
        router.push("/home");
    }
    toast.success(res?.message);
    loading(false);
  } catch (err) {
    const error = err as TError;
    toast.error(error?.data?.message);
    loading(false);
    setIsPassWrong(true);
  }
};

export const handleForgetUserPassword = async (userEmail: string) => {
  try {
    const res = (await resetPasswordLink(userEmail as string)) as TResponce;
    toast.success(res?.message);
  } catch (err) {
    const error = err as TError;
    toast.error(error?.data?.message);
  }
};

export const handleCreateCustomerAccount = async (
  data: FieldValues,
  loading: (value: boolean) => void,
  router: AppRouterInstance,
  passLength: boolean,
  passHaveCapitalLetter: boolean,
  passHaveSpecialChar: boolean,
  passHaveNumber: boolean,
) => {
  loading(true);
  const toastId = toast.loading("Loading...");
  const { userName, userEmail, password, confirmPassword } = data;

  if (
    password === confirmPassword &&
    passLength &&
    passHaveCapitalLetter &&
    passHaveSpecialChar &&
    passHaveNumber
  ) {
    const customerData = {
      password,
      customer: {
        userName,
        userEmail,
      },
    };

    try {
      const res = (await createCustomerAcoount(customerData)) as TResponce;
      toast.success(res.message, { id: toastId });
      router.push(`/verify-email?userEmail=${res?.data[0].userEmail}`);
      loading(false);
    } catch (err) {
      const error = err as TError;
      toast.error(error?.data?.message, { id: toastId });
      loading(false);
    }
  } else {
    if (!passLength) {
      toast.error("Password must be at least 8 characters long", {
        id: toastId,
      });
      loading(false);
    } else if (!passHaveCapitalLetter) {
      toast.error("Password must contain at least one uppercase letter", {
        id: toastId,
      });
      loading(false);
    } else if (!passHaveSpecialChar) {
      toast.error("Password must contain at least one special character", {
        id: toastId,
      });
      loading(false);
    } else if (!passHaveNumber) {
      toast.error("Password must contain at least one number", {
        id: toastId,
      });
      loading(false);
    } else {
      toast.error("Confirm password must be matched with new password", {
        id: toastId,
      });
      loading(false);
    }
  }
};
