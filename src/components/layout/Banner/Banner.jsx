import Container from "../../ui/Container";


const Banner = () => {
    return (
        <div>
                    <Container>
                    <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/VB7Vkq6/wave-haikei.png)'}}>
                    <div className="hero-overlay bg-opacity-60"></div>
	<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
		<div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
			<img src="https://i.ibb.co/jgfKt3y/undraw-Educator-re-ju47.png" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
		</div>
		<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
			<h1 className="text-5xl font-bold">Ac
				<span className="text-violet-400">Domestic Exchange Nexus</span> 
			</h1>
			<p className="mt-6 mb-8 text-lg sm:mb-12">Welcome to HomeSwap Hub, your gateway to hassle-free home exchanges. Discover a world of possibilities as you seamlessly trade your residence with others looking for a change of scenery. Whether you seek a new adventure or want to experience different cultures from the comfort of your own home.
			</p>
			<div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
				<a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900">See Here</a>
				<a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-100">View</a>
			</div>
		</div>
	</div>
</div>
        </Container>
        </div>
    );
};

export default Banner;