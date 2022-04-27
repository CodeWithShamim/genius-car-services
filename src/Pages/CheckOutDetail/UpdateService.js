import React from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

const UpdateService = () => {
  const { id } = useParams();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const url = `http://localhost:5000/services/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div
      style={{ minHeight: "60vh" }}
      className="d-flex flex flex-column align-items-center justify-content-center"
    >
      <div className="w-50 mx-auto">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-5 d-flex flex-column"
        >
          <input
            {...register("name", { required: true, maxLength: 20 })}
            placeholder="Name"
          />
          <input {...register("description")} placeholder="Description" />

          <input type="price" {...register("price")} placeholder="price" />
          <input type="text" {...register("img")} placeholder="Photo url" />
          <input className="btn btn-info" type="submit" value="Update now" />
        </form>
      </div>
    </div>
  );
};

export default UpdateService;
