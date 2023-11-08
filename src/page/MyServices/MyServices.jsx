import { useEffect } from "react";
import MyPending from "../../components/layout/MyPending/MyPending";


const MyServices = () => {

    useEffect(() => {
        document.title = 'HomeSwap | My Service'
      },[])

    return (
        <div>
             <MyPending></MyPending>
        </div>
    );
};

export default MyServices;