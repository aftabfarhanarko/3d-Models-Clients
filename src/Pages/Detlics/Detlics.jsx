import React, { useEffect, useRef, useState } from "react";
import { FiEdit } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { useLoaderData } from "react-router";
import useAxiosNormle from "../../Hooks/AxiosNormal";
import useAuth from "../../Hooks/UserAUth";

const Detlics = () => {
  const data = useLoaderData();
  const refernce = useRef();
  const { user } = useAuth();
  const axo = useAxiosNormle();

  const handleDownload = () => {
    // add your download logic
    const finalModel = {
      name: data.name,
      downloads: data.downloads,
      created_by: data.created_by,
      description: data.description,
      image: data.thumbnail,
      created_at: new Date(),
      stutas: data.stutas,
      downloaded_by: user.email,
    };

    axo.post(`/downlods/${data._id}`, finalModel)
    .then((data) => {
      console.log("Data Downlodes and Updeat", data.data);
      const power = data.data;
      //   setData(power);
    });
  };

  const handleDownloadg = () => {
    const finalModel = {
      name: model.name,
      downloads: model.downloads,
      created_by: model.created_by,
      description: model.description,
      thumbnail: model.thumbnail,
      created_at: new Date(),
      downloaded_by: user.email,
    };

    fetch(`https://3d-model-server.vercel.app/downloads/${model._id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(finalModel),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Successfully downloaded!");
        setRefecth(!refetch);

        // alternative solution of realtime download count update

        //     fetch(`https://3d-model-server.vercel.app/models/${id}`, {
        //   headers: {
        //     authorization: `Bearer ${user.accessToken}`,
        //   },
        // })
        //   .then((res) => res.json())
        //   .then((data) => {
        //     setModel(data.result);
        //     console.log(" Api called!")
        //     console.log(data);
        //     setLoading(false);
        //   });
      })

      .catch((err) => {
        console.log(err);
      });
  };

  const handleDelete = () => {
    // confirm + delete logic
  };

  const handleEdit = () => {
    refernce.current.showModal();
    // console.log(formData);
  };
  const closeModal = () => {
    refernce.current.close();
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name: e.target.name.value,
      category: e.target.category.value,
      description: e.target.description.value,
      image: e.target.thumbnail.value,
      stutas: Number(e.target.reting.value),
    };
    // console.log(formData);

    axo.patch(`/model/${data._id}`, formData).then((data) => {
      console.log(data.data);
    });
  };
  return (
    <div className="min-h-screen w-full flex justify-center items-center mt-15 md:mt-0 bg-gradient-to-br from-gray-100 to-gray-200 pt-6 md:p-8 animate-fade-in rounded-b-2xl">
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl p-5 md:p-8 border border-gray-100">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="w-full lg:w-1/2">
            <div className="overflow-hidden rounded-3xl shadow-lg hover:scale-105 transition-all duration-500">
              <img
                src={data.image}
                alt={data.name}
                className="w-full h-[420px] object-cover"
              />
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col justify-center gap-5">
            <h1 className="text-4xl font-extrabold text-gray-800 tracking-wide">
              {data.name}
            </h1>
            <p className="text-md text-gray-600 bg-gray-100 px-4 py-1 rounded-full w-fit shadow-sm">
              Category: {data.category}
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              {data.description}
            </p>

            <div className="flex flex-col text-sm text-gray-500 gap-1 pt-2">
              <span>
                Uploaded: {new Date(data.created_at).toLocaleDateString()}
              </span>
              <span>Downloads: {data.downloads}</span>
            </div>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end gap-6 mt-10">
          <button
            onClick={handleDownload}
            className="px-8 py-3 bg-linear-to-r from-purple-400  to-pink-400 hover:from-pink-400 hover:to-purple-400 rounded-xl text-lg text-white shadow-md hover:scale-105 transition-all duration-300"
          >
            Download
          </button>
          <button
            variant="outline"
            onClick={handleEdit}
            className="px-8 py-1 bg-linear-to-r from-pink-500 to-red-600 hover:from-red-600 hover:to-pink-500 text-white rounded-xl text-lg shadow-md hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <FiEdit /> Edit
          </button>

          <button
            variant="destructive"
            onClick={handleDelete}
            className="px-8 py-3 rounded-xl text-lg shadow-md hover:scale-105 transition-all duration-300"
          >
            Delete
          </button>
        </div>

        {/* Open the modal using document.getElementById('ID').showModal() method */}
        <dialog
          ref={refernce}
          id="my_modal_5"
          className="modal modal-bottom sm:modal-middle"
        >
          <div className="modal-box">
            <div className=" text-right cursor-pointer " onClick={closeModal}>
              {/* <IoClose  /> */}X
            </div>
            <h3 className="font-bold text-lg">
              What improvements can you make to the design
            </h3>

            <div className="modal-action">
              <form onSubmit={handleSubmit} className="space-y-4 w-full">
                {/* Name Field */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <div>
                    <label className="label font-medium">Name</label>
                    <input
                      type="text"
                      name="name"
                      defaultValue={data.name}
                      className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                    />
                  </div>
                  <div>
                    <label className="label font-medium">Reating</label>
                    <input
                      type="number"
                      name="reting"
                      defaultValue={data.stutas}
                      className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                    />
                  </div>
                </div>

                {/* Category Dropdown */}
                <div>
                  <label className="label font-medium">Category</label>
                  <input
                    type="text"
                    name="category"
                    defaultValue={data.category}
                    className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                  />
                </div>

                {/* Description Textarea */}
                <div>
                  <label className="label font-medium">Description</label>
                  <textarea
                    name="description"
                    rows="3"
                    className="textarea w-full rounded-2xl focus:border-0 focus:outline-gray-200 h-[250px]"
                    defaultValue={data.description}
                  ></textarea>
                </div>

                {/* Thumbnail URL */}
                <div>
                  <label className="label font-medium">Thumbnail URL</label>
                  <input
                    type="url"
                    name="thumbnail"
                    className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                    defaultValue={data.image}
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="btn w-full text-white mt-6 rounded-full bg-linear-to-r from-pink-500 to-red-600 hover:from-pink-600 hover:to-red-700"
                >
                  Add Model
                </button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default Detlics;
