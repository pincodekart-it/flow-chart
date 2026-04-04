import { type AppNode } from "./types";

export const initialNodes = [
  {
    id: "vd-flow-node-1",
    position: { x: 1000, y: 500 },
    data: { label: "VD Received Parcel From Destination Mini Hub" },
  },
  {
    id: "vd-flow-node-2",
    position: { x: 1000, y: 600 },
    data: { label: "VD Delivered Parcel To Customer" },
  },
  {
    id: "vd-flow-node-3",
    position: { x: 1000, y: 700 },
    data: { label: "Customer Cancel Order" },
  },
  {
    id: "vd-flow-node-4",
    position: { x: 1000, y: 800 },
    data: { label: "VD Return Parcel To Destination Mini Hub" },
  },
] as AppNode[];
