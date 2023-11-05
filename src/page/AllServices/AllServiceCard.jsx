import { FaForward } from "react-icons/fa";
import { Link } from "react-router-dom";


const AllServiceCard = ({product}) => {
    const { userName, serviceName, price, description, image, area } = product;
    return (
        <div className="card shadow-2xl">
            <div className="p-8 flex gap-5 items-center">
            <div className="avatar">
  <div className="w-12 rounded-full ring ring-neutral-600 ring-offset-base-100 ring-offset-2">
    <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
  </div>
</div>
<div>
    <h2 className="text-2xl font-medium">{userName}</h2>
</div>
            </div>
        <figure className="px-6 pt-6">
          <img src={image} alt="Events" className="rounded-xl" />
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
        <p> <span className="text-xl text-black font-medium py-4">Price:</span> <span className="text-red-500 text-xl font-bold">{price}</span></p>
        <p>{area}</p>
        
          <div className="card-actions">
           <Link> <button className="btn btn-neutral text-white">View Detail <FaForward></FaForward> </button></Link>
          </div>
        </div>
      </div>
    );
};

export default AllServiceCard;