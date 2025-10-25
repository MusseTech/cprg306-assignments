import Link from 'next/link';
import React from 'react'; // Optional, but good practice if using React features

export default function Page() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-black text-white">
            <h1 className="text-3xl font-bold mb-8">
                CPRG 306: Web Development 2 - Assignments
            </h1>
            
            <ul className="space-y-4 text-center">
                <li className='mb-2'>
                    <Link href="/week-2" className="text-blue-500 hover:text-blue-400 underline">
                        week 2 Assignment
                    </Link>
                </li>
                <li className='mb-2'>
                    <Link href="/week-3" className="text-blue-500 hover:text-blue-400 underline">
                        week 3 Assignment
                    </Link>
                </li>
                <li className='mb-2'>
                    <Link href="/week-4" className="text-blue-500 hover:text-blue-400 underline">
                        week 4 Assignment
                    </Link>
                </li>
                <li className='mb-2'>
                    <Link href="/week-5" className="text-blue-500 hover:text-blue-400 underline">
                        week 5 Assignment
                    </Link>
                </li>
                <li className='mb-2'>
                    {/* Week 6 Link */}
                    <Link href="/week-6" className="text-blue-500 hover:text-blue-400 underline">
                        week 6 Assignment
                    </Link>
                </li>
                <li className='mb-2'>
                    {/* Week 7 Link */}
                    <Link href="/week-7" className="text-blue-500 hover:text-blue-400 underline">
                        week 7 Assignment
                    </Link>
                </li>
            </ul>
        </main>
    );
}