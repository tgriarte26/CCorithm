"use client";
import { useState } from "react";
import { Onest } from "next/font/google";

const headingFont = Onest({
  subsets: ["latin"],
  weight: ["900"],
});

const bodyFont = Onest({
  subsets: ["latin"],
  weight: ["700"],
});

const transferColleges = [
  "University of California, Los Angeles (UCLA)",
  "California State University, Long Beach (CSULB)",
  "Stanford University",
];

interface Props {
  transfer: string;
  setTransfer: (transfer: string) => void;
}

export default function SelectTransferCollege({transfer, setTransfer}: Props) {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const filteredTransferColleges = transferColleges.filter((transferCollege) =>
    transferCollege.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <div className="flex flex-col w-full justify-center items-center bg-white p-10 border-5 border-black shadow-[10px_10px_0px_rgba(0,0,0,1)]">
      <h2
        className={`${bodyFont.className} flex text-center text-black text-xl mb-2`}
      >
        Step 1: Select Transfer College
      </h2>
      <div className="relative">
        <input
          type="text"
          placeholder="ex. UCLA"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          className={`${bodyFont.className} flex border-3 border-black px-3 py-2 text-black bg-white shadow-[4px_4px_0px_rgba(0,0,0,1)]`}
        />
        {isOpen && query && (
          <div className="absolute top-full w-full border-black border-2 mt-1 z-50 rounded-xl">
            {filteredTransferColleges.length > 0 ? (
              filteredTransferColleges.map((transferCollege, index) => (
                <div
                  key={index}
                  onClick={() => {
                    setQuery(transferCollege);
                    setTransfer(transferCollege);
                    setIsOpen(false);
                  }}
                  className={`${bodyFont.className} px-3 py-2 bg-white hover:bg-gray-300 text-black cursor-pointer rounded-xl`}
                >
                  {transferCollege}
                </div>
              ))
            ) : (
              <div className="px-3 py-2 text-gray-500">No results found.</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
