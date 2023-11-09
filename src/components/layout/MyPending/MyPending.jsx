

const MyPending = ({ hasPendingServices }) => {
  // const [text] = useTypewriter({
  //   words: ["My Pending Services"],
  //   loop: 0,
  // });

  return (
    <div className="pb-10">
      <div className="flex justify-center">
        <h2 className="text-4xl font-semibold text-center py-14">My Pending Services</h2>
      </div>
      <div>
        {!hasPendingServices && (
          <p className="text-xl text-center text-gray-500">
            {/* No Pending Services Yet */}
          </p>
        )}{" "}

        
<div className="grid grid-cols-6 gap-2">
          {/* card 1 */}
          <div className=" relative flex flex-col text-gray-700 shadow-md rounded-xl border border-black bg-clip-border">
          <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white rounded-xl bg-clip-border">
            <div className="flex justify-end p-6 pt-0">
              <ul className="menu menu-horizontal px-1">
                <li>
                  <details>
                    <summary>Pending</summary>
                    <ul className="p-2 bg-base-100">
                      <li>
                        <a>In Progress</a>
                      </li>
                      <li>
                        <a>Completed</a>
                      </li>
                    </ul>
                  </details>
                </li>
              </ul>
            </div>
            <img
              src="https://i.ibb.co/dBDxnHR/6127608-22939.jpg"
              className="object-cover w-full h-60"
            />
          </div>
          <div className="p-6">
            <div className="flex items-center justify-between mb-2">
              <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                John Abraham
              </p>
              <p className="text-xs font-semibold text-cyan-700">Cooking</p>
            </div>
            <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
              New York
            </p>
            <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
              $ 170
            </p>
          </div>
        </div>
        {/* card end */}
        {/* card 1 */}
        <div className=" relative flex flex-col text-gray-700 shadow-md rounded-xl border border-black bg-clip-border">
          <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white rounded-xl bg-clip-border">
            <div className="flex justify-end p-6 pt-0">
              <ul className="menu menu-horizontal px-1">
                <li>
                  <details>
                    <summary>Pending</summary>
                    <ul className="p-2 bg-base-100">
                      <li>
                        <a>In Progress</a>
                      </li>
                      <li>
                        <a>Completed</a>
                      </li>
                    </ul>
                  </details>
                </li>
              </ul>
            </div>
            <img
              src="https://i.ibb.co/DwJ3Qjf/9378115-33896.jpg"
              className="object-cover w-full h-60"
            />
          </div>
          <div className="p-6">
            <div className="flex items-center justify-between mb-2">
              <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                Dean Ambrose
              </p>
              <p className="text-xs font-semibold text-cyan-700">Plumb Masters</p>
            </div>
            <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
              China Town
            </p>
            <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
              $ 170
            </p>
          </div>
        </div>
        {/* card end */}
        {/* card 1 */}
        <div className=" relative flex flex-col text-gray-700 shadow-md rounded-xl border border-black bg-clip-border">
          <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white rounded-xl bg-clip-border">
            <div className="flex justify-end p-6 pt-0">
              <ul className="menu menu-horizontal px-1">
                <li>
                  <details>
                    <summary>Pending</summary>
                    <ul className="p-2 bg-base-100">
                      <li>
                        <a>In Progress</a>
                      </li>
                      <li>
                        <a>Completed</a>
                      </li>
                    </ul>
                  </details>
                </li>
              </ul>
            </div>
            <img
              src="https://i.ibb.co/HX4HbCT/1322632-163949-OVJRYS-825.jpg"
              className="object-cover w-full h-60"
            />
          </div>
          <div className="p-6">
            <div className="flex items-center justify-between mb-2">
              <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                Tony Kross
              </p>
              <p className="text-xs font-semibold text-cyan-700">SparkTech Electric</p>
            </div>
            <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
              New Castle
            </p>
            <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
              $ 170
            </p>
          </div>
        </div>
        {/* card end */}
        {/* card 1 */}
        <div className=" relative flex flex-col text-gray-700 shadow-md rounded-xl border border-black bg-clip-border">
          <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white rounded-xl bg-clip-border">
            <div className="flex justify-end p-6 pt-0">
              <ul className="menu menu-horizontal px-1">
                <li>
                  <details>
                    <summary>Pending</summary>
                    <ul className="p-2 bg-base-100">
                      <li>
                        <a>In Progress</a>
                      </li>
                      <li>
                        <a>Completed</a>
                      </li>
                    </ul>
                  </details>
                </li>
              </ul>
            </div>
            <img
              src="https://i.ibb.co/88HNRQj/4887688-52068.jpg"
              className="object-cover w-full h-60"
            />
          </div>
          <div className="p-6">
            <div className="flex items-center justify-between mb-2">
              <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                Graham Bail
              </p>
              <p className="text-xs font-semibold text-cyan-700">Clean Sweep</p>
            </div>
            <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
              East Port
            </p>
            <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
              $ 170
            </p>
          </div>
        </div>
        {/* card end */}
        {/* card 1 */}
        <div className=" relative flex flex-col text-gray-700 shadow-md rounded-xl border border-black bg-clip-border">
          <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white rounded-xl bg-clip-border">
            <div className="flex justify-end p-6 pt-0">
              <ul className="menu menu-horizontal px-1">
                <li>
                  <details>
                    <summary>Pending</summary>
                    <ul className="p-2 bg-base-100">
                      <li>
                        <a>In Progress</a>
                      </li>
                      <li>
                        <a>Completed</a>
                      </li>
                    </ul>
                  </details>
                </li>
              </ul>
            </div>
            <img
              src="https://i.ibb.co/kMz3ftP/22873961-6713785.jpg"
              className="object-cover w-full h-60"
            />
          </div>
          <div className="p-6">
            <div className="flex items-center justify-between mb-2">
              <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                John Abraham
              </p>
              <p className="text-xs font-semibold text-cyan-700">ClimateCare HVAC</p>
            </div>
            <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
              Sheltar Drain
            </p>
            <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
              $ 170
            </p>
          </div>
        </div>
        {/* card end */}
        {/* card 1 */}
        <div className=" relative flex flex-col text-gray-700 shadow-md rounded-xl border border-black bg-clip-border">
          <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white rounded-xl bg-clip-border">
            <div className="flex justify-end p-6 pt-0">
              <ul className="menu menu-horizontal px-1">
                <li>
                  <details>
                    <summary>Pending</summary>
                    <ul className="p-2 bg-base-100">
                      <li>
                        <a>In Progress</a>
                      </li>
                      <li>
                        <a>Completed</a>
                      </li>
                    </ul>
                  </details>
                </li>
              </ul>
            </div>
            <img
              src="https://i.ibb.co/g6smVyt/2870128-6316.jpg"
              className="object-cover w-full h-60"
            />
          </div>
          <div className="p-6">
            <div className="flex items-center justify-between mb-2">
              <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                Brock Lesner
              </p>
              <p className="text-xs font-semibold text-cyan-700">GreenThumb Lawn Care</p>
            </div>
            <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
              Street Area
            </p>
            <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
              $ 170
            </p>
          </div>
        </div>
        {/* card end */}
</div>
      </div>
    </div>
  );
};

export default MyPending;
