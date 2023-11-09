import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import ManageMyService from "./ManageMyService";
import { AuthContext } from "../../providers/AuthProvider";

const MyServices = () => {
  const data = useLoaderData();
  const {user} = useContext(AuthContext);
  
  const [products, setProducts] = useState(data);

  const userUrl = `https://assignment-11-server-rose-gamma.vercel.app/userIdServices?email=${user?.email}`;
  useEffect(() => {
      fetch(userUrl)
          .then(res => res.json())
          .then(data => setProducts(data))
  }, [user, userUrl]);


  const url = `https://assignment-11-server-rose-gamma.vercel.app/userServices`;
  useEffect(() => {
    fetch(url, { credentials: "include" })
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [url]);

  useEffect(() => {
    document.title = 'HomeSwap | My Service';
  }, []);

  return (
    <div className="max-w-7xl mx-auto pb-16">
      <h2 className="text-3xl font-bold text-center pt-16 pb-14">Manage Your Added Services</h2>
      <div className="overflow-hidden">
        <table className="table">
          {/* head */}
          <thead className="bg-base-300">
            <tr>
              <th className="sm:w-1/3 md:w-1/4 lg:w-1/6font-bold text-xl text-black">User Name</th>
              <th className="sm:w-1/3 md:w-1/4 lg:w-1/6font-bold text-xl text-black">Service Name</th>
              <th className="sm:w-1/3 md:w-1/4 lg:w-1/6font-bold text-xl text-black">Price</th>
              <th className="sm:w-1/3 md:w-1/4 lg:w-1/6font-bold text-xl text-black">Area</th>
              <th className="sm:w-1/3 md:w-1/4 lg:w-1/6font-bold text-xl text-black">Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <ManageMyService
                key={product._id}
                product={product}
                setProducts={setProducts}
                products={products}
              ></ManageMyService>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyServices;
