"use client";
import { useState } from "react";
import { Onest } from "next/font/google";
import { useRouter } from "next/navigation";

const headingFont = Onest({
  subsets: ["latin"],
  weight: ["900"],
});

const bodyFont = Onest({
  subsets: ["latin"],
  weight: ["700"],
});

export default function StartButton() {
  const router = useRouter();

  const [major, setMajor] = useState("");
  const [cc, setCc] = useState("");
  const [transfer, setTransfer] = useState("");

  const handleStart = () => {
    if (!major || !cc || !transfer) {
      alert("Please select all fields before continuing.")
      return;
    }

    const query = new URLSearchParams({ major, cc, transfer }).toString();
    router.push(`/guide?${query}`)
  }

  return (
    <div>
      <button onClick={handleStart} className={`${bodyFont.className} px-6 py-2 rounded-xl text-white border-3 select-none`}>
        Curate the Perfect Guide
      </button>
    </div>
  )
}