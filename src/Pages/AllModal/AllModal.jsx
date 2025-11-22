import React, { Suspense, useEffect, useState } from "react";
import useAxiosNormle from "../../Hooks/AxiosNormal";
import Card from "../../Components/Card";
import { FadeLoader } from "react-spinners";
import Loder from "../../Components/Loder";

const AllModal = () => {
  const [cards, setCards] = useState([]);
  const axio = useAxiosNormle();
  const [loder, setLoder] = useState(false);

  useEffect(() => {
    setLoder(true);
    axio.get("/model").then((data) => {
      console.log(data.data);
      setCards(data.data);
      setLoder(false);
    });
  }, [axio]);

  // search
  const handelSearch = (e) => {
    e.preventDefault();
    const searchText = e.target.text.value;

    axio.get(`/data?search=${searchText}`).then((result) => {
      setCards(result.data)
    });
  };

  if (loder) {
    return <Loder></Loder>;
  }
  return (
    <div className="mt-25">
      <div className=" flex flex-col md:flex-row justify-between items-center mb-10 md:mb-4">
        <h1 className="text-2xl text-center my-10 font-semibold">
          All 3D Models{" "}
        </h1>
        <form
          onSubmit={handelSearch}
          className="relative -mt-5 md:mt-0 max-w-sm"
        >
          <input
            name="text"
            type="text"
            placeholder="Search..."
            className="w-full py-3 pl-12 pr-16 rounded-xl border border-gray-300 
               focus:border-blue-500 focus:ring-2 focus:ring-blue-300 
               transition-all duration-200 outline-none text-sm"
          />

          {/* Search Icon */}
          <svg
            className="w-5 h-5 absolute top-1/2 left-4 -translate-y-1/2 text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>

          {/* Right Button */}
          <button
            type="submit"
            className="absolute py-3 top-1/2 right-0 -translate-y-1/2 px-4  
               bg-blue-600 text-white rounded-lg text-sm 
               hover:bg-blue-700 active:scale-95 transition"
          >
            Search
          </button>
        </form>
      </div>
      <div className="grid grid-cols-2  md:grid-cols-4 gap-7 px-2">
        <Suspense fallback={<FadeLoader color="#13f759" />}>
          {cards.map((model) => (
            <Card model={model} key={model._id}></Card>
          ))}
        </Suspense>
      </div>
    </div>
  );
};

export default AllModal;
