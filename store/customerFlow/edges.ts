import { type Edge } from "@xyflow/react";

export const initialEdges = [
  {
    id: "customer-flow-edge-1",
    source: "customer-flow-register",
    target: "customer-flow-login",
    animated: true,
    label: "after confirming email or phone",
    type: "step",
  },
  {
    id: "customer-flow-edge-2",
    source: "customer-flow-login",
    target: "customer-flow-account",
    type: "step",
  },
  {
    id: "customer-flow-edge-3",
    source: "customer-flow-account",
    target: "customer-flow-wishlist",
    type: "step",
  },
  {
    id: "customer-flow-edge-4",
    source: "customer-flow-account",
    target: "customer-flow-cart",
    type: "step",
  },
  {
    id: "customer-flow-edge-5",
    source: "customer-flow-account",
    target: "customer-flow-address",
    type: "step",
  },
] as Edge[];
