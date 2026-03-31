import { type AppNode } from "./types";

export const initialNodes = [
  {
    id: "manufacture-labeled",
    position: { x: -200, y: 0 },
    data: { label: "Manufacture Packed & Labeled Parcel" },
  },
  {
    id: "manufacture-delivered-at-mini-hub",
    position: { x: -200, y: 100 },
    data: { label: "Manufacture Delivered at Mini Hub" },
  },
  {
    id: "received-at-mini-hub",
    position: { x: 0, y: 0 },
    data: { label: "Received at Mini Hub" },
  },
  {
    id: "mini-hub-to-city-hub",
    position: { x: 0, y: 100 },
    data: { label: "Mini Hub to City Hub" },
  },
  {
    id: "received-at-city-hub",
    position: { x: 0, y: 200 },
    data: { label: "Received at City Hub" },
  },
] as AppNode[];
