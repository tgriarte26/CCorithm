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

const colleges = [
  "El Camino College",
  "Santa Monica College",
  "Long Beach City College",
];

interface Props {
  community: string;
  setCommunity: (cc: string) => void;
}

export default function SelectMajor({community, setCommunity}: Props) {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const filteredColleges = colleges.filter((college) =>
    college.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <div className="flex flex-col w-full items-end bg-white p-10 border-5 border-black">
      <h2
        className={`${bodyFont.className} flex text-center text-black text-xl mb-2`}
      >
        Step 2: Select Community College
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
          <div className="absolute top-full w-full  border-black border-2 mt-1 z-50 rounded-xl">
            {filteredColleges.length > 0 ? (
              filteredColleges.map((college, index) => (
                <div
                  key={index}
                  onClick={() => {
                    setQuery(college);
                    setCommunity(college)
                    setIsOpen(false);
                  }}
                  className={`${bodyFont.className} px-3 py-2 bg-white hover:bg-gray-300 text-black cursor-pointer rounded-xl`}
                >
                  {college}
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
