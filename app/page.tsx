"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleGoToDak = () => {
    router.push("/dak");
  };
  
  const handleGoToKart = () => {
    router.push("/kart");
  };

  return (
    <div className="container mx-auto p-4">
      <div className="bg-gray-100 p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold">Kart Page</h1>
        <p className="mt-4 text-lg">This is the kart page.</p>

        <button className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={handleGoToDak}>
          Go to Dak
        </button>

        <button className="mt-6 ml-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600" onClick={handleGoToKart}>
          Go to Kart
        </button>
      </div>
    </div>
  );
}
