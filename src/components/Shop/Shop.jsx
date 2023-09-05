import React, { useState } from "react";
import Card from "../Card/Card";
import { FiSearch } from "react-icons/fi";
import { useQuery } from "@tanstack/react-query";

const Shop = () => {
  const [search, setSearch] = useState("");
  const[asc,setAsc]=useState(false)
  const [selectedCategory, setSelectedCategory] = useState("All"); // Add selectedCategory state
  const { data: games = [], refetch } = useQuery({
    queryKey: ["games",search,asc],
    queryFn: async () => {
      const res = await fetch(`https://game-marketplace-server.vercel.app/games?search=${search}&sort=${asc?"asc":'des'}`);
      return res.json();
    },
  });

  let handleSearch=(searchValue)=>{
    setSearch(searchValue)
    refetch()
  }
  // Function to handle category change
  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  // Filter games based on selected category
  const filteredGames = selectedCategory === "All" ? games : games.filter((game) => game.category === selectedCategory);

  return (
    <>
      <h1 className="text-white font-neue md:text-5xl text-4xl text-center mt-7">
        Shop
      </h1>
      <p className="text-center mt-4 text-white font-semibold">Home /Shop</p>
      <div className="max-w-6xl mx-auto mt-8 relative">
        <input
          type="search"
          placeholder="Search Games"
          onChange={(e)=> handleSearch(e.target.value)}
          className="input text-white bg-black border-green-500 input-bordered w-full"
        />
        <button className="btn bg-green-500 text-white absolute right-0 text-xl">
          <FiSearch />
        </button>
      </div>
      <div>
        <ul className="flex md:flex-row flex-col justify-center items-center gap-8 mt-6">
          <li className="flex gap-5 justify-center items-center text-white">
            <input
              type="radio"
              name="category"
              onChange={(e) => handleCategoryChange(e)}
              value="All"
              className="radio radio-success"
            />
            <span>All</span>
          </li>
          <li className="flex gap-5 justify-center items-center text-white">
            <input
              type="radio"
              name="category"
              onChange={(e) => handleCategoryChange(e)}
              value="RPG"
              className="radio radio-success"
            />
            <span>RPG</span>
          </li>
          <li className="flex gap-5 justify-center items-center text-white">
            <input
              type="radio"
              name="category"
              onChange={(e) => handleCategoryChange(e)}
              value="Action"
              className="radio radio-success"
            />
            <span>Action</span>
          </li>
          <li className="flex gap-5 justify-center items-center text-white">
            <input
              type="radio"
              name="category"
              onChange={(e) => handleCategoryChange(e)}
              value="Adventure"
              className="radio radio-success"
            />
            <span>Adventure</span>
          </li>
        </ul>
      </div>
      <div className="text-end mt-11 lg:mt-0 max-w-6xl flex md:flex-row flex-col justify-end gap-5 items-center">
        <span className="text-white font-semibold">Sort by Price :</span>
      <button className="btn bg-green-500 border-none text-white " onClick={() => setAsc(!asc)}>
            {asc ? "Price high to low" : "Price low to high"}
          </button>
      </div>
      <section className="mt-9 grid lg:grid-cols-3 gap-9 md:grid-cols-2 grid-cols-1 mx-auto max-w-6xl">
        {filteredGames.map((game, index) => (
          <Card key={index} {...game} />
        ))}
      </section>
    </>
  );
};

export default Shop;
