"use client";

import dynamic from "next/dynamic";

const FlowComponent = dynamic(() => import("../components/mainFlow"), {
  ssr: false,
});

export default function Home() {
  return (
    <div>
      <FlowComponent />
    </div>
  );
}
