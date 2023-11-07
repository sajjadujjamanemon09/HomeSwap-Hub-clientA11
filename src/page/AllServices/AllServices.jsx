import { useLoaderData } from "react-router-dom";
import { useState, useEffect } from "react";
import AllServiceCard from "./AllServiceCard";
import { FaSearch } from "react-icons/fa";

const Home = () => {
  const products = useLoaderData();
  const [isShow, setIsShow] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [searchInput, setSearchInput] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    // Simulate an API call or data loading process
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Change the duration as needed
    document.title = 'HomeSwap | All Service';
  }, []);

  const handleSeeMore = () => {
    setIsShow(true);
  };

  const handleSearchInput = (event) => {
    const searchValue = event.target.value;
    setSearchInput(searchValue);

    // Filter the products based on the search input
    const filtered = products.filter((product) =>
      product.serviceName.toLowerCase().includes(searchValue.toLowerCase())
    );

    setFilteredProducts(filtered);
  };

  return (
    <div>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold pt-10 pb-5">Our Services</h2>
          <p>
            {/* Your service description here */}
          </p>
        </div>
        <div className="flex justify-end pr-5">
          <label className="hidden">Search</label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <button type="button" title="search" className="p-1 focus:outline-none focus:ring">
                <FaSearch></FaSearch>
              </button>
            </span>
            <input
              type="search"
              name="Search"
              placeholder="Search..."
              className="border border-black w-32 py-2 pl-10 text-sm rounded-md sm:w-auto focus:outline-none bg-base-200 text-black"
              value={searchInput}
              onChange={handleSearchInput}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-20">
          {searchInput && filteredProducts.length > 0
            ? filteredProducts.map((product) => (
                <AllServiceCard key={product._id} product={product} />
              ))
            : isShow
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
              <button onClick={handleSeeMore} className="btn btn-neutral text-white">
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
