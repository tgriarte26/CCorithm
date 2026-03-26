import { Suspense } from "react";
import PerfectGuideClient from "@/app/perfectGuide/PerfectGuideClient";

export default function Page() {
  return (
    <Suspense fallback={<div className="p-10">Loading...</div>}>
      <PerfectGuideClient />
    </Suspense>
  )
}