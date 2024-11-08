import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import leftimg from '../../assets/sec4left.png'
import rightimg from '../../assets/sec4right.png'
import reviewMan from "../../assets/manreview.png";
import video from "../../assets/Video.png";
import victor from "../../assets/VectorVideo.png";
import { Autoplay, Navigation } from "swiper/modules";

const Review = () => {
  return (
    <div className="relative">
      <section className="w-[1320px] mx-auto py-28">
        <div className="flex justify-between items-center relative mb-10">
          <div>
            <p className="flex items-center gap-2 text-xl font-bold text-[#BD1F17]">
              <span className="border-2  h-3  w-3 bg-[#BD1F17] inline-block">
                {" "}
              </span>{" "}
              Crispy, Every Bite Taste
            </p>
            <h1 className="font-bold text-6xl uppercase">
              What Some of my Customers Say
            </h1>
          </div>
          <div className="flex">
            <p className="button-prev cursor-pointer p-4 bg-white rounded-full shadow-2xl shadow-gray-500 mx-4 hover:text-red-500">
              <IoIosArrowBack className="hover:text-[#BD1F17]" />
            </p>
            <p className="button-next cursor-pointer p-4 bg-white rounded-full shadow-2xl shadow-gray-500 mx-4 hover:text-red-500">
              <IoIosArrowForward className="hover:text-[#BD1F17]" />
            </p>
          </div>
        </div>
        <div className="relative">
          <Swiper 
          modules={[Navigation, Autoplay]}
          spaceBetween={30}
          loop={true}
          
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          slidesPerView={1}
          navigation={{
            nextEl: ".button-next",
            prevEl: ".button-prev",
          }} 
          
          className="mySwiper">
            <SwiperSlide>
              <div className="flex">
                <div className="w-1/2  bg-warning p-20">
                  <div className=" h-[440px] mx-auto flex flex-col justify-between items-center">
                    <div>
                      <p className="text-xl">
                        <span className="text-4xl">“</span>You cant go wrong
                        with Chicken Mandi, <br /> I had it twice. The chicken
                        was cooked <br /> perfectly, juicy & soft (usually mandi{" "}
                        <br /> chicken is a bit dry). I would defiantly <br />{" "}
                        recommend it.
                      </p>
                    </div>
                    <div className="flex items-center justify-between w-[540px] border-b border-[#0A1425]">
                      <div>
                        <h3 className="text-lg font-bold">Khalid Al Dawsry</h3>
                        <p>Jeddah, Saudi</p>
                      </div>
                      <div>
                        <img
                          src={reviewMan}
                          alt=""
                          className="border-b-4 border-[#BD1f17] pb-2"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="w-1/2 bg-center bg-cover cursor-pointer"
                  style={{ backgroundImage: `url(${video})` }}
                >
                  Right
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex">
                <div className="w-1/2  bg-warning p-20">
                  <div className=" h-[440px] mx-auto flex flex-col justify-between items-center">
                    <div>
                      <p className="text-xl">
                        <span className="text-4xl">“</span>You cant go wrong
                        with Chicken Mandi, <br /> I had it twice. The chicken
                        was cooked <br /> perfectly, juicy & soft (usually mandi{" "}
                        <br /> chicken is a bit dry). I would defiantly <br />{" "}
                        recommend it.
                      </p>
                    </div>
                    <div className="flex items-center justify-between w-[540px] border-b border-[#0A1425]">
                      <div>
                        <h3 className="text-lg font-bold">Khalid Al Dawsry</h3>
                        <p>Jeddah, Saudi</p>
                      </div>
                      <div>
                        <img
                          src={reviewMan}
                          alt=""
                          className="border-b-4 border-[#BD1f17] pb-2"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="w-1/2 bg-center bg-cover"
                  style={{ backgroundImage: `url(${video})` }}
                >
                  Right
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex">
                <div className="w-1/2  bg-warning p-20">
                  <div className=" h-[440px] mx-auto flex flex-col justify-between items-center">
                    <div>
                      <p className="text-xl">
                        <span className="text-4xl">“</span>You cant go wrong
                        with Chicken Mandi, <br /> I had it twice. The chicken
                        was cooked <br /> perfectly, juicy & soft (usually mandi{" "}
                        <br /> chicken is a bit dry). I would defiantly <br />{" "}
                        recommend it.
                      </p>
                    </div>
                    <div className="flex items-center justify-between w-[540px] border-b border-[#0A1425]">
                      <div>
                        <h3 className="text-lg font-bold">Khalid Al Dawsry</h3>
                        <p>Jeddah, Saudi</p>
                      </div>
                      <div>
                        <img
                          src={reviewMan}
                          alt=""
                          className="border-b-4 border-[#BD1f17] pb-2"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="w-1/2 bg-center bg-cover"
                  style={{ backgroundImage: `url(${video})` }}
                >
                  Right
                </div>
              </div>
            </SwiperSlide>
            
          </Swiper>
          <div className="absolute z-50 bottom-5">
            <img src={victor} alt="" />
          </div>
        </div>
      </section>
      <div className="absolute top-24">
        <img src={leftimg} alt="" />
      </div>
      <div className="absolute right-0 bottom-0">
        <img src={rightimg} alt="" />
      </div>
    </div>
  );
};

export default Review;
