import { type AppNode } from "./types";

export const initialNodes = [
  {
    id: "vd-flow-node-1",
    position: { x: 1000, y: 400 },
    data: { label: "VD Registered" },
  },
  {
    id: "vd-flow-node-2",
    position: { x: 1000, y: 500 },
    data: { label: "VD Verified" },
  },
  {
    id: "vd-flow-node-3",
    position: { x: 1000, y: 600 },
    data: { label: "VD Login" },
  },
  {
    id: "vd-flow-node-4",
    position: { x: 1000, y: 700 },
    data: { label: "VD Received Parcel From Destination Mini Hub" },
  },
  {
    id: "vd-flow-node-5",
    position: { x: 1000, y: 800 },
    data: { label: "VD Delivered Parcel To Customer" },
  },
  {
    id: "vd-flow-node-6",
    position: { x: 1000, y: 900 },
    data: { label: "Customer Cancel Order" },
  },
  {
    id: "vd-flow-node-7",
    position: { x: 1000, y: 1000 },
    data: { label: "VD Return Parcel To Destination Mini Hub" },
  },
] as AppNode[];
