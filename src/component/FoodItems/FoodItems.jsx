import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation } from "swiper/modules";

import card1 from '../../assets/card1.png'
import card2 from '../../assets/card2.png'
import card3 from '../../assets/card3.png'
import card4 from '../../assets/card4.png'
import sec3LeftImg from '../../assets/sec3leftimg.png'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const FoodItems = () => {
  return (
    <div className="bg-[#FBF7F2] relative md:p-16">
      <section className="lg:w-[1320px] mx-auto p-10 lg:py-28">
        <div className="flex justify-between items-center relative">
          <div>
          <p className="flex items-center gap-2 text-base lg:text-xl font-bold text-[#BD1F17]">
            <span className="border-2  h-3  w-3 bg-[#BD1F17] inline-block">
              {" "}
            </span>{" "}
            Crispy, Every Bite Taste
          </p>
          <h1 className="font-bold text-4xl lg:text-6xl">POPULAR FOOD ITEMS</h1>
          </div>
          <div className="hidden lg:block">
          <div className="flex ">
            <p className="button-prev cursor-pointer p-4 bg-white rounded-full shadow-2xl shadow-gray-500 mx-4 hover:text-red-500"><IoIosArrowBack className="hover:text-[#BD1F17]"/></p>
            <p className="button-next cursor-pointer p-4 bg-white rounded-full shadow-2xl shadow-gray-500 mx-4 hover:text-red-500"><IoIosArrowForward className="hover:text-[#BD1F17]"/></p>
          </div>
          </div>
        </div>
        <div>
        
          <div className="relative  mx-auto mt-10 ">
            
            {/* end  */}
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={30}
              loop={true}
              
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              slidesPerView={4}
              navigation={{
                nextEl: ".button-next",
                prevEl: ".button-prev",
              }}
              breakpoints={{
                640: {
                    slidesPerView: 2, // Show 2 slides
                    spaceBetween: 20,
                },
                // When window width is >= 768px (e.g., small desktop)
                768: {
                    slidesPerView: 3, // Show 3 slides
                    spaceBetween: 20,
                },
                // When window width is >= 1024px (e.g., desktop)
                1024: {
                    slidesPerView: 4, // Show 4 slides
                    spaceBetween: 20,
                },
                // When window width is < 640px (e.g., mobile size)
                0: {
                    slidesPerView: 1, // Show 1 slide
                    spaceBetween: 20,
                },
              }}
            >
              <SwiperSlide>
                <div className="card bg-base-100 w-[300px] h-[306px] ">
                  <figure className="px-10 pt-10">
                    <img
                      src={card1}
                      alt="Burger"
                      className="rounded-xl"
                    />
                  </figure>
                  <div className="justify-center flex">
                        <p className="w-14 border-b-4 border-[#BD1F17]"></p>
                  </div>
                  <div className="card-body items-center text-center">
                    <h2 className="card-title uppercase text-2xl font-bold">vegetables burger</h2>
                    <p className="text-base font-normal">Barbecue Italian cuisine pizza</p>
                    
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card bg-base-100 w-[300px] h-[306px] ">
                  <figure className="px-10 pt-10">
                    <img
                      src={card2}
                      alt="Burger"
                      className="rounded-xl"
                    />
                  </figure>
                  <div className="justify-center flex">
                        <p className="w-14 border-b-4 border-[#BD1F17]"></p>
                  </div>
                  <div className="card-body items-center text-center">
                    <h2 className="card-title uppercase text-2xl font-bold">Spacial Pizza </h2>
                    <p>Barbecue Italian cuisine pizza</p>
                    
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card bg-base-100 w-[300px] h-[306px] ">
                  <figure className="px-10 pt-10">
                    <img
                      src={card3}
                      alt="Burger"
                      className="rounded-xl"
                    />
                  </figure>
                  <div className="justify-center flex">
                        <p className="w-14 border-b-4 border-[#BD1F17]"></p>
                  </div>
                  <div className="card-body items-center text-center">
                    <h2 className="card-title uppercase text-2xl font-bold">Spacial French fries </h2>
                    <p>Barbecue Italian cuisine</p>
                    
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card bg-base-100 w-[300px] h-[306px] ">
                  <figure className="px-10 pt-10">
                    <img
                      src={card4}
                      alt="Burger"
                      className="rounded-xl"
                    />
                  </figure>
                  <div className="justify-center flex">
                        <p className="w-14 border-b-4 border-[#BD1F17]"></p>
                  </div>
                  <div className="card-body items-center text-center ">
                    <h2 className="card-title text-2xl font-bold">Cuisine Chicken</h2>
                    <p>Japanese Cuisine Chicken</p>
                    
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card bg-base-100 w-[300px] h-[306px] ">
                  <figure className="px-10 pt-10">
                    <img
                      src={card1}
                      alt="Burger"
                      className="rounded-xl"
                    />
                  </figure>
                  <div className="justify-center flex">
                        <p className="w-14 border-b-4 border-[#BD1F17]"></p>
                  </div>
                  <div className="card-body items-center text-center">
                    <h2 className="card-title uppercase text-2xl font-bold">vegetables burger</h2>
                    <p className="text-base font-normal">Barbecue Italian cuisine pizza</p>
                    
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card bg-base-100 w-[300px] h-[306px] ">
                  <figure className="px-10 pt-10">
                    <img
                      src={card2}
                      alt="Burger"
                      className="rounded-xl"
                    />
                  </figure>
                  <div className="justify-center flex">
                        <p className="w-14 border-b-4 border-[#BD1F17]"></p>
                  </div>
                  <div className="card-body items-center text-center">
                    <h2 className="card-title uppercase text-2xl font-bold">Spacial Pizza </h2>
                    <p>Barbecue Italian cuisine pizza</p>
                    
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card bg-base-100 w-[300px] h-[306px] ">
                  <figure className="px-10 pt-10">
                    <img
                      src={card3}
                      alt="Burger"
                      className="rounded-xl"
                    />
                  </figure>
                  <div className="justify-center flex">
                        <p className="w-14 border-b-4 border-[#BD1F17]"></p>
                  </div>
                  <div className="card-body items-center text-center">
                    <h2 className="card-title uppercase text-2xl font-bold">Spacial French fries </h2>
                    <p>Barbecue Italian cuisine</p>
                    
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card bg-base-100 w-[300px] h-[306px] ">
                  <figure className="px-10 pt-10">
                    <img
                      src={card4}
                      alt="Burger"
                      className="rounded-xl"
                    />
                  </figure>
                  <div className="justify-center flex">
                        <p className="w-14 border-b-4 border-[#BD1F17]"></p>
                  </div>
                  <div className="card-body items-center text-center ">
                    <h2 className="card-title text-2xl font-bold">Cuisine Chicken</h2>
                    <p>Japanese Cuisine Chicken</p>
                    
                  </div>
                </div>
              </SwiperSlide>
              {/* Custom Navigation Buttons */}
            </Swiper>
          </div>

          {/* nav btn for slider mobile device */}
          <div className="md:hidden mt-10">
          <div className="flex justify-center items-center">
            <p className="button-prev cursor-pointer p-4 bg-white rounded-full shadow-2xl shadow-gray-500 mx-4 hover:text-red-500"><IoIosArrowBack className="hover:text-[#BD1F17]"/></p>
            <p className="button-next cursor-pointer p-4 bg-white rounded-full shadow-2xl shadow-gray-500 mx-4 hover:text-red-500"><IoIosArrowForward className="hover:text-[#BD1F17]"/></p>
          </div>
          </div>
        </div>

        
      </section>
      <div className="absolute left-0 top-1/3 hidden lg:block">
            <img src={sec3LeftImg} alt="" />
        </div>
    </div>
  );
};

export default FoodItems;
