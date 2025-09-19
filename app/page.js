import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <Link href="/week-2">
        <p>Go to Week 2</p>
      </Link>
    </main>
  );
}