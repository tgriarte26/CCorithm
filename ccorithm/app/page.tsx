import Header from "./components/Header";
import LandingPage from "./LandingPage";
import Form from "./components/Form";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 flex flex-col items-center">
      <Header />

      <main className="min-h-screen w-full p-10 bg-blue-300">
        <LandingPage />

        <div className="mt-10">
          <Form />
        </div>
      </main>
    </div>
  );
}