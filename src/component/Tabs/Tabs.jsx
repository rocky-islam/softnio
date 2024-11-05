import { useState } from "react";
import image2 from "../../assets/Image2.png";
import { FaPhoneVolume } from "react-icons/fa6";
import { BsBoxSeam } from "react-icons/bs";
import { GiAchievement } from "react-icons/gi";
import { LuShoppingBag } from "react-icons/lu";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  return (
    <div>
      <div className="flex justify-center gap-24 p-14">
        <section>
          <div>
            <img src={image2} alt="image" className="rounded-lg" />
          </div>
        </section>
        <section>
          <div className="w-full max-w-xl mx-auto ">
            {/* Tab Navigation */}
            <div className="flex border-b border-[#B52B1D]">
              <button
                onClick={() => setActiveTab("tab1")}
                className={`flex-1 py-2 text-center font-semibold ${
                  activeTab === "tab1"
                    ? "bg-[#B52B1D] text-white mr-2"
                    : "text-gray-500"
                }`}
              >
                About
              </button>
              <button
                onClick={() => setActiveTab("tab2")}
                className={`flex-1 py-2 text-center font-semibold ${
                  activeTab === "tab2"
                    ? "bg-[#B52B1D] text-white mr-2"
                    : "text-gray-500"
                }`}
              >
                Experience
              </button>
              <button
                onClick={() => setActiveTab("tab3")}
                className={`flex-1 py-2 text-center font-semibold ${
                  activeTab === "tab3"
                    ? "bg-[#B52B1D] text-white ml-2"
                    : "text-gray-500"
                }`}
              >
                Contact
              </button>
            </div>

            {/* Tab Content */}
            <div className="mt-4">
              {activeTab === "tab1" && (
                <div>
                  <h2 className="text-4xl font-bold">
                    Exceptional culinary <br /> experience and delicious food
                  </h2>
                  <p className="mt-2 text-gray-600">
                    TLorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Ornare non sed est cursus. Vel hac convallis ipsum, facilisi
                    odio pellentesque bibendum viverra tempus. Lorem ipsum dolor
                    sit amet consectetur adipiscing elit do eiusmod tempor
                    incididunt ut labore et dolore magna minim veniam nostrud
                    exercitation.
                  </p>
                </div>
              )}
              {activeTab === "tab2" && (
                <div>
                  <h2 className="text-4xl font-bold">
                    Exceptional culinary <br /> experience and delicious food
                  </h2>
                  <p className="mt-2 text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Ornare non sed est cursus. Vel hac convallis ipsum, facilisi
                    odio pellentesque bibendum viverra tempus. Lorem ipsum dolor
                    sit amet consectetur adipiscing elit do eiusmod tempor
                    incididunt ut labore et dolore magna minim veniam nostrud
                    exercitation.
                  </p>
                </div>
              )}
              {activeTab === "tab3" && (
                <div>
                  <h2 className="text-4xl font-bold">
                    Exceptional culinary <br /> experience and delicious food
                  </h2>
                  <p className="mt-2 text-gray-600">
                    TLorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Ornare non sed est cursus. Vel hac convallis ipsum, facilisi
                    odio pellentesque bibendum viverra tempus. Lorem ipsum dolor
                    sit amet consectetur adipiscing elit do eiusmod tempor
                    incididunt ut labore et dolore magna minim veniam nostrud
                    exercitation.
                  </p>
                </div>
              )}
            </div>
          </div>
          <div>
            <div className="flex justify-start items-center gap-24 mt-24">
                <div><button className="btn bg-warning">About More</button></div>
                <div className="flex  items-center">
                <FaPhoneVolume size={25}  color="#BD1F17"/>
                <p className="font-bold text-lg">+88 3426 739 485</p>
                </div>
            </div>
          </div>
        </section>
      </div>
      <div>
        <section className="flex justify-center items-center gap-32 mb-10">
          <div className=" flex justify-center items-center gap-3">
            <div className="p-4 rounded-full  shadow-2xl shadow-gray-500">
            <span ><BsBoxSeam color="#BD1F17" size={25} /></span>
            </div>
            <div>
            <h3 className="font-bold text-3xl uppercase">Fast Delivery</h3>
            <p className="font-normal text-lg">Within 30 Minutes</p>
            </div>
          </div>
          <div className=" flex justify-center items-center gap-3">
            <div className="p-4 rounded-full  shadow-2xl shadow-gray-500">
            <span ><GiAchievement color="#BD1F17" size={25}/> </span>
            </div>
            <div>
            <h3 className="font-bold text-3xl uppercase">absolute dining</h3>
            <p className="font-normal text-lg">Best buffet restaurant</p>
            </div>
          </div>
          <div className=" flex justify-center items-center gap-3">
            <div className="p-4 rounded-full  shadow-2xl shadow-gray-500">
            <span ><LuShoppingBag color="#BD1F17" size={25}/></span>
            </div>
            <div>
            <h3 className="font-bold text-3xl uppercase">pickup delivery</h3>
            <p className="font-normal text-lg">Grab your food order</p>
            </div>
          </div>
          
          
          
        </section>
      </div>
    </div>
  );
};

export default Tabs;
