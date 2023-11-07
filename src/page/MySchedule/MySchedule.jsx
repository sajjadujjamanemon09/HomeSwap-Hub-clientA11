import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import BookedService from "../../components/layout/BookingService/BookedService";
const MySchedule = () => {

    const products = useLoaderData()

    useEffect(() => {
        document.title = 'HomeSwap | My Schedule'
      },[])
    return (
        <div className="max-w-7xl mx-auto">
           <div>
            <h2 className="text-4xl font-bold text-center py-16">Booked Services</h2>
           <div className="grid grid-cols-4 gap-6">
           {
                products.map(product => <BookedService product={product} key={product._id}></BookedService>)
            }
           </div>
           </div>
           
            <h2>My Pending works Section</h2>
        </div>
    );
};

export default MySchedule;