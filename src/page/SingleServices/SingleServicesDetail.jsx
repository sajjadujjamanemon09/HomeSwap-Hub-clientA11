import { FaDollarSign } from "react-icons/fa";
import { FaLocationDot, FaCalendarDays } from "react-icons/fa6";
import BookNowForm from "../../components/layout/BookNowForm/BookNowForm";
import ServiceProviderDetail from "../../components/layout/ServiceProviderDetail/ServiceProviderDetail";
import { useEffect } from "react";
import ServiceProviderItem from "../../components/layout/ServiceProviderDetail/ServiceProviderItem";

const SingleServicesDetail = ({ product }) => {
  useEffect(() => {
    document.title = 'HomeSwap | View Detail'
  },[])

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
        <img className="w-14 rounded-full " src="https://iili.io/JAKEpt4.jpg" alt="" />
        <p className="font-bold text-2xl pl-3">{userName}</p>
      </div>
</div>

      <p className="py-8">
        <span className="font-extrabold text-xl">Description : </span>
        {description}
      </p>
      
     <div className="w-full">
<BookNowForm></BookNowForm>
     </div>
     <div>
      <h2 className="text-xl font-semibold text-center pt-20">Other Service Of this Provider</h2>
      <ServiceProviderItem></ServiceProviderItem>
     </div>
    </div>
  );
};

export default SingleServicesDetail;

