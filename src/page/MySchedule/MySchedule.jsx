
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import BookedService from "../../components/layout/BookingService/BookedService";

const MySchedule = () => {
  const data = useLoaderData();

  const [products, setProducts] = useState(data);

  const url = `https://assignment-11-server-rose-gamma.vercel.app/bookings`;

  useEffect(() => {
    document.title = "HomeSwap | My Schedule";
  }, []);

  useEffect(() => {
    fetch(url, { credentials: "include" })
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="max-w-7xl mx-auto">
      <div>
        <h2 className="text-4xl font-bold text-center py-16">
          Booked Services
        </h2>
        {products.length === 0 ? (
          <p className="text-center text-xl pb-10 font-medium text-gray-500">No service booking yet</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <BookedService
                key={product._id}
                product={product}
                setProducts={setProducts}
                products={products}
              ></BookedService>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MySchedule;
