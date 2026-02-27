import Image from "next/image";
import Header from "./components/Header";
import SelectMajor from "./components/SelectMajor";
import LandingPage from "./LandingPage";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans">
      <div className="flex min-h-screen w-full flex-col items-center sm:items-start">
        <Header />
        <div className="mt-5"></div>
        <LandingPage />
        <div className="mt-5"></div>
        <SelectMajor />

      </div>

    </div>
  );
}
