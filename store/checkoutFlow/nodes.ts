import { type AppNode } from "./types";

export const initialNodes = [
  {
    id: "checkout-flow-checkout",
    position: { x: 200, y: 0 },
    data: { label: "Checkout" },
  },
  {
    id: "checkout-flow-select-address",
    position: { x: 200, y: 100 },
    data: { label: "Select Address" },
  },
  {
    id: "checkout-flow-delivery-options",
    position: { x: 200, y: 200 },
    data: { label: "Delivery Options" },
  },
  {
    id: "checkout-flow-payment",
    position: { x: 200, y: 300 },
    data: { label: "Payment" },
  },
  {
    id: "checkout-flow-confirmed",
    position: { x: 200, y: 400 },
    data: { label: "Order Confirmed" },
  },
] as AppNode[];
