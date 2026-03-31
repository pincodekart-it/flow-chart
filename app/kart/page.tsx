"use client";

import dynamic from "next/dynamic";

const FlowComponent = dynamic(() => import("../../components/kartFlow"), {
  ssr: false,
});

export default function Page() {
  return (
    <div>
      <FlowComponent />
    </div>
  );
}
