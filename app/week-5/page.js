import NewItem from "./new-item";

export default function Week4Page() {
    return (
    // Centers content on a dark background
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
      {/* Moved "Add New Item" title here, outside the component */}
        <h1 className="text-3xl font-bold mb-6">Add New Item</h1> 
    
      {/* The NewItem component (the white card) is rendered below the title */}
    <NewItem />
    </div>
);
}