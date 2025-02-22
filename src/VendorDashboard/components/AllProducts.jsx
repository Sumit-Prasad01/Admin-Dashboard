import React, { useState, useEffect } from "react";
import { Trash2 } from "lucide-react";

const AllProducts = () => {
  const [products, setProducts] = useState([
    {
      _id: "1",
      productName: "Sample Product",
      price: 499,
      image: "",
    },
    {
      _id: "2",
      productName: "Another Product",
      price: 899,
      image: "",
    },
  ]);

  const deleteProductById = (productId) => {
    const confirmDelete = window.confirm("Are you sure you want to delete?");
    if (!confirmDelete) return;
    setProducts(products.filter((product) => product._id !== productId));
    alert("Product deleted successfully");
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">All Products</h2>

      {products.length === 0 ? (
        <p className="text-gray-500">No products added yet.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white shadow-lg rounded-lg">
            <thead>
              <tr className="bg-gray-100 border-b">
                <th className="p-3 text-left">Product Name</th>
                <th className="p-3 text-left">Price</th>
                <th className="p-3 text-left">Image</th>
                <th className="p-3 text-center">Delete</th>
              </tr>
            </thead>
            <tbody>
              {products.map((item) => (
                <tr key={item._id} className="border-b hover:bg-gray-50">
                  <td className="p-3">{item.productName}</td>
                  <td className="p-3 text-gray-700">₹{item.price}</td>
                  <td className="p-3">
                    {item.image ? (
                      <img
                        src={item.image}
                        alt={item.productName}
                        className="w-12 h-12 object-cover rounded"
                      />
                    ) : (
                      <div className="w-12 h-12 bg-gray-200 flex items-center justify-center text-gray-500 rounded">
                        No Image
                      </div>
                    )}
                  </td>
                  <td className="p-3 text-center">
                    <button
                      onClick={() => deleteProductById(item._id)}
                      className="text-red-500 hover:text-red-700 transition"
                    >
                      <Trash2 size={20} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AllProducts;
