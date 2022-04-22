import React from "react";
import { useForm } from "react-hook-form";

const PostData = () => {
  const { register, handleSubmit } = useForm();
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
      .then((data) => console.log(data));
  };

  return (
    <div className="w-50 mx-auto">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-5 d-flex flex-column"
      >
        <input
          {...register("name", { required: true, maxLength: 20 })}
          placeholder="Name"
        />
        <input
          {...register("description", { pattern: /^[A-Za-z]+$/i })}
          placeholder="Description"
        />

        <input
          type="price"
          {...register("price", { min: 18, max: 99 })}
          placeholder="price"
        />
        <input type="text" {...register("img")} placeholder="Photo url" />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default PostData;
