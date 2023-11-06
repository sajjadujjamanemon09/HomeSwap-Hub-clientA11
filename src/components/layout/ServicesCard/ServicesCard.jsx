



const ServicesCard = ({product}) => {
    const { userName, serviceName, price, description, image } = product;
    return (
      <div className="card shadow-xl">
      <figure className="px-10">
        <img src={image} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <img className="w-14" src="https://i.ibb.co/0yxQ5vg/undraw-Pic-profile-re-7g2h.png" alt="" />
          <h2 className="text-sm font-extrabold">{userName}</h2>
        </div>
        <div>
          <p className="text-lg font-semibold">{price}</p>
        </div>
        </div>
        <h2 className="card-title">{serviceName}</h2>
        <p>
        {
          description.length > 200 
          ? <p>{description.slice(0,80)}</p>
          : <p>{description}</p>
        }
        </p>
        <div className="card-actions items-end justify-end">
          <button className="btn btn-neutral">View Details</button>
        </div>
      </div>
    </div>
    );
};

export default ServicesCard;