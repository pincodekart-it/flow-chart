import { type Edge } from "@xyflow/react";

export const initialEdges = [
  {
    id: "order-payment-edge-1",
    source: "payment-initiated",
    target: "payment-processing",
    type: "step",
  },
  {
    id: "order-payment-edge-2",
    source: "payment-processing",
    target: "payment-successful",
    type: "step",
  },
  {
    id: "order-payment-edge-3",
    source: "payment-processing",
    target: "payment-failed",
    type: "step",
  },
  {
    id: "order-payment-edge-4",
    source: "payment-successful",
    target: "payment-logs",
    type: "step",
  },
  {
    id: "order-payment-edge-5",
    source: "payment-failed",
    target: "payment-logs",
    type: "step",
  },
] as Edge[];
