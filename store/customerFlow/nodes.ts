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
    id: "manage-profile",
    position: { x: 0, y: 300 },
    data: { label: "Manage Profile" },
  },
  {
    id: "manage-address",
    position: { x: -200, y: 300 },
    data: { label: "Manage Address" },
  },
  {
    id: "customer-wishlist",
    position: { x: -200, y: 200 },
    data: { label: "Wishlist" },
  },
  {
    id: "add-to-cart",
    position: { x: 200, y: 0 },
    data: { label: "Add to Cart" },
  },
  {
    id: "order-checkout",
    position: { x: 200, y: 100 },
    data: { label: "Checkout" },
  },
  {
    id: "order-payment",
    position: { x: 200, y: 200 },
    data: { label: "Payment" },
  },
  {
    id: "place-order",
    position: { x: 200, y: 300 },
    data: { label: "Place Order" },
  },
  {
    id: "cancel-order",
    position: { x: 200, y: 400 },
    data: { label: "Cancel Order" },
  },
  {
    id: "order-payment-return",
    position: { x: 200, y: 500 },
    data: { label: "Payment Return" },
  }
] as AppNode[];
