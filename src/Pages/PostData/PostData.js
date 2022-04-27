import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const PostData = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    fetch("http://localhost:5000/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          toast.success("Service post success!");
          navigate("/");
        }
      });
  };

  return (
    <div
      style={{ minHeight: "60vh" }}
      className="w-50 mx-auto d-flex flex flex-column align-items-center justify-content-center"
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-5 d-flex flex-column w-100"
      >
        <input
          {...register("name", { required: true, maxLength: 20 })}
          placeholder="Name"
        />
        <input
          className="my-2"
          {...register("description", { pattern: /^[A-Za-z]+$/i })}
          placeholder="Description"
        />

        <input
          type="price"
          {...register("price", { min: 18, max: 99 })}
          placeholder="price"
        />
        <input
          className="my-2"
          type="text"
          {...register("img")}
          placeholder="Photo url"
        />
        <input className="btn btn-primary " type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default PostData;
