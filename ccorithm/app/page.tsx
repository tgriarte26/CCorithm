import Header from "./components/Header";
import LandingPage from "./LandingPage";
import Form from "./components/Form";

export default function Home() {
  return (
    <div className="min-h-screen items-center justify-center bg-zinc-50 font-sans">
      <div className="flex min-h-screen w-full flex-col items-center sm:items-start">
        <Header />
        <div className="bg-blue-300 p-10 w-full">
          <LandingPage />
          <div className="mt-10"></div>
          <div className="gap-8 justify-center w-full items-start">
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
}
