import { type Edge } from "@xyflow/react";

export const initialEdges = [
  {
    id: "checkout-flow-edge-1",
    source: "checkout-flow-checkout",
    target: "checkout-flow-select-address",
    type: "step",
  },
  {
    id: "checkout-flow-edge-2",
    source: "checkout-flow-select-address",
    target: "checkout-flow-delivery-options",
    type: "step",
  },
  {
    id: "checkout-flow-edge-3",
    source: "checkout-flow-delivery-options",
    target: "checkout-flow-payment",
    type: "step",
  },
  {
    id: "checkout-flow-edge-4",
    source: "checkout-flow-payment",
    target: "checkout-flow-confirmed",
    type: "step",
  }
] as Edge[];
