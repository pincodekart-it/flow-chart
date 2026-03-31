import { type AppNode } from "./types";

export const initialNodes = [
  {
    id: "payment-initiated",
    position: { x: 0, y: 0 },
    data: { label: "Payment Initiated" },
  },
  {
    id: "payment-processing",
    position: { x: 0, y: 100 },
    data: { label: "Payment Processing" },
  },
  {
    id: "payment-successful",
    position: { x: -100, y: 200 },
    data: { label: "Payment Successful" },
  },
  {
    id: "order-confirmed",
    position: { x: -100, y: 300 },
    data: { label: "Order Confirmed" },
  },
  {
    id: "payment-failed",
    position: { x: 100, y: 200 },
    data: { label: "Payment Failed" },
  }
] as AppNode[];
