"use client";
import React, { useEffect, useState } from "react";
import { createClient } from "@sanity/client";
import Image from "next/image";

const sanity = createClient({
  projectId: "cnuerwve",
  dataset: "production",
  apiVersion: "2025-01-27",
  useCdn: true,
});

interface Food {
  _id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  imageUrl: string;
  tags: string[];
}

const Foods: React.FC = () => {
  const [foods, setFoods] = useState<Food[]>([]);
  const [wishlist, setWishlist] = useState<Food[]>([]);

  useEffect(() => {
    const fetchFoods = async () => {
      try {
        const query = `*[_type == "food"] {
          _id,
          name,
          price,
          description,
          category,
          "imageUrl": image.asset->url,
          tags
        }`;
        const data = await sanity.fetch(query);
        setFoods(data);
      } catch (error) {
        console.error("Fetching foods failed:", error);
      }
    };

    fetchFoods();
  }, []);

  const addToWishlist = (food: Food) => {
    if (!wishlist.find((item) => item._id === food._id)) {
      setWishlist([...wishlist, food]);
    }
  };

  const removeFromWishlist = (foodId: string) => {
    setWishlist(wishlist.filter((item) => item._id !== foodId));
  };

  return (
    <div className="p-4 flex flex-col justify-center max-w-screen-lg mx-auto">
      <h2 className="text-center text-slate-800 mt-4 mb-4 text-2xl font-bold">Foods List</h2>

      {/* Grid container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center">
        {foods.map((food) => (
          <div key={food._id} className="bg-white w-full gap-8 max-w-xs shadow-md rounded-lg p-4 hover:shadow-lg">
            <Image 
              src={food.imageUrl} 
              alt={food.name} 
              width={300} 
              height={200} 
              className="w-full h-48 mx-7 object-cover rounded-md"
            />
            <h2 className="text-lg font-semibold mt-2">{food.name}</h2>
            <p className="text-slate-800 mt-2 text-sm">{food.description}</p>
            <p className="text-slate-600 font-bold text-lg">${food.price}</p>
            <button 
              onClick={() => addToWishlist(food)} 
              className="mt-2 bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-700 w-full"
            >
              Add to Wishlist
            </button>
          </div>
        ))}
      </div>

      {/* Wishlist Section */}
      <h2 className="text-center text-red-600 mt-8 mb-4 text-2xl font-bold">Wishlist</h2>
      {wishlist.length > 0 ? (
        <div className="bg-gray-100 w-96 p-4 rounded-md shadow-md max-w-md ">
          {wishlist.map((item) => (
            <div key={item._id} className="flex justify-between items-center bg-white p-4 mb-2 rounded-md shadow-sm">
              <div>
                <p className="font-medium">{item.name}</p>
                <p className="text-sm text-green-600">${item.price.toFixed(2)}</p>
              </div>
              <Image src={item.imageUrl} alt={item.name} width={50} height={50} className="rounded-md" />
              <button 
                onClick={() => removeFromWishlist(item._id)} 
                className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-700"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-600">Your wishlist is empty.</p>
      )}
    </div>
  );
};

export default Foods;
