import { FaDollarSign, FaLocationArrow } from "react-icons/fa";
import { FaLocationDot, FaCalendarDays } from "react-icons/fa6";

const SingleServicesDetail = ({ product }) => {
  const { userName, serviceName, price, description, image, area } = product;

  return (
    
    <div className="px-6 pb-14">
        <div>
            <h2 className="text-3xl font-bold text-center py-8">
            Service Provider Information
            </h2>
        </div>
<div className="card md:card-side  w-3/4 mx-auto bg-base-300 shadow-2xl">
  <figure><img className="w-72" src="https://i.ibb.co/j4CsjqN/827.jpg" alt="Album"/></figure>
  <div className="card-body w-3/4">
    <h2 className="card-title">John Abraham</h2>
    <div className="flex items-center gap-4">
        <FaLocationArrow></FaLocationArrow>
    <p>New York</p>
    </div>
    <p>
    These services can range from professional services like legal or accounting assistance to more tangible services like plumbing, landscaping, or IT support.Service providers play a crucial role in various industries, aiming to fulfill specific needs and requirements of their clients, ensuring quality and customer satisfaction.
    </p>
  </div>
</div>
        
      <h1 className="text-5xl font-bold pt-32 text-center">Service</h1>
      <div>
        <img className="hero" src={image} alt="" />
      </div>

      <p className=" font-bold text-2xl flex items-center gap-2 pt-4">
        <FaCalendarDays className="text-cyan-500"></FaCalendarDays>
        {serviceName}
      </p>

      <p className=" font-bold text-2xl flex items-center gap-2 pt-4">
        <FaDollarSign className="text-cyan-500"></FaDollarSign>
        {price}
      </p>

      <p className=" font-bold text-2xl flex items-center gap-2 pt-4">
        <FaLocationDot className="text-cyan-500"></FaLocationDot>
        {area}
      </p>

      <p className="py-8">
        <span className="font-extrabold text-xl">Description : </span>
        {description}
      </p>
      <button className="btn btn-neutral text-xl text-white">
        Book Now{" "}
      </button>
    </div>
  );
};

export default SingleServicesDetail;
