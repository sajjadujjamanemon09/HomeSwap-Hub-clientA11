import { useLoaderData } from "react-router-dom";
import Banner from "../../components/layout/Banner/Banner";
import ServicesCard from "../../components/layout/ServicesCard/ServicesCard";
import { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const products = useLoaderData();
  const [isShow, setIsShow] = useState(false);

  return (
    <div>
      <Banner></Banner>

      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 py-20">
          {isShow
            ? products.map((product) => (
                <ServicesCard key={product._id} product={product} />
              ))
            : products.slice(0, 4).map((product) => (
                <ServicesCard key={product._id} product={product} />
              ))}
        </div>
        <div className="flex justify-center my-9">
          {products.length > 4 && (
            <Link to="/allServices" className="btn btn-neutral text-white">
              See more
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
