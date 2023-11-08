import { FaForward } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa6";
import { Link } from "react-router-dom";

const AllServiceCard = ({ product }) => {
  const { _id, userName, serviceName, price, description, image, area } =
    product;
  return (
    <div className="card shadow-xl">
      <figure className="px-10">
        <img src={image} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img
              className="w-14"
              src="https://i.ibb.co/0yxQ5vg/undraw-Pic-profile-re-7g2h.png"
              alt=""
            />
            <h2 className="text-sm font-extrabold">{userName}</h2>
          </div>
          <div>
            <p className="text-lg font-semibold">$ {price}</p>
          </div>
        </div>
        <h2 className="card-title">{serviceName}</h2>
        <div>
          {description.length > 200 ? (
            <p>{description.slice(0, 80)}</p>
          ) : (
            <p>{description}</p>
          )}
        </div>
        <div className="flex items-center gap-2">
          <FaLocationArrow />
          <p className="text-sm font-thin">{area}</p>
        </div>
        <div className="card-actions items-end justify-end">
          <Link to={`/singleService/${_id}`}>
            {" "}
            <button className="btn btn-neutral text-white">
              View Detail <FaForward></FaForward>{" "}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AllServiceCard;
