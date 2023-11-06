import { useLoaderData } from "react-router-dom";
import SingleServicesDetail from "./SingleServicesDetail";

const SingleServices = () => {
    const product = useLoaderData()
    console.log(product);
    return (
      <div className="max-w-7xl mx-auto ">
  
       <SingleServicesDetail
          product={product}
          ></SingleServicesDetail>
    
      </div>
    );
};

export default SingleServices;