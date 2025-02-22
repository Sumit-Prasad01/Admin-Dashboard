import React, { useState } from 'react';
import { ThreeCircles } from 'react-loader-spinner';

const AddProduct = () => {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState([]);
  const [bestSeller, setBestSeller] = useState(false);
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  const handleCategoryChange = (event) => {
    const value = event.target.value;
    setCategory((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  const handleBestSeller = (event) => {
    setBestSeller(event.target.value === 'true');
  };

  const handleImageUpload = (event) => {
    setImage(event.target.files[0]);
  };

  return (
    <div className="flex flex-col items-center bg-white p-6 shadow-lg rounded-2xl w-full max-w-lg mx-auto">
      {loading && (
        <div className="flex flex-col items-center">
          <ThreeCircles height={100} width={100} color="#4fa94d" />
          <p className="mt-2 text-gray-600">Please wait, your product is being added...</p>
        </div>
      )}
      {!loading && (
        <form className="w-full space-y-4">
          <h3 className="text-xl font-semibold">Add Product</h3>
          <label className="block">Product Name</label>
          <input className="w-full p-2 border rounded-md" type="text" value={productName} onChange={(e) => setProductName(e.target.value)} />
          <label className="block">Price</label>
          <input className="w-full p-2 border rounded-md" type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
          <div>
            <label className="block">Category</label>
            <div className="flex gap-4">
              <label className="flex items-center"><input type="checkbox" value="veg" checked={category.includes('veg')} onChange={handleCategoryChange} /> Veg</label>
              <label className="flex items-center"><input type="checkbox" value="non-veg" checked={category.includes('non-veg')} onChange={handleCategoryChange} /> Non-Veg</label>
            </div>
          </div>
          <div>
            <label className="block">Best Seller</label>
            <div className="flex gap-4">
              <label className="flex items-center"><input type="radio" value="true" checked={bestSeller === true} onChange={handleBestSeller} /> Yes</label>
              <label className="flex items-center"><input type="radio" value="false" checked={bestSeller === false} onChange={handleBestSeller} /> No</label>
            </div>
          </div>
          <label className="block">Description</label>
          <input className="w-full p-2 border rounded-md" type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
          <label className="block">Product Image</label>
          <input className="w-full p-2 border rounded-md" type="file" onChange={handleImageUpload} />
          <button className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition">Submit</button>
        </form>
      )}
    </div>
  );
};

export default AddProduct;
