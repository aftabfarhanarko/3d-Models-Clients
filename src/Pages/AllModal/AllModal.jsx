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
 
    if(loder){
    return <Loder></Loder>
  }
  return (
    <div className="mt-25">
      <h1 className="text-2xl text-center my-10 font-semibold">
        All 3D Models{" "}
      </h1>
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
