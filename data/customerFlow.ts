export const customerNodes = [
  {
    id: "customer-register",
    position: { x: 0, y: 0 },
    data: { label: "Customer Register" },
  },
  {
    id: "customer-login",
    position: { x: 0, y: 100 },
    data: { label: "Customer Login" },
  },
  {
    id: "customer-account",
    position: { x: 0, y: 200 },
    data: { label: "Customer Account" },
  },
  {
    id: "customer-add-to-cart",
    position: { x: 0, y: 300 },
    data: { label: "Customer Add to Cart" },
  },
  {
    id: "customer-checkout",
    position: { x: 0, y: 400 },
    data: { label: "Customer Checkout" },
  },
  {
    id: "customer-order",
    position: { x: 200, y: 0 },
    data: { label: "Customer Order" },
  },
  {
    id: "customer-wishlist",
    position: { x: 200, y: 100 },
    data: { label: "Customer Wishlist" },
  },
];

export const customerEdges = [
  { id: "e1-2", source: "customer-register", target: "customer-login" },
  { id: "e2-3", source: "customer-login", target: "customer-account" },
  { id: "e3-4", source: "customer-account", target: "customer-add-to-cart" },
  { id: "e4-5", source: "customer-add-to-cart", target: "customer-checkout" },
  { id: "e5-6", source: "customer-checkout", target: "customer-order" },
  { id: "e6-7", source: "customer-account", target: "customer-wishlist" },
];