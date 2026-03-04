import Header from "./components/Header";
import SelectMajor from "./components/SelectMajor";
import LandingPage from "./LandingPage";
import SelectCC from "./components/SelectCC";
import SelectTransferCollege from "./components/SelectTransferCollege";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans">
      <div className="flex min-h-screen w-full flex-col items-center sm:items-start">
        <Header />
        <div className="bg-blue-300 pb-100 p-10">
          <LandingPage />
          <div className="mt-5"></div>
          <div className="flex gap-8 justify-center w-full items-start">
            <SelectMajor />
            <SelectCC />
            <SelectTransferCollege />
          </div>
        </div>
      </div>
    </div>
  );
}
