import { useParams, Link } from "react-router-dom";
import categories from "./categoriesData";

const ItemDetail = () => {
  const { itemId } = useParams();
  let selectedItem = null;

  for (const category of categories) {
    selectedItem = category.items.find(item => item.id === parseInt(itemId));
    if (selectedItem) break;
  }

  return (
    <div className="p-8 bg-gradient-to-br from-purple-50 to-blue-50 min-h-screen flex flex-col items-center">
      {selectedItem ? (
        <>
          <h1 className="text-4xl font-bold text-purple-900 mb-4">{selectedItem.name}</h1>
          <img src={selectedItem.img} alt={selectedItem.name} className="w-96 h-64 object-cover rounded-lg shadow-lg mb-4" />
          <p className="text-lg text-gray-700 text-center max-w-2xl">{selectedItem.description}</p>
          <Link to="/" className="mt-6 px-6 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition duration-300">Back to Home</Link>
        </>
      ) : (
        <h1 className="text-3xl font-bold text-red-600">Item Not Found</h1>
      )}
    </div>
  );
};

export default ItemDetail;
