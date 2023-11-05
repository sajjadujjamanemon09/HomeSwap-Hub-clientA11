import { useLoaderData } from "react-router-dom";
import AllServiceCard from "./AllServiceCard";

const AllServices = () => {
    const products = useLoaderData();
    return (
       <div className="max-w-7xl mx-auto justify-center py-20">
         <div className="grid gap-10 grid-cols-1 md:grid-cols-3 ">
           {
            products.map(product => <AllServiceCard  key={product._id} product={product} ></AllServiceCard>)
           }
        </div>
       </div>
    );
};

export default AllServices;