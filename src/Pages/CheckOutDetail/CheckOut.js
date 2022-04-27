import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const CheckOut = () => {
  const { serviceId } = useParams();
  const [service, setService] = useState({});
  const [user] = useAuthState(auth);
  const [info, setInfo] = useState({
    name: user?.displayName,
    email: user?.email,
    address: "Rangpur, Bangladesh",
    phone: "01700000000",
  });

  useEffect(() => {
    const url = `http://localhost:5000/services/${serviceId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);

  // delete
  const handleDelete = () => {
    const proceed = window.confirm("Are you sure delete this item??");
    if (proceed) {
      const url = `http://localhost:5000/services/${serviceId}`;
      fetch(url, {
        method: "delete",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data) {
            toast.warn("Successfully deleted this service!!");
            navigate("/");
          }
          // const remaining = services.filter(
          //   (service) => service._id !== serviceId
          // );
          // setService(remaining);
        });
    }
  };

  const navigate = useNavigate();
  const handleUpdate = (id) => {
    navigate(`/update/${id}`);
  };

  // =============================handle address & phone info change =============================
  const handleAddress = (e) => {
    const { address, ...rest } = info;
    const newAddress = e.target.value;

    // console.log(address, rest);
    setInfo(newAddress, rest);
  };
  const handlephone = (e) => {
    const { address, ...rest } = info;
    const newPhone = e.target.value;

    // console.log(address, rest);
    setInfo(newPhone, rest);
  };

  return (
    <div
      style={{ minHeight: "60vh" }}
      className="d-flex flex flex-column align-items-center justify-content-center w-50 mx-auto"
    >
      <h1>
        <span>Service name:</span>{" "}
        <span className="text-primary">{service.name}</span>
        <span>
          {" "}
          <button className="btn btn-danger" onClick={handleDelete}>
            Delete
          </button>
          <button
            className="ms-2 btn btn-primary"
            onClick={() => handleUpdate(serviceId)}
          >
            Update
          </button>
        </span>
      </h1>

      {/* orders form  */}
      <div className="w-100">
        <form action="">
          <label htmlFor="name" className="float-start">
            Name:
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="w-100 mb-2"
            required
            readOnly
            disabled
            value={info.name}
          />
          <br />
          <label htmlFor="email" className="float-start">
            Email:
          </label>
          <input
            type="email"
            name="email"
            value={info.email}
            id="email"
            required
            readOnly
            disabled
            className="w-100 mb-2"
          />
          <br />
          <label htmlFor="address" className="float-start">
            Address:
          </label>
          <textarea
            value={info.address}
            onChange={handleAddress}
            name="address"
            id="address"
            cols="30"
            rows="3"
            className="w-100 mb-2"
          ></textarea>
          <br />
          <label htmlFor="phone" className="float-start">
            {" "}
            Phone:
          </label>
          <input
            value={info.phone}
            onClick={handlephone}
            type="number"
            name="phone"
            id="phone"
            className="w-100 my-2"
          />
        </form>
      </div>

      <Link to="/orders" className="btn btn-primary px-5">
        Get Order
      </Link>
    </div>
  );
};

export default CheckOut;
