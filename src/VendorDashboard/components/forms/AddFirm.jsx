import React, { useState } from 'react';
import { ThreeCircles } from 'react-loader-spinner';

const AddFirm = () => {
  const [firmName, setFirmName] = useState("");
  const [area, setArea] = useState("");
  const [category, setCategory] = useState([]);
  const [region, setRegion] = useState([]);
  const [offer, setOffer] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleCategoryChange = (event) => {
    const value = event.target.value;
    setCategory((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  const handleRegionChange = (event) => {
    const value = event.target.value;
    setRegion((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  const handleImageUpload = (event) => {
    setFile(event.target.files[0]);
  };

  return (
    <div className="flex flex-col items-center bg-white p-6 shadow-lg rounded-2xl w-full max-w-lg mx-auto">
      {loading && (
        <div className="flex justify-center">
          <ThreeCircles height={100} width={100} color="#4fa94d" />
        </div>
      )}
      {!loading && (
        <form className="w-full space-y-4">
          <h3 className="text-xl font-semibold">Add Firm</h3>
          <label className="block">Firm Name</label>
          <input className="w-full p-2 border rounded-md" type="text" value={firmName} onChange={(e) => setFirmName(e.target.value)} />
          <label className="block">Area</label>
          <input className="w-full p-2 border rounded-md" type="text" value={area} onChange={(e) => setArea(e.target.value)} />
          <label className="block">Offer</label>
          <input className="w-full p-2 border rounded-md" type="text" value={offer} onChange={(e) => setOffer(e.target.value)} />
          <div>
            <label className="block">Category</label>
            <div className="flex gap-4">
              <label className="flex items-center"><input type="checkbox" value="veg" checked={category.includes('veg')} onChange={handleCategoryChange} /> Veg</label>
              <label className="flex items-center"><input type="checkbox" value="non-veg" checked={category.includes('non-veg')} onChange={handleCategoryChange} /> Non-Veg</label>
            </div>
          </div>
          <div>
            <label className="block">Region</label>
            <div className="grid grid-cols-2 gap-2">
              {['south-indian', 'north-indian', 'chinese', 'bakery'].map((item) => (
                <label key={item} className="flex items-center">
                  <input type="checkbox" value={item} checked={region.includes(item)} onChange={handleRegionChange} /> {item.replace('-', ' ')}
                </label>
              ))}
            </div>
          </div>
          <label className="block">Firm Image</label>
          <input className="w-full p-2 border rounded-md" type="file" onChange={handleImageUpload} />
          <button className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition">Submit</button>
        </form>
      )}
    </div>
  );
};

export default AddFirm;
