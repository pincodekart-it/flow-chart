import { type Edge } from "@xyflow/react";

export const initialEdges = [
  {
    id: "edge-1",
    source: "payment-initiated",
    target: "payment-processing",
  },
  {
    id: "edge-2",
    source: "payment-processing",
    target: "payment-successful",
  },
  {
    id: "edge-3",
    source: "payment-processing",
    target: "payment-failed",
  },
  {
    id: "edge-4",
    source: "payment-successful",
    target: "order-confirmed",
  },
] as Edge[];
