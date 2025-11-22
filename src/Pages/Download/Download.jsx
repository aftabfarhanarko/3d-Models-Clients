import { Suspense, useEffect, useState } from "react";
import useAxiosNormle from "../../Hooks/AxiosNormal";
import useAuth from "../../Hooks/UserAUth";
import { FadeLoader } from "react-spinners";
import useAxiosSeciet from "../../Hooks/AxiosSecrite";
import Loder from "../../Components/Loder";

const Download = () => {
  const { user } = useAuth();
  const axiosApi = useAxiosNormle();
  const [modal, setModal] = useState([]);
  const [test, setTest] = useState(false);
  const newAxios = useAxiosSeciet()
  const [loder, setLoder] = useState(false);

  useEffect(() => {
    setLoder(true);
    newAxios.get(`/userMe?email=${user.email}`).then((data) => {
      const newData = data.data;
      setModal(newData);
      setLoder(false)
    });
  }, [newAxios, user, test]);
  
  // 
  const deleteNow = (id) => {
    axiosApi.delete(`/downlods/${id}`).then((result) => {
      const data = result.data;
      // console.log(data);
      setTest(!test);
    });
  };

  if(loder){
    return <Loder></Loder>
  }
  // downlods
  return (
    <div className="mt-25">
      <h1 className="text-2xl md:text-3xl font-semibold text-center mb-7 ">
        My Download ({modal.length})
      </h1>
      <div className="grid grid-cols-2  md:grid-cols-4 gap-7 px-2">
        <Suspense fallback={<FadeLoader color="#13f759" />}>
          {modal.map((model, index) => (
            <div
              key={index}
              className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <figure className="h-48 overflow-hidden">
                <img
                  src={model.image}
                  alt={model.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <div className="badge text-xs badge-xs badge-secondary rounded-full">
                  {model.category}
                </div>
                <div className="text-xs text-secondary">{model.created_by}</div>
                <p className="line-clamp-1">{model.description}</p>
                {/* <p className="text-sm text-base-content/70">by {author}</p> */}
                <div className="card-actions justify-between items-center mt-4">
                  <div className="flex gap-4 text-sm text-base-content/60">
                    {/* <span className="flex items-center gap-1">
              <Eye className="w-4 h-4" />
              {views}
            </span> */}
                    {/* <span className="flex items-center gap-1">
              <Heart className="w-4 h-4" />
              {likes}
            </span> */}
                  </div>
                  <button
                    onClick={() => deleteNow(model._id)}
                    className="btn rounded-full bg-linear-to-r from-pink-500 to-red-600 hover:from-red-600 hover:to-pink-500 text-white w-full btn-sm"
                  >
                    Uninstall
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Suspense>
      </div>
    </div>
  );
};

export default Download;
