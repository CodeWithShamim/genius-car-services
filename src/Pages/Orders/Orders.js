import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axiosSecret from "../../api/axiosSecret";
import auth from "../../firebase.init";
import DynamicTitle from "../Shared/DynamicTitle";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    const getOrders = async () => {
      const email = user.email;
      const url = `http://localhost:5000/orders?email=${email}`;

      // try=catch
      try {
        // const { data } = await axios.get(url, {
        //   headers: {
        //     authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        //   },
        // });
        const { data } = await axiosSecret.get(url);
        // .then((res) => console.log(res));
        setOrders(data);
      } catch (error) {
        // console.log(error);
        // console.log(error.message);
        // console.log(error.response.status);
        if (error.response.status === 401) {
          toast.error("Unauthorized access");
          signOut(auth);
          navigate("/login");
        }
        if (error.response.status === 403) {
          toast.error("Forbidden access");
          signOut(auth);
          navigate("/login");
        }
      }
    };
    getOrders();
  }, []);

  return (
    <div
      style={{ minHeight: "60vh" }}
      className="d-flex flex flex-column align-items-center justify-content-center"
    >
      <DynamicTitle title={"checkout"}></DynamicTitle>
      <h1>
        <span className="text-info">Your total order is : </span>
        <span className="text-warning">{orders?.length}</span>
      </h1>
      {orders.map((order) => (
        <h5>{order?.serviceName}</h5>
      ))}
    </div>
  );
};

export default Orders;
