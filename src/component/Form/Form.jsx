import { MdDateRange } from "react-icons/md";
import bg from "../../assets/rsz_1sec4bgi.png";

const Form = () => {
  return (
    <div
      className="h-[788px] bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <section className="lg:w-[1320px] mx-auto text-white py-28 px-3">
        <div>
          <div>
            <p className="flex items-center gap-2 lg:text-xl font-bold text-[#BD1F17]">
              <span className="border-2  h-3  w-3 bg-[#BD1F17] inline-block">
                {" "}
              </span>{" "}
              Book Now
            </p>
            <h1 className="font-bold text-[40px] lg:text-6xl">BOOK YOUR TABLE</h1>
            <p className="my-8 lg:w-full w-[390px]">
              Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu
              leo <br /> molestie vel, ornare non id blandit netus.
            </p>
          </div>

          <div>
            {/* Form */}
            <div className="flex flex-col lg:flex-row gap-4  ">
              <input
                type="text"
                placeholder="Your Name*"
                className="input border border-white rounded-none focus:ring focus:ring-white input-bordered w-full max-w-xs mx-2 bg-transparent"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="input input-bordered w-full max-w-xs border border-white rounded-none focus:ring focus:ring-white bg-transparent"
              />
            </div>
            {/* demo */}
            <div className="flex flex-col lg:flex-row gap-4 mt-4 relative">
              <input
                type="text"
                placeholder="Reservation Date"
                className="input border border-white rounded-none focus:ring focus:ring-white input-bordered w-full max-w-xs mx-2 bg-transparent"
                required
              />
              <span className="absolute top-3 left-72"><MdDateRange size={25}/></span>
              <input
                type="number"
                placeholder="Total People"
                className="input input-bordered w-full max-w-xs border border-white rounded-none focus:ring focus:ring-white bg-transparent"
              />
            </div>
            {/* <div className="mt-4 flex flex-col lg:flex-row gap-4 ">
              <div>
              <label htmlFor="" className="relative ">
              <input
                type="text"
                placeholder="Reservation Date"
                className="input input-bordered w-full max-w-xs border border-white rounded-none focus:ring focus:ring-white bg-transparent"
              />
              <span className="absolute top-0 right-4"><MdDateRange size={25}/></span>
              </label>
              </div>
              <input
                type="number"
                placeholder="Total People"
                className="input input-bordered w-full max-w-xs border border-white rounded-none focus:ring focus:ring-white bg-transparent "
              />
            </div> */}
            <div className="mt-4 ml-2">
            <textarea className="w-[330px] lg:w-1/2 border p-2 border-white rounded-none focus:ring focus:ring-white bg-transparent " placeholder="Message" rows="4"></textarea>
            </div>
            {/* test */}
            <div className="">
            <button className="btn px-8 btn-warning mt-5">Book Now</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Form;
