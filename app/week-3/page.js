import ItemList from './item-list';

export default function Page() {
    return (
        <main className="min-h-screen bg-gray-950 p-8 text-white">
            <h1 className="text-4xl font-extrabold text-teal-400 mb-8">
                Shopping List
            </h1>
            <ItemList />
        </main>
    );
};

