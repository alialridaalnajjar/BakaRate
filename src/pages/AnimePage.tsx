// pages/AnimePage.js
import React from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "../components/Footer";

export default function AnimePage() {
  const { title , description } = useParams(); // Get the 'titll' parameter from the URLLLLLLL
  // Function to make the title URL-friendly (for matching with data if needed)
  const makeTitleFromUrl = (s: string) => {
    return s.toLowerCase().replace(/-/g, ' ');
  };

  const animeNameFromUrl = makeTitleFromUrl(title || "");


  return (
    <div className="bg-black text-white min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-4">Details for: {animeNameFromUrl}</h1>
      <div>
        {/* Replace this with the actual detailed information for the anime */}
        <p>Detailed information about {animeNameFromUrl} will be displayed here.</p>
        
        <p> descirption L  {description}</p> 
        {    
        
        /* You might want to fetch and display things like:
            - Full description
            - Genre
            - Episode list
            - User reviews
            - Images/videos
        */}
      </div>
      <Link to="/HomePage" className="inline-block mt-8 text-purple-500 hover:underline">
        Back to Home
      </Link>
      <div className="fixed bottom-0 left-0 w-full text-white">
      <Footer/></div>
    </div>
  );
}