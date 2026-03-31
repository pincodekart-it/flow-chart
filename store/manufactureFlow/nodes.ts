import { type AppNode } from "./types";

export const initialNodes = [
  {
    id: "manufacture-flow-initiated",
    position: { x: 500, y: 300 },
    data: { label: "Manufacturing Initiated" },
  },
  {
    id: "manufacture-flow-awb-generated",
    position: { x: 500, y: 400 },
    data: { label: "Manufacturing Generate AWB" },
  }
] as AppNode[];
