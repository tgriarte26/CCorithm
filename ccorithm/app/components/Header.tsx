import { Onest } from "next/font/google";
import Link from "next/link";

const headingFont = Onest({
  subsets: ["latin"],
  weight: ["900"],
});

const bodyFont = Onest({
  subsets: ["latin"],
  weight: ["700"],
});

const navFont = Onest({
    subsets: ["latin"],
    weight: ['500'],
});

export default function Header() {
  return (
    <header className="w-full bg-white">
      <div className="flex items-center pt-5 ml-5">
        <Link href="/"
          className={`${headingFont.className} tracking-wide float-left text-center text-[#2d69eb] text-4xl select-none`}
        >
          CCorithm
        </Link>
        <div className="flex justify-center items-center ml-auto pr-10">
            <Link href="/ResourcesPage" className={`flex justify-center items-center ml-auto pr-5 pl-5 p-1 text-xl bg-[#2d69eb] border-3 border-black shadow-[3px_3px_0px_rgba(0,0,0,1)] text-white hover:bg-[#0051ff] cursor-pointer ${navFont.className}`}>Resources</Link>
        </div>

      </div>
      <div className="mt-5 border-2 border-black"></div>
    </header>
  );
}
