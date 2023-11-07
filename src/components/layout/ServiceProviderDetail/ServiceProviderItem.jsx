

const ServiceProviderItem = () => {

    return (
     <div className="flex-row md:flex-row lg:flex justify-center pt-10 gap-20">
           <div className="relative flex flex-col text-gray-700 bg-white shadow-md rounded-xl bg-clip-border">
        <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white rounded-xl bg-clip-border">
          <img
            src='https://i.ibb.co/Ybc8Ykh/3097940-454290-PFH47-J-722.jpg'
            className="object-cover w-full h-60"
          />
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between mb-2">
            <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
            John Abraham
            </p>
            <p className="text-xs font-semibold text-cyan-700">
            Plumb Masters
            </p>
          </div>
          <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
          New York
          </p>
        </div>
     </div>

        
       <div>
       <div className="relative flex flex-col text-gray-700 bg-white shadow-md rounded-xl bg-clip-border">
       <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white rounded-xl bg-clip-border">
          <img
            src='https://i.ibb.co/yfhC423/2869893-6267.jpg'
            className="object-cover w-full h-60"
          />
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between mb-2">
            <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
            John Abraham
            </p>
            <p className="text-xs font-semibold text-cyan-700">
            Electric Serve
            </p>
          </div>
          <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
          Los Angeles
          </p>
        </div>
      </div>
      </div>
       </div>
    );
};

export default ServiceProviderItem;