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

interface Chef {
  _id: string;
  name: string;
  position: string;
  experience: number;
  specialty: string;
  imageUrl: string;
}

const ChefsList: React.FC = () => {
  const [chefs, setChefs] = useState<Chef[]>([]);

  useEffect(() => {
    const fetchChefs = async () => {
      try {
        const query = `*[_type == "chef"] {
          _id,
          name,
          position,
          experience,
          specialty,
          "imageUrl": image.asset->url
        }`;
        const data = await sanity.fetch(query);
        setChefs(data);
      } catch (error) {
        console.error("Fetching chefs failed:", error);
      }
    };

    fetchChefs();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-center text-white mt-8 mb-4">Chefs List</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {chefs.map((chef) => (
          <div key={chef._id} className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg">
            <Image src={chef.imageUrl || "/default-placeholder.png"} alt={chef.name} width={300} height={300} className="w-full h-48 object-cover rounded-md" />
            <h2 className="text-lg text-[#FF9F0D] font-semibold">{chef.name}</h2>
            <p className="text-slate-600">{chef.position}</p>
            <p className="text-slate-600">Experience: {chef.experience} years</p>
            <p className="text-[#FF9F0D] mt-2 text-sm">{chef.specialty}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChefsList;
