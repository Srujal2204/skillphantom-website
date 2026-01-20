"use client";

import dynamic from "next/dynamic";

const ApplyClient = dynamic(
  () => import("./ApplyClient"),
  { ssr: false }
);

export default function ApplyPage() {
  return <ApplyClient />;
}
