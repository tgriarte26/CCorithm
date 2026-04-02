import { Onest } from "next/font/google";
import Header from "@/app/components/Header";
import Link from "next/link";
import styles from "@/app/Form.module.css";

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
export default function ResourcesPage() {
  return (
    <div className="min-h-screen flex bg-blue-500 ">
      <main className={`w-full ${styles.container}`}>
        <Header />
        <div className="max-w-3xs mx-auto my-5 px-2 py-2 bg-white rounded-2xl border-5 border-black shadow-[5px_5px_0px_rgba(0,0,0,1)]">
          {/* ── Title ── */}
          <h1
            className={`${headingFont.className} ${styles.headerText} text-4xl text-black mb-1 text-center `}
          >
            Resources
          </h1>
        </div>
        <div className="flex justify-center items-stretch gap-10 px-10">
          <Link
            className={`${normalFont.className} flex-1 max-w-xl flex flex-col justify-center items-center text-gray-900 border-5 p-5 rounded-xl bg-white shadow-[5px_5px_0px_rgba(0,0,0,1)]`}
            href="/FindOpportunitiesPage"
          >
            <h2 className={`${bodyFont.className} text-3xl text-black`}>
              Find Opportunities
            </h2>
            <p className="mt-2 text-center">
              Where you can find work, volunteer, or internship opportunities!
            </p>
          </Link>
          <Link
            className={`${normalFont.className} flex-1 max-w-xl flex flex-col justify-center items-center text-gray-900 border-5 p-5 rounded-xl bg-white shadow-[5px_5px_0px_rgba(0,0,0,1)]`}
            href="/AdmissionDataPage"
          >
            <h2 className={`${bodyFont.className} text-3xl text-black`}>
              Admission Data
            </h2>
            <p className="mt-2 text-center">
              The best websites to find admission data information!</p>
          </Link>
        </div>
      </main>
    </div>
  );
}
