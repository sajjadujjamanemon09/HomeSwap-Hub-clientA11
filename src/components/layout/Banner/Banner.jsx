



const Banner = () => {
    return (
        <div>
                    <>
                    <div className="hero w-full" style={{backgroundImage: 'url(https://iili.io/JAFGYpj.jpg)'}}>
                    <div className="hero-overlay bg-opacity-30"></div>
	<div className="w-full flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-evenly">
		<div className="lg:w-1/2 flex items-center justify- p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
			<img src="https://iili.io/JAFtH1p.png" alt="" className="w-full object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
		</div>
		<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:w-1/2 lg:text-left">
			<h1 className="text-5xl font-bold text-white">A 
				<span className="text-black"> Domestic <br /> Exchange Nexus</span> 
			</h1>
			<p className="mt-6 mb-8 text-slate-200 sm:mb-12">Welcome to HomeSwap Hub, your gateway to hassle-free home exchanges. Discover a world of possibilities as you seamlessly trade your residence with others looking for a change of scenery. Whether you seek a new adventure or want to experience different cultures from the comfort of your own home.
			</p>
			<div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
				<a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded bg-slate-700 text-white">See Here</a>
				<a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold border rounded border-black">View</a>
			</div>
		</div>
	</div>
</div>
        </>
        </div>
    );
};

export default Banner;