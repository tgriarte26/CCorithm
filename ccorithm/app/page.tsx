import Header from "./components/Header";
import Form from "./components/Form";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 flex flex-col items-center">
      <Header />

      <main className="min-h-screen w-full bg-blue-500">

        <div className=" mt-2">
          <Form />
        </div>
      </main>
    </div>
  );
}