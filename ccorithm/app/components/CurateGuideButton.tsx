"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Onest } from "next/font/google";

const bodyFont = Onest({
  subsets: ["latin"],
  weight: ["700"],
});

interface CurateGuideButtonProps {
  major: string;
  cc: string;
  transfer: string;
}

export default function CurateGuideButton({major, cc, transfer} : CurateGuideButtonProps) {
  const router = useRouter();

  const handleStart = () => {
    if (!major.trim() || !cc.trim() || !transfer.trim()) {
      alert("Please select all fields before continuing.");
      return;
    }

    const query = new URLSearchParams({ major, cc, transfer }).toString();
    console.log({ major, cc, transfer });
    router.push(`/perfectGuide?${query}`);
  };
  return (
    <div className="flex justify-center items-center">
      <button
        onClick={handleStart}
        disabled={!major || !cc || !transfer}
        className={`${bodyFont.className} px-6 py-2 rounded-xl text-black border-3 border-black bg-white select-none shadow-[5px_5px_0px_rgba(0,0,0,1)] mb-[100%]`}
      >
        Curate the Perfect Guide
      </button>
    </div>
  );
}
