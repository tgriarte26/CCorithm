"use client";
import { useState } from "react";
import { Onest } from "next/font/google";
import { useRouter } from "next/navigation";
import SelectMajor from "./SelectMajor";
import SelectCC from "./SelectCC";
import SelectTransferCollege from "./SelectTransferCollege";

const headingFont = Onest({
  subsets: ["latin"],
  weight: ["900"],
});

const bodyFont = Onest({
  subsets: ["latin"],
  weight: ["700"],
});

export default function Form() {
  const router = useRouter();

  const [major, setMajor] = useState("");
  const [cc, setCC] = useState("");
  const [transfer, setTransfer] = useState("");

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
    <div>
      <div className="grid grid-cols-1 justify-between gap-10 items-center text-center w-full">
        <div className="w-full bg-white p-20">
          <SelectTransferCollege
            transfer={transfer}
            setTransfer={setTransfer}
          />
        </div>
        <div className="w-full bg-white p-20">
          <SelectCC community={cc} setCommunity={setCC} />
        </div>
        <div className="w-full bg-white p-20">
          <SelectMajor topMajor={major} setTopMajor={setMajor} />
        </div>
      </div>
      <div className="mt-10"></div>
      <div className="justify-center items-center text-center">
        <button
          onClick={handleStart}
          disabled={!major || !cc || !transfer}
          className={`${bodyFont.className} px-6 py-2 rounded-xl text-black border-3 border-black bg-white select-none`}
        >
          Curate the Perfect Guide
        </button>
        <div className="w-full max-w-6xl grid grid-cols-3 gap-10 items-start">
        </div>
      </div>
    </div>
  );
}
