import { useLoaderData } from "react-router-dom";
import Banner from "../../components/layout/Banner/Banner";
import ServicesCard from "../../components/layout/ServicesCard/ServicesCard";

const Home = () => {

	const products = useLoaderData()

	return (
		<div>
			<Banner></Banner>
			{
				products.map(product => <ServicesCard key={product._id} product={product}></ServicesCard>)
			}
		</div>
	);
};

export default Home;