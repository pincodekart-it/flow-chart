import { type AppNode } from "./types";

export const initialNodes = [
  {
    id: "manufacture-flow-registered",
    position: { x: -800, y: 0 },
    data: { label: "Manufacture Registered" },
  },
  {
    id: "manufacture-flow-verified",
    position: { x: -800, y: 100 },
    data: { label: "Manufacture Verified" },
  },
  {
    id: "manufacture-flow-login",
    position: { x: -800, y: 200 },
    data: { label: "Manufacture Login" },
  },
  {
    id: "manufacture-flow-initiated",
    position: { x: -800, y: 300 },
    data: { label: "Manufacture Initiated After Received Order" },
  },
  {
    id: "manufacture-flow-awb-generated",
    position: { x: -800, y: 400 },
    data: { label: "Manufacture Generate AWB" },
  },
  {
    id: "manufacture-flow-add-product",
    position: { x: -1000, y: 200 },
    data: { label: "Manufacture Add Product" },
  },
  {
    id: "manufacture-flow-stock",
    position: { x: -1000, y: 300 },
    data: { label: "Manufacture Managed Stock" },
  }
] as AppNode[];
