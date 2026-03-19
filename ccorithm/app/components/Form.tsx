"use client";
import { useState } from "react";
import { Onest } from "next/font/google";

import SelectMajor from "./SelectMajor";
import SelectCC from "./SelectCC";
import SelectTransferCollege from "./SelectTransferCollege";
import styles from "@/app/Form.module.css";
import CurateGuideButton from "./CurateGuideButton";

const headingFont = Onest({
  subsets: ["latin"],
  weight: ["900"],
});

const bodyFont = Onest({
  subsets: ["latin"],
  weight: ["700"],
});

export default function Form() {
  const [major, setMajor] = useState("");
  const [cc, setCC] = useState("");
  const [transfer, setTransfer] = useState("");

  return (
    <div className="min-h-screen flex">
      <div
        className={`grid grid-cols-3 justify-center w-full ${styles.container}`}
      >
        <h1
          className={`${bodyFont.className} ${styles.sloganText} col-span-3 mx-auto text-white text-8xl text-center max-w-6xl p-10`}
        >
          The Best CC Transfer Guide on the Web
        </h1>

          <div className="w-full p-15 col-span-3 md:col-span-1">
            <SelectTransferCollege
              transfer={transfer}
              setTransfer={setTransfer}
            />
          </div>
          <div className="w-full p-15 col-span-3 md:col-span-1">
            <SelectCC community={cc} setCommunity={setCC} />
          </div>
          <div className="w-full p-15 col-span-3 md:col-span-1">
            <SelectMajor topMajor={major} setTopMajor={setMajor} />
          </div>
          <div className="w-full p-15 flex col-span-3 justify-center items-center">
            <CurateGuideButton major={major} cc={cc} transfer={transfer} />
          </div>
        </div>
      </div>
  );
}
