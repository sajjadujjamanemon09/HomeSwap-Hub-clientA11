import { FaDollarSign } from "react-icons/fa";
import { FaLocationDot, FaCalendarDays } from "react-icons/fa6";
import BookNowForm from "../../components/layout/BookNowForm/BookNowForm";
import ServiceProviderDetail from "../../components/layout/ServiceProviderDetail/ServiceProviderDetail";

const SingleServicesDetail = ({ product }) => {
  const { userName, serviceName, price, description, image, area } = product;

  return (
    
    <div className="px-6 pb-14">
        
        <ServiceProviderDetail></ServiceProviderDetail>
      <h1 className="text-5xl font-bold pt-32 text-center">Service</h1>
      <div>
        <img className="hero h-[60vh] w-[60vh] mx-auto" src={image} alt="" />
      </div>

<div className="flex justify-around">
<div>
    <p className=" font-bold text-2xl flex items-center gap-2 pt-4">
        <FaCalendarDays className="text-cyan-500"></FaCalendarDays>
        {serviceName}
      </p>

      <p className=" font-bold text-2xl flex items-center gap-2 pt-4">
        <FaDollarSign className="text-cyan-500"></FaDollarSign>
        {price}
      </p>

      <p className=" font-bold text-2xl flex items-center gap-2 py-4">
        <FaLocationDot className="text-cyan-500"></FaLocationDot>
        {area}
      </p>
    </div>
      <div className="flex items-center">
        <img className="w-14" src="https://i.ibb.co/0yxQ5vg/undraw-Pic-profile-re-7g2h.png" alt="" />
        <p className="font-bold text-2xl">{userName}</p>
      </div>
</div>

      <p className="py-8">
        <span className="font-extrabold text-xl">Description : </span>
        {description}
      </p>
      
     <div className="w-full">
<BookNowForm></BookNowForm>
     </div>
    </div>
  );
};

export default SingleServicesDetail;

{/* <button className="btn ">
Book Now{" "}
</button> */}
