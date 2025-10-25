import ItemList from './item-list'; 

export default function Page() {
    return (
        // FIX: Changed bg-gray-900 to bg-black for a true black background.
        <main className="min-h-screen p-4 bg-black text-white flex flex-col items-center">
            
            {/* This inner div constrains the content to a maximum width */}
            <div className="w-full max-w-xl">
                
                <h1 className="text-4xl font-bold mb-6">Shopping List</h1>
                <ItemList />
            </div>
        </main>
    );
}