import { type Edge } from "@xyflow/react";

export const initialEdges = [
  {
    id: "manufacture-flow-edge-1",
    source: "manufacture-flow-registered",
    target: "manufacture-flow-verified",
    type: "step",
  },
  {
    id: "manufacture-flow-edge-2",
    source: "manufacture-flow-verified",
    target: "manufacture-flow-login",
  },
  {
    id: "manufacture-flow-edge-3",
    source: "manufacture-flow-login",
    target: "manufacture-flow-initiated",
  },
  {
    id: "manufacture-flow-edge-4",
    source: "manufacture-flow-initiated",
    target: "manufacture-flow-awb-generated",
    type: "step",
  },
] as Edge[];
