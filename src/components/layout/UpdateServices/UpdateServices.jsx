import { useLoaderData } from "react-router-dom";
import swal from "sweetalert";

const UpdateServices = () => {
  const services = useLoaderData();
  const { _id, userName, serviceName, email, price, description, image, area } =
    services;

  const handleUpdateService = (event) => {
    event.preventDefault();

    const form = event.target;

    const userName = form.userName.value;
    const serviceName = form.serviceName.value;
    const email = form.email.value;
    const price = form.price.value;
    const description = form.description.value;
    const image = form.image.value;
    const area = form.area.value;

    const updatedService = {
      userName,
      serviceName,
      email,
      price,
      description,
      image,
      area,
    };

    console.log(updatedService);

    // send data to the server
    fetch(`https://assignment-11-server-rose-gamma.vercel.app/bookings/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedService),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          swal("Success!", "Service Update Successfully", "success");
        }
      });
  };

  return (
    <div className="bg-base-300 rounded-xl p-14 py-20 max-w-5xl mx-auto mb-16">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-extrabold pb-8">Update Service</h2>
        <p>
          <span className="text-red-500">HomeSwap Hub </span>is a user-friendly
          online platform designed to facilitate home swapping, making it easy
          for homeowners to exchange their residences with others.
        </p>
      </div>
      <form onSubmit={handleUpdateService}>
        {/* name and Brand name Row */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">User Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                defaultValue={userName}
                name="userName"
                placeholder="User Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 md:ml-4">
            <label className="label">
              <span className="label-text">User Email</span>
            </label>
            <label className="input-group">
              <input
                type="email"
                defaultValue={email}
                name="email"
                placeholder="Email"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* type & price row */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Service Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                defaultValue={serviceName}
                name="serviceName"
                placeholder="Service Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 md:ml-4">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                defaultValue={price}
                name="price"
                placeholder="$ Price"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* descriptions & rating row */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                defaultValue={description}
                name="description"
                placeholder="Description"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 md:ml-4">
            <label className="label">
              <span className="label-text">Service Area</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                defaultValue={area}
                name="area"
                placeholder="Service Area"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* image row */}
        <div className="mb-8">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Service Image URL</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                defaultValue={image}
                name="image"
                placeholder="Image URL"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <input
          type="submit"
          value="Update Service"
          className="btn btn-block bg-slate-800 text-white"
        />
      </form>
    </div>
  );
};

export default UpdateServices;
