import { useState } from "react";
import image2 from "../../assets/Image2.png";

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
            <div>
                <div><button className="btn bg-warning">About More</button></div>
                <div>
                    
                </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Tabs;
