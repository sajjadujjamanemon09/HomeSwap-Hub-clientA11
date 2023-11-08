import { useLoaderData } from "react-router-dom";
import swal from "sweetalert";
import { useRef } from "react";

const BookNowForm = () => {
  const dialogRef = useRef();
  const services = useLoaderData();
  const { userName, serviceName, email, price, date, image, area } = services;

  const handleBookService = (event) => {
    event.preventDefault();

    const form = event.target;

    const userName = form.userName.value;
    const serviceName = form.serviceName.value;
    const email = form.email.value;
    const price = form.price.value;
    const date = form.date.value;
    const image = form.image.value;
    const area = form.area.value;

    const newBookings = {
      userName,
      serviceName,
      email,
      price,
      date,
      image,
      area,
    };

    const bookService = {
      userName,
      serviceName,
      email,
      price,
      date,
      image,
      area,
    };

    console.log(bookService);

    // send data to the server
    fetch("https://assignment-11-server-rose-gamma.vercel.app/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newBookings),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          swal("Success!", "Booking Successfully", "success");
          dialogRef.current.close(); // Close the modal
        }
      });
  };

  return (
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn btn-neutral w-full text-white"
        onClick={() => dialogRef.current.showModal()}
      >
        B o o k N o w
      </button>
      <dialog
        ref={dialogRef} // Add a ref to the dialog element
        className="modal modal-bottom sm:modal-middle"
      >
        <div className="modal-box">
          <form onSubmit={handleBookService}>
            {/* name and email Row */}
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
            {/* service & price row */}
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
            {/* date & area */}
            <div className="md:flex mb-8">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Date</span>
                </label>
                <label className="input-group">
                  <input
                    type="date"
                    defaultValue={date}
                    name="date"
                    placeholder="Date"
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
