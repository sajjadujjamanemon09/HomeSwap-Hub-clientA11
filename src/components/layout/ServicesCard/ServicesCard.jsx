import { Link } from "react-router-dom";




const ServicesCard = ({product}) => {
    const {_id, userName, serviceName, price, description, image } = product;
    return (
      <div className="card shadow-xl">
      <figure className="px-10">
        <img src={image} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <img className="w-12 rounded-full" src="https://iili.io/JAKEpt4.jpg" alt="" />
          <h2 className="text-sm font-extrabold pl-3">{userName}</h2>
        </div>
        <div>
          <p className="text-lg font-semibold">$ {price}</p>
        </div>
        </div>
        <h2 className="card-title">{serviceName}</h2>
        <div>
        {
          description.length > 200 
          ? <p>{description.slice(0,80)}</p>
          : <p>{description}</p>
        }
        </div>
        <div className="card-actions items-end justify-end">
          <Link  to={`/singleService/${_id}`}>
          <button className="btn btn-neutral">View Details</button>

          </Link>
        </div>
      </div>
    </div>
    );
};

export default ServicesCard;