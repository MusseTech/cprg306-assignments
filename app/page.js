import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <h1 className="text-4xl font-bold mb-8">CPRG 306: Web Development 2 - Assignments</h1> 
      </div>

      <div className="flex flex-col items-start space-y-4">
        <Link href="./week-3" className="text-xl text-blue-500 hover:text-blue-700 underline">
          Week 3 Assignment
        </Link>
      </div>
    </main>
  );
}