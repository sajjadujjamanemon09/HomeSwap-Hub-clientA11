import { useLoaderData } from "react-router-dom";
import Banner from "../../components/layout/Banner/Banner";
import { useState, useEffect } from "react";
import AllServiceCard from "./AllServiceCard";

const Home = () => {
  const products = useLoaderData();
  const [isShow, setIsShow] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate an API call or data loading process
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Change the duration as needed
  }, []);

  const handleSeeMore = () => {
    setIsShow(true);
  };

  return (
    <div>
      <Banner></Banner>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold pt-20 pb-5">Our Services</h2>
          <p>
            <span className="text-red-500 py-6">
              HomeSwap Hub
            </span>
            for individuals to find like-minded individuals interested in temporary home exchanges, whether for vacations or other purposes. Users can create detailed listings of their homes, specify their preferences, and connect with potential swap partners, allowing for convenient and cost-effective travel experiences while enjoying the comforts of a real home away from home.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-10 py-20">
          {isShow
            ? products.map((product) => (
                <AllServiceCard key={product._id} product={product} />
              ))
            : products.slice(0, 6).map((product) => (
                <AllServiceCard key={product._id} product={product} />
              ))}
        </div>
        <div className="flex justify-center my-6">
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            !isShow && (
              <button
                onClick={handleSeeMore}
                className="btn btn-neutral text-white"
              >
                See more
              </button>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
