import React, { Suspense, useEffect, useState } from "react";
import useAuth from "../../Hooks/UserAUth";
import useAxiosNormle from "../../Hooks/AxiosNormal";
import { FadeLoader } from "react-spinners";
import Card from "../../Components/Card";

const MyModels = () => {
  const { user } = useAuth();
  const axiosApi = useAxiosNormle();
  const [modal, setModal] = useState([]);

  useEffect(() => {
    axiosApi.get(`/alldatafiter?email=${user.email}`).then((data) => {
      const newData = data.data;
      setModal(newData);
    });
  }, [axiosApi, user]);

  return (
    <div className="mt-25">
      <div className="grid grid-cols-2  md:grid-cols-4 gap-7 px-2">
        <Suspense fallback={<FadeLoader color="#13f759" />}>
          {modal.map((model) => (
            <Card model={model} key={model._id}></Card>
          ))}
        </Suspense>
      </div>
    </div>
  );
};

export default MyModels;
