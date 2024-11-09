import { BsClock } from "react-icons/bs";
import footer from "../../assets/footer.png";
import { FaLinkedin, FaPhoneVolume, FaSquareXTwitter } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { FaFacebook, FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      className="relative h-full bg-center bg-cover bg-blend-overlay "
      style={{ backgroundImage: `url(${footer})` }}
    >
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <div>
        <section className="text-white z-10 relative lg:w-[1320px] mx-auto py-28">
          <div className="my-28">
            <h1 className="text-[40px] lg:text-5xl font-bold text-center uppercase">
              We ready to have you the best dining experiences
            </h1>
          </div>
          <div className="flex justify-between items-center gap-24 flex-col lg:flex-row">
            <div className="flex flex-col justify-center items-center">
              <BsClock className="text-[#FEBF00]" size={25} /> <br />
              <h1 className="uppercase font-bold text-2xl">
                Opening hours
              </h1>{" "}
              <br />
              <p>
                Monday - Sunday <br />
                9:00 AM to 11:30 PM
              </p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <FaPhoneVolume className="text-[#FEBF00]" size={25} /> <br />
              <h1 className="uppercase font-bold text-2xl">
                LET{"'"}S TALK
              </h1>{" "}
              <br />
              <p>
                Phone: 1-800-222-4545 <br />
                Fax: 1-800-222-454
              </p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <CiMail className="text-[#FEBF00]" size={25} /> <br />
              <h1 className="uppercase font-bold text-2xl">
                BOOK A TABLE
              </h1>{" "}
              <br />
              <p>
                Email: demo@website.com <br />
                Support: support@website.com
              </p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <IoLocationOutline className="text-[#FEBF00]" size={25} /> <br />
              <h1 className="uppercase font-bold text-2xl">Our Address</h1>{" "}
              <br />
              <p>
                123 Stree New York City , <br /> United States Of America.
              </p>
            </div>
          </div>
          <div className="pt-20 mt-20">
            <div className="flex justify-center items-center gap-4">
            <FaFacebook className="border p-2 rounded-full" size={50}/>
            <FaSquareXTwitter className="border p-2 rounded-full" size={50}/>
            <FaInstagramSquare className="border p-2 rounded-full" size={50}/>
            <FaLinkedin className="border p-2 rounded-full" size={50}/>
            </div>
            <p className="text-center text-xl">© 2023 All Rights Reserved </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Footer;
