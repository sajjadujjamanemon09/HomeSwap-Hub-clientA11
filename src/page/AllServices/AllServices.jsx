import { useLoaderData } from "react-router-dom";
import { useState, useEffect } from "react";
import AllServiceCard from "./AllServiceCard";
import { FaSearch } from "react-icons/fa";

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

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold pt-10 pb-5">Our Services</h2>
          <p>
            <span className="text-red-500 py-6">
              HomeSwap Hub
            </span>
            for individuals to find like-minded individuals interested in temporary home exchanges, whether for vacations or other purposes. Users can create detailed listings of their homes, specify their preferences, and connect with potential swap partners, allowing for convenient and cost-effective travel experiences while enjoying the comforts of a real home away from home.
          </p>
        </div>

<div className="flex justify-end pr-5">
	<label className="hidden ">Search</label>
	<div className="relative ">
		<span className="absolute inset-y-0 left-0 flex items-center pl-2">
			<button type="button" title="search" className="p-1 focus:outline-none focus:ring">
	<FaSearch></FaSearch>
			</button>
		</span>
		<input type="search" name="Search" placeholder="Search..." className="border border-black w-32 py-2 pl-10 text-sm rounded-md sm:w-auto focus:outline-none bg-base-200 text-black " data-listener-added_9dc9c109="true" />
	</div>
</div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-20">
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
