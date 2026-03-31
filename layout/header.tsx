import Link from "next/link";

export const LayoutHeader = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-bold">Pin Code Flow Chart</h1>

        <menu className="mt-2 flex space-x-4">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="/kart" className="hover:underline">
            Kart
          </Link>
          <Link href="/dak" className="hover:underline">
            Dak
          </Link>
        </menu>
      </div>
    </header>
  );
};
