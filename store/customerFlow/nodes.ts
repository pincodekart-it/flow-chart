  import { type AppNode } from "./types";

  export const initialNodes = [
    {
      id: "customer-register",
      position: { x: 0, y: 0 },
      data: { label: "Customer Register" },
    },
    {
      id: "customer-login",
      position: { x: 0, y: 100 },
      data: { label: "Customer Login" },
    },
    {
      id: "customer-account",
      position: { x: 0, y: 200 },
      data: { label: "Customer Account" },
    },
    {
      id: "customer-add-to-cart",
      position: { x: 0, y: 300 },
      data: { label: "Customer Add to Cart" },
    },
    {
      id: "customer-checkout",
      position: { x: 0, y: 400 },
      data: { label: "Customer Checkout" },
    },
    {
      id: "customer-payment",
      position: { x: 0, y: 500 },
      data: { label: "Customer Payment" },
    },
    {
      id: "customer-order",
      position: { x: 200, y: 0 },
      data: { label: "Customer Order" },
    },
    {
      id: "customer-wishlist",
      position: { x: 200, y: 100 },
      data: { label: "Customer Wishlist" },
    },
  ] as AppNode[];
