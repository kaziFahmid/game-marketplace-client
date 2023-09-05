import axios from "axios";
import React from "react";
import { useLoaderData } from "react-router-dom";
import useGames from "../../hooks/useGames/useGames";
import Swal from "sweetalert2";

const EditGames = () => {
  const [games, refetch] = useGames();
  const data = useLoaderData();
  let handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const category = e.target.category.value;
    const description = e.target.description.value;
    const image = e.target.image.value;
    const price = e.target.price.value;
    let game = {
      name,
      category,
      description,
      image,
      price:parseInt(price),
    };
    axios.put(`/games/${data?._id}`, game).then((res) => {
      if (res.modifiedCount > 0) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Updated Sucessfully",
          showConfirmButton: false,
          timer: 1500,
        });
        refetch();
      }
    });
  };
  return (
    <section>
      <form
        onSubmit={handleSubmit}
        className="  p-6 h-[540px] overflow-y-auto  "
      >
        <div className="mb-4">
          <label htmlFor="name" className="block text-white font-bold mb-2">
            Name:
          </label>
          <input
            type="text"
            id="name"
            defaultValue={data?.name}
            name="name"
            className="w-full px-3 py-2 border border-green-500 bg-black text-white "
            required
          />
        </div>

        {/* Category Input Field */}
        <div className="mb-4">
          <label htmlFor="category" className="block text-white font-bold mb-2">
            Category:
          </label>
          <input
            type="text"
            id="category"
            defaultValue={data?.category}
            name="category"
            className="w-full  px-3 py-2 border border-green-500 bg-black text-white "
            required
          />
        </div>

        {/* Description Textarea */}
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-white font-bold mb-2"
          >
            Description:
          </label>
          <textarea
            id="description"
            name="description"
            defaultValue={data?.description}
            className="w-full px-3 py-2 border bg-black text-white border-green-500 "
            rows="4"
            required
          ></textarea>
        </div>

        <div className="mb-4">
          <label htmlFor="image" className="block text-white font-bold mb-2">
            Image:
          </label>
          <input
            type="text"
            id="image"
            defaultValue={data?.image}
            name="image"
            className="w-full px-3 py-2 border border-green-500 bg-black text-white "
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block text-white font-bold mb-2">
            Price:
          </label>
          <input
            type="number"
            id="price"
            defaultValue={data?.price}
            name="price"
            className="w-full px-3 py-2 border border-green-500 bg-black text-white "
            required
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-green-500 btn border-none lg:w-60 text-white"
          >
            Save
          </button>
        </div>
      </form>
    </section>
  );
};

export default EditGames;
