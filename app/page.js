export default function Home() {
  return (
    <div className="min-h-screen bg-gravy-100 flex flex-col items-center justify-center">
      <h1 className="text-3x1 font-bold mb-8">CPRG 306: Web Development 2 - Assignments</h1>
      <ul className="space-y-4">
        <li>
          <a href="/week-2" className="text-blue-600 hover:underline">
          week 2 Assignment</a>
        </li>
        <li>
          <a href="/week-3" className="text-blue-600 hover:underline">
          week 3 Assignment</a>
        </li>
        <li>
          <a href="/week-4" className="text-blue-600 hover:underline">
          week 4 Assignment</a>
        </li>   
      </ul>
    </div>
  );
}
