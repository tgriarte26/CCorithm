import { Onest } from "next/font/google";
import Header from "@/app/components/Header";
import styles from "@/app/AdmissionDataPage/AdmissionDataPage.module.css";

import snapacademies from "@/app/images/snapacademies.png";
import stemforothers from "@/app/images/stemforothers.png";

const headingFont = Onest({
  subsets: ["latin"],
  weight: ["900"],
});

const bodyFont = Onest({
  subsets: ["latin"],
  weight: ["700"],
});

const normalFont = Onest({
  subsets: ["latin"],
  weight: ["400"],
});

export default function AdmissionRatesPage() {
  const cards = [
    {
      name: "UC's Transfer By Major Dataset",
      description:
        "Admission rate dataset for each major at each UC.",
      image: snapacademies,
      link: "https://www.universityofcalifornia.edu/about-us/information-center/transfers-major",
      deadline: new Date(2026, 3, 10).getTime(),
      bgColor: "bg-white",
    },
  ];

  return (
    <div className="flex min-h-screen bg-blue-500 ${styles.container}">
      <main className={`w-full ${styles.container}`}>
        <Header />
        <div className="flex justify-center items-center max-w-xl mx-auto my-5 py-2 bg-white rounded-2xl border-5 border-black shadow-[5px_5px_0px_rgba(0,0,0,1)]">
          {/* ── Title ── */}
          <h1
            className={`${headingFont.className} ${styles.headerText} text-4xl text-black mb-1 text-center`}
          >
            Admission Data
          </h1>
        </div>
        <div className="flex justify-center items-stretch gap-5 px-10 flex-col-1">
          {cards.map((card, i) => {
            const hasDeadline = card.deadline !== null;
            let days = null;
            if (hasDeadline) {
              const difference = card.deadline - Date.now();
              days = Math.floor(difference / (24 * 60 * 60 * 1000));
            }
            return (
              <div
                key={i}
                className={`${normalFont.className} ${card.bgColor} max-w-xl flex flex-1 flex-col justify-center items-center text-gray-900 border-5 p-5 rounded-xl shadow-[5px_5px_0px_rgba(0,0,0,1)]`}
              >
                <h2
                  className={`${bodyFont.className} ${card.bgColor} text-center text-3xl text-black`}
                >
                  {card.name}
                </h2>
                <p className={`inline-block mt-2 text-center`}>
                  {card.description}
                </p>
                <div className="inline-block">
                  <a href={`${card.link}`} target="_blank" className="inline-block mt-3 border-3 px-7 py-1 rounded-xl text-xl font-bold bg-white hover:bg-black hover:text-white">
                    Website
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
