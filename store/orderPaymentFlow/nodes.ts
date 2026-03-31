import { type AppNode } from "./types";

export const initialNodes = [
  {
    id: "payment-initiated",
    position: { x: 500, y: 0 },
    data: { label: "Payment Initiated" },
  },
  {
    id: "payment-processing",
    position: { x: 500, y: 100 },
    data: { label: "Payment Processing" },
  },
  {
    id: "payment-successful",
    position: { x: 400, y: 200 },
    data: { label: "Payment Successful" },
  },
  {
    id: "payment-failed",
    position: { x: 600, y: 200 },
    data: { label: "Payment Failed" },
  }
] as AppNode[];
