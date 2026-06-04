import { TShippingAddress } from "./customer.type";
import { TUser } from "./user";

export interface TOrderItems {
  title: string;
  productFor: string;
  price: number;
  discount: number;
  productImages: string;
  quantity: number;
  color: string;
  size: string;
  SKU: string;
  productId: string;
}

export interface TPaymentInfo {
  TXID?: string;
  email?: string;
  paidAt?: Date;
  status?: "success" | "failed";
}

export interface TOrderData {
  _id: string;
  orderId: string;
  userId: TUser;
  orderItems: TOrderItems[];
  subTotal: number;
  shippingCharge: number;
  tax: number;
  grandTotal: number;
  shippingMethod: "standard" | "second Day" | "overnight";
  shippingAddress: TShippingAddress;
  paymentMethod: "stripe" | "sslcommerz" | "cod";
  paymentInfo?: TPaymentInfo;
  paymentStatus: "pending" | "paid" | "failed" | "refunded";
  orderStatus:
    | "pending"
    | "processing"
    | "shipped"
    | "delivered"
    | "cancelled"
    | "returned";
  createdAt: string;
}
