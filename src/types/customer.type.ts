import { TUser, TUserName } from "./user";

export interface TShippingAddress {
  _id: string;
  addressCategory: string;
  recipientsName: string;
  phoneNumber: string;
  address: string;
  city: string;
  postalCode: string;
  state: string;
  country: string;
  defaultAddress: boolean;
}

export interface TCustomerProfile {
  _id: string;
  userId: TUser;
  customerId: string;
  userName: TUserName;
  userEmail: string;
  phoneNumber: string;
  dateOfBirth: string | null;
  gender: string | null;
  shippingAddress: TShippingAddress[] | [];
}
