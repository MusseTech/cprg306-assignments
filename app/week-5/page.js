// /app/week-5/page.js

import NewItem from "./new-item";
import Link from 'next/link';

export default function Page() {
    return (
        <main className="min-h-screen p-4">
            {/* 🚨 REMOVE ANY H1 OR H2 HERE IF IT SAYS "Add New Item" */}
            
            <NewItem />
            
            <Link href="/" className="text-blue-400 hover:text-blue-200 mt-8 block">
                &larr; Back to Home
            </Link>
        </main>
    );
}