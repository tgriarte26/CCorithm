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

interface Props {
    topMajor: string;
    setTopMajor: (topMajor: string) => void;
}

const majors = [
  "Business",
  "Computer Science",
  "Engineering",
  "Psychology",
  "Nursing",
];

export default function SelectMajor({topMajor, setTopMajor} : Props) {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const filteredMajors = majors.filter((major) =>
    major.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <div className="flex flex-col w-full">
      <h2
        className={`${bodyFont.className} flex text-center text-black text-xl mb-2`}
      >
        Step 3: Select Your Major
      </h2>
      <div className="relative">
        <input
          type="text"
          placeholder="Search"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          className={`${bodyFont.className} flex border-3 border-black px-3 py-2 text-black bg-white`}
        />
        {isOpen && query && (
          <div className="absolute top-full w-full border-black border-2 mt-1 z-50 rounded-xl">
            {filteredMajors.length > 0 ? (
              filteredMajors.map((major, index) => (
                <div
                  key={index}
                  onClick={() => {
                    setQuery(major);
                    setTopMajor(major);
                    setIsOpen(false);
                  }}
                  className={`${bodyFont.className} px-3 py-2 bg-white hover:bg-gray-300 text-black cursor-pointer rounded-xl`}
                >
                  {major}
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
