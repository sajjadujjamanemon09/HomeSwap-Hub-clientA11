import { useEffect } from "react";
import BookingService from "../../components/layout/BookingService/BookingService";

const MySchedule = () => {
    useEffect(() => {
        document.title = 'HomeSwap | My Schedule'
      },[])
    return (
        <div>
            <BookingService></BookingService>
            <h2>My Pending works Section</h2>
        </div>
    );
};

export default MySchedule;