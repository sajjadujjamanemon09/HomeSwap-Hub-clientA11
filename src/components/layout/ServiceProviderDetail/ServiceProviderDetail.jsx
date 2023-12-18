
import { FaLocationArrow } from "react-icons/fa";

const ServiceProviderDetail = () => {
    return (
      <div>
        

            <div>
      
            <h2 className="text-3xl font-bold text-center lg:pt-20 pb-8">
            Service Provider Information
            </h2>
        </div>
<div className="card md:card-side  w-3/4 mx-auto bg-base-300 shadow-2xl">
  <figure><img className="w-72" src="https://iili.io/JAKXf1V.jpg" alt="Album"/></figure>
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
        </div>
    );
};

export default ServiceProviderDetail;