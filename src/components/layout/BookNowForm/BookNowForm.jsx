import { useLoaderData } from "react-router-dom";
import swal from "sweetalert";


const BookNowForm = () => {
    const services = useLoaderData();
    const { _id, userName, serviceName, email, price, date, image, area } =
      services;

      const handleUpdateService = (event) => {
        event.preventDefault();
    
        const form = event.target;
    
        const userName = form.userName.value;
        const serviceName = form.serviceName.value;
        const email = form.email.value;
        const price = form.price.value;
        const date = form.description.value;
        const image = form.image.value;
        const area = form.area.value;
    
        const updatedService = {
          userName,
          serviceName,
          email,
          price,
          date: date,
          image,
          area,
        };
    
        console.log(updatedService);
    
        // send data to the server
        fetch(`http://localhost:5000/services/${_id}`, {
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
        <div>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="btn btn-neutral w-full text-white" onClick={()=>document.getElementById('my_modal_5').showModal()}>B o o k    N o w</button>
<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
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
                readOnly
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
                readOnly
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
                readOnly
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
                readOnly
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
                type="date"
                defaultValue={date}
                name="date"
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
                readOnly
              />
            </label>
          </div>
        </div>
        <input
          type="submit"
          value="Purchase This Service"
          className="btn btn-block bg-slate-800 text-white"
        />
      </form>
  </div>
</dialog>
        </div>
    );
};

export default BookNowForm;



    // <div className="modal-action">
    //   <form method="dialog">
    //     {/* if there is a button in form, it will close the modal */}
    //     <button className="btn">Close</button>
    //   </form>
    // </div>