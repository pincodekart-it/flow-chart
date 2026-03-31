import { type AppNode } from "./types";

export const initialNodes = [
  {
    id: "customer-flow-register",
    position: { x: -200, y: 0 },
    data: { label: "Customer Register" },
  },
  {
    id: "customer-flow-login",
    position: { x: -200, y: 100 },
    data: { label: "Customer Login" },
  },
  {
    id: "customer-flow-account",
    position: { x: -200, y: 200 },
    data: { label: "Customer Account" },
  },
  {
    id: "customer-flow-address",
    position: { x: -200, y: 300 },
    data: { label: "Manage Address" },
  },
  {
    id: "customer-flow-wishlist",
    position: { x: -400, y: 200 },
    data: { label: "Wishlist" },
  },
] as AppNode[];
