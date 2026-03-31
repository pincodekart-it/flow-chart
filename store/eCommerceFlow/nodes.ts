import { type AppNode } from "./types";
import { initialNodes as orderPaymentNodes } from "../orderPaymentFlow/nodes";
import { initialNodes as customerNodes } from "../customerFlow/nodes";
export const initialNodes = [
  ...orderPaymentNodes,
  ...customerNodes,
  {
    id: "order-checkout",
    position: { x: 200, y: 0 },
    data: { label: "Checkout" },
  },
  {
    id: "order-payment",
    position: { x: 200, y: 100 },
    data: { label: "Payment" },
  },
  {
    id: "order-confirmed",
    position: { x: 200, y: 200 },
    data: { label: "Order Confirmed" },
  },
  {
    id: "cancel-order",
    position: { x: 200, y: 300 },
    data: { label: "Cancel Order" },
  },
  {
    id: "order-payment-return",
    position: { x: 200, y: 400 },
    data: { label: "Payment Return" },
  },
] as AppNode[];
