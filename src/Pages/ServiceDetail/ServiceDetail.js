import { Link, useParams } from "react-router-dom";

const ServiceDetail = () => {
  const { serviceId } = useParams();

  return (
    <div>
      <h1>Service Detail Id: {serviceId}</h1>
      <Link to="/checkout" className="btn btn-primary">
        Check Out
      </Link>
    </div>
  );
};

export default ServiceDetail;
