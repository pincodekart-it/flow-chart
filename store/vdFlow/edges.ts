import { type Edge } from "@xyflow/react";

export const initialEdges = [
  {
    id: "vd-flow-edge-1",
    source: "vd-flow-node-1",
    target: "vd-flow-node-2",
  },
  {
    id: "vd-flow-edge-2",
    source: "vd-flow-node-2",
    target: "vd-flow-node-3",
  },
  {
    id: "vd-flow-edge-3",
    source: "vd-flow-node-3",
    target: "vd-flow-node-4",
  }
] as Edge[];
