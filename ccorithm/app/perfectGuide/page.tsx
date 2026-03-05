import Header from "../components/Header";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans">
      <div className="flex min-h-screen w-full flex-col items-center sm:items-start">
        <Header />
        <div className="bg-blue-300 min-h-screen w-full">
          
          <div className="mt-10"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center w-full items-start">
            
          </div>
          <div className="mt-10"></div>
        </div>
      </div>
    </div>
  );
}
