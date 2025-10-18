// /app/page.js (Snippet)

import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <ul>
        {/* ... existing links ... */}
        <li>
          <Link href="/week-6">Week 6 Assignment</Link>
        </li>
      </ul>
    </main>
  );
}