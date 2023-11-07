import { useEffect } from "react";


const MyServices = () => {

    useEffect(() => {
        document.title = 'HomeSwap | My Service'
      },[])

    return (
        <div>
            <h2>All of my Services Here</h2>
        </div>
    );
};

export default MyServices;