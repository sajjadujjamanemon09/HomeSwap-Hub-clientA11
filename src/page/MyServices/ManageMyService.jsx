import { RiArrowRightSFill, RiDeleteBinLine, RiEdit2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import swal from "sweetalert";


const ManageMyService = ({product, products, setProducts}) => {
    const {_id, userName, serviceName, price, area } = product;
    const handleRemove = (id) => {
        console.log(id);
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this Service!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                fetch(`http://localhost:5000/userServices/${_id}`,{
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if(data.deletedCount > 0){
                        swal("Success! Your Selected Services has deleted!", {
                            icon: "success",
                          });
                          const remaining = products.filter(car => car._id !== id)
                          setProducts(remaining)
                    }
                })
            }
          });
    }
    return (
        <tr className="text-lg font">
        <td className="flex items-center"><RiArrowRightSFill className="text-3xl"></RiArrowRightSFill>{userName}</td>
        <td>{serviceName}</td>
        <td>{price}</td>
        <td>{area}</td>
        <td className="text-3xl flex gap-6">
            <Link to={`/updateService/${_id}`}><RiEdit2Fill className="text-green-600"></RiEdit2Fill></Link>
            <div onClick={() => handleRemove(_id)}>
            <Link><RiDeleteBinLine className="text-red-600"></RiDeleteBinLine></Link>
            </div>
            </td>
      </tr>
    );
};

export default ManageMyService;