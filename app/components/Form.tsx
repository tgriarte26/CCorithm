"use client";
import { useState } from "react";
import { Onest } from "next/font/google";
import { useRouter } from "next/navigation";
import SelectMajor from "./SelectMajor";
import SelectCC from "./SelectCC";
import SelectTransferCollege from "./SelectTransferCollege";
import styles from "@/app/Form.module.css";

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
      
      <div className={`grid grid-cols-1 justify-between items-center text-center w-full ${styles.container}`}>
        <h1 className={`${bodyFont.className} ${styles.sloganText} text-white text-7xl text-center max-w-4xl p-10`}>The Best CC Transfer Guide on the Web</h1>
        <div className="w-full p-10">
          <SelectTransferCollege
            transfer={transfer}
            setTransfer={setTransfer}
          />
        </div>
        <div className="w-full p-10">
          <SelectCC community={cc} setCommunity={setCC} />
        </div>
        <div className="w-full p-10">
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
