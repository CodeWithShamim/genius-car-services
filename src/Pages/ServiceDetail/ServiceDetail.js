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

  return (
    <div>
      <h1>Service Detail Id: {service.name}</h1>
      <Link to="/checkout" className="btn btn-primary">
        Check Out
      </Link>
    </div>
  );
};

export default ServiceDetail;
