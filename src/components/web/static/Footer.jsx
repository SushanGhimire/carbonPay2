import facebook from "../../../assets/images/homepage/facebook.svg";
import instagram from "../../../assets/images/homepage/instagram.svg";
import linkedin from "../../../assets/images/homepage/linkedin.svg";
import twitter from "../../../assets/images/homepage/twitter.svg";
import image from "../../../assets/images/homepage/forest.svg";
import { Link } from "react-router-dom";
function Footer() {
  const logos = [facebook, instagram, linkedin, twitter];
  const navlist = [
    {
      name: "Climate Change",
      to: "/climatechange",
    },
    {
      name: "Carbon Offsets?",
      to: "/carbonoffsets",
    },
    // {
    //   name: "About Us",
    //   to: "/about",
    // },
    {
      name: "For Merchants",
      to: "/formerchants",
    },
    {
      name: "For Consumers",
      to: "/forconsumers",
    },
    {
      name: "Carbon Neutral",
      to: "/carbonneutral",
    },
  ];
  return (
    <div className="w-full p-5 md:pt-10  bg-gray-100 flex-col font-rubik">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 border-b p-5">
        <div className="col-span-1 flex flex-col items-center justify-center">
          <div className="text-3xl font-bold mx-auto text-primary font-header">
            CarbonPay
          </div>
          <div className="text-center  sm:px-5 py-2 text-sm sm:text-base">
            Removing Carbon From Environment with Every Online Purchase
          </div>
          <div className="flex space-x-3 mx-auto py-3">
            {logos.map((logo) => {
              return (
                <div
                  key={logo}
                  className="rounded-full border-2 border-primary p-2 hover:bg-green-secondary transition-all duration-200 hover:border-black  cursor-pointer transform  bg-primary hover:-translate-y-1 hover:scale-125"
                >
                  <img src={logo} className="w-4 h-4 " alt="" />
                </div>
              );
            })}
          </div>
        </div>
        <div className="col-span-1 mx-auto flex flex-col items-center justify-center">
          <div className="text-2xl font-bold mx-auto text-primary font-header ">
            Quick Links
          </div>
          <div className="flex flex-col space-y-2 mt-3 space-y-2  text-sm sm:text-base">
            {navlist.map((list, index) => {
              const { name, to } = list;
              return (
                <Link
                  className="cursor-pointer hover:text-primary tracking-wider text-lg"
                  key={index}
                  to={to}
                >
                  {name}
                </Link>
              );
            })}
          </div>
        </div>

        <div className="col-span-1 mx-auto w-full h-full ">
          <img src={image} alt="" />
        </div>
      </div>
      <div className="text-center mx-auto px-5 lg:px-20 pt-5">
        All Right Reserve &copy; Carbon Pay
      </div>
    </div>
  );
}

export default Footer;
