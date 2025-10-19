import ItemList from './item-list';

export default function Page() {
    return (
        // Ensure the entire page has a dark background
        <main className="min-h-screen p-4 bg-gray-900">
            {/* Fix: Removed text-center so the title aligns with the list */}
            <h1 className="text-4xl font-bold mb-6 text-white">Shopping List</h1>
            <ItemList />
        </main>
    );
}