import { type Edge } from "@xyflow/react";

export const initialEdges = [
  {
    id: "edge-1",
    source: "manufacture-labeled",
    target: "manufacture-delivered-at-mini-hub",
  },

  {
    id: "edge-2",
    source: "manufacture-delivered-at-mini-hub",
    target: "received-at-mini-hub",
  },
  {
    id: "edge-3",
    source: "received-at-mini-hub",
    target: "mini-hub-to-city-hub",
  },
  {
    id: "edge-4",
    source: "mini-hub-to-city-hub",
    target: "received-at-city-hub",
  },
] as Edge[];
