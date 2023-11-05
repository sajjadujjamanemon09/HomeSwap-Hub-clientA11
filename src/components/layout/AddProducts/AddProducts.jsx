import swal from 'sweetalert';

const AddProducts = () => {

    const handleAddProduct = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const brand = form.brand.value;
        const email = form.email.value;
        const price = form.price.value;
        const description = form.description.value;
        const image = form.image.value;
        const area = form.area.value;

        const newProduct = { name, brand, email, price, description, image, area }

        console.log(newProduct); 

        // send data to the server
        fetch('http://localhost:5000/api/v1/user/addProducts', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                swal("Success!","Product Added Successfully", "success")
            }
        })
    }


    return (
        <div className="bg-base-300 rounded-xl p-14 py-20 max-w-5xl mx-auto mb-16">
        <div className="text-center mb-16">
        <h2 className="text-3xl font-extrabold pb-8">Add New Service</h2>
        <p><span className="text-red-500">HomeSwap Hub </span>is a user-friendly online platform designed to facilitate home swapping, making it easy for homeowners to exchange their residences with others.</p>
        </div>
        <form onSubmit={handleAddProduct}>
            {/* name and Brand name Row */}
            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="name" placeholder="Name" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 md:ml-4">
                <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <label className="input-group">
                        <input type="email" name="email" placeholder="Email" className="input input-bordered w-full" />
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
                        <input type="text" name="brand" placeholder="Service Name" className="input input-bordered w-full" />
                    </label>
                    
                </div>
                <div className="form-control md:w-1/2 md:ml-4">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="price" placeholder="$ Price" className="input input-bordered w-full" />
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
                        <input type="text" name="description" placeholder="Description" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 md:ml-4">
                    <label className="label">
                        <span className="label-text">Service Area</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="area" placeholder="Service Area" className="input input-bordered w-full" />
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
                        <input type="text" name="image" placeholder="Image URL" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            <input type="submit" value="Add Service" className="btn btn-block bg-slate-800 text-white" />

        </form>
    </div>
);
};

export default AddProducts;