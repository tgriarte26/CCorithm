import { Onest } from "next/font/google";
import Header from "@/app/components/Header";
import styles from "@/app/Form.module.css";
import Image from "next/image";

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

export default function FindOpportunitiesPage() {
  const cards = [
    {
      name: "Snap Academies",
      description:
        "Nine-week long paid summer programs for community college students, hosted by Snap Inc. themeselves!",
      image: snapacademies,
      link: "https://www.snapacademies.com/",
      deadline: new Date(2026, 3, 10).getTime(),
      bgColor: "bg-yellow-300",
      width: "w-full h-65",
      textTitleStyle: ""
    },
    {
      name: "STEM for Others",
      description:
        "Non-profit organization that provides free STEM education to disadvantaged students",
      image: stemforothers,
      link: "https://www.stemforothers.org/",
      deadline: null,
      bgColor: "bg-[#BCCBEA]",
      width: "w-full h-65",
      textTitleStyle: "mt-5"
    },
  ];

  return (
    <div className="flex min-h-screen bg-blue-500 ${styles.container}">
      <main className={`w-full ${styles.container}`}>
        <Header />
        <div className="flex justify-center items-center max-w-xl mx-auto my-5 py-2 bg-white rounded-2xl border-5 border-black">
          {/* ── Title ── */}
          <h1
            className={`${headingFont.className} ${styles.headerText} text-4xl text-black mb-1 text-center`}
          >
            Find Opportunities
          </h1>
        </div>
        <div className="flex justify-center items-stretch gap-10 px-10 flex-col-3">
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
                className={`${normalFont.className} ${card.bgColor} flex-1 max-w-xl flex flex-col justify-center items-center text-gray-900 border-5 p-5 rounded-xl shadow-[5px_5px_0px_rgba(0,0,0,1)]`}
              >
                {card.image && (
                  <Image
                    src={card.image}
                    alt={card.name}
                    className={`${card.width} rounded-xl border-5 border-black mb-auto`}
                  />
                )}

                <h2
                  className={`${bodyFont.className} ${card.bgColor} ${card.textTitleStyle}  text-3xl text-black`}
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
                  <h2 className={`ml-5 inline-block font-bold text-red-500 text-xl`}>
                      {!hasDeadline 
                        ? "No deadline"
                        : days === null
                        ? "Due today"
                        : days > 0
                        ? `${days} days left`
                        : `${Math.abs(days)} days overdue`}
                  </h2>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
