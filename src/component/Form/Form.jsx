import { MdDateRange } from "react-icons/md";
import bg from "../../assets/rsz_1sec4bgi.png";

import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Form = () => {

    const handleBook = (e) =>{
        e.preventDefault();
        const name = e.target.name.value;
        toast(`"${name}", Your booking is Completed`);
        // console.log(name)
        e.target.value='';
    }


  return (
    <div id="book"
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

          <form onSubmit={handleBook}>
            {/* Form */}
            <div className="flex flex-col lg:flex-row gap-4  ">
              <input
                type="text"
                name="name"
                placeholder="Your Name*"
                className="input border border-white rounded-none focus:ring focus:ring-white input-bordered w-full max-w-xs mx-2 bg-transparent"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="input input-bordered w-full max-w-xs border border-white rounded-none focus:ring focus:ring-white bg-transparent"
              />
            </div>
            {/* demo */}
            <div className="flex flex-col lg:flex-row gap-4 mt-4 relative">
              <input
                type="text"
                name="date"
                placeholder="Reservation Date"
                className="input border border-white rounded-none focus:ring focus:ring-white input-bordered w-full max-w-xs mx-2 bg-transparent"
                required
              />
              <span className="absolute top-3 left-72"><MdDateRange size={25}/></span>
              <input
                type="number"
                name="number"
                placeholder="Total People"
                className="input input-bordered w-full max-w-xs border border-white rounded-none focus:ring focus:ring-white bg-transparent"
              />
            </div>
            
            <div className="mt-4 ml-2">
            <textarea name="message" className="w-[330px] lg:w-1/2 border p-2 border-white rounded-none focus:ring focus:ring-white bg-transparent " placeholder="Message" rows="4"></textarea>
            </div>
            {/* test */}
            <div className="">
            <button type="submit" className="btn px-8 btn-warning mt-5">Book Now</button>
            </div>
          </form>
        </div>
      </section>
      <ToastContainer theme="dark"/>
    </div>
  );
};

export default Form;
