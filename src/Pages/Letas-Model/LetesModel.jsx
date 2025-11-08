import React, { Suspense, useEffect, useState } from "react";
import useAxiosNormle from "../../Hooks/AxiosNormal";
import Card from "../../Components/Card";
import Loder from "../../Components/Loder";

const LetesModel = () => {
  const axio = useAxiosNormle();
  const [modelsa, setModel] = useState([]);
  const [loder, setLoder] = useState(false);

  useEffect(() => {
    setLoder(true);
    axio.get("/limet").then((data) => {
      console.log("This is Data", data.data);
      setModel(data.data);
      setLoder(false);
    });
  }, [axio]);
  console.log(modelsa);

  if (loder) {
    return <Loder></Loder>;
  }
  return (
    <div>
      <h1 className="text-2xl text-center my-10 font-semibold">
        Featured 3D Models 6 Latest Uploaded
      </h1>
      <div className="grid grid-cols-2  md:grid-cols-4 gap-7 px-2">
        <Suspense fallback={<h1>Loding.......</h1>}>
          {modelsa.map((model) => (
            <Card model={model} key={model._id}></Card>
          ))}
        </Suspense>
      </div>
    </div>
  );
};

export default LetesModel;
