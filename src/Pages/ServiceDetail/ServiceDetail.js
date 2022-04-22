import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const [service, setService] = useState({});

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
          console.log(data);
          // const remaining = services.filter(
          //   (service) => service._id !== serviceId
          // );
          // setService(remaining);
        });
    }
  };

  return (
    <div>
      <h1>
        Service Detail Id: {service.name}
        <button onClick={handleDelete}>X</button>
      </h1>
      <Link to="/checkout" className="btn btn-primary">
        Check Out
      </Link>
    </div>
  );
};

export default ServiceDetail;
