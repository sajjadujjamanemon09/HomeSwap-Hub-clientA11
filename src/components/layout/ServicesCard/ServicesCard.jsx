import { FaForward } from "react-icons/fa";
import { Link } from "react-router-dom";



const Product = ({product}) => {
    const { userName, serviceName, price, description, image } = product;
    return (
        <div className="card w-[50vh] mx-auto justify-center shadow-2xl">
            <div className="p-8 flex gap-5 items-center">
            <div className="avatar">
  <div className="w-12 rounded-full ring ring-neutral-600 ring-offset-base-100 ring-offset-2">
    <img src="https://i.ibb.co/0yxQ5vg/undraw-Pic-profile-re-7g2h.png" />
  </div>
</div>
<div>
    <h2 className="text-2xl font-medium">{userName}</h2>
</div>
            </div>
        <figure className="px-6 pt-6">
          <img src={image} alt="Events" className="w-72 rounded-xl" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold">{serviceName}</h2>
        
        <p className="text-cyan-900 py-3">
        {
          description.length > 200 
          ? <p>{description.slice(0,140)}</p>
          : <p>{description}</p>
        }
        </p>
        <p> <span className="text-xl text-black font-medium -4">Price:</span> <span className="text-red-500 text-xl font-bold">{price}</span></p>
        
          <div className="card-actions pt-3">
           <Link> <button className="btn btn-neutral text-white">View Detail <FaForward></FaForward> </button></Link>
          </div>
        </div>
      </div>
    );
};

export default Product;