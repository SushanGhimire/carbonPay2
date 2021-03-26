import facebook from "../../assets/images/homepage/facebook.svg";
import instagram from "../../assets/images/homepage/instagram.svg";
import linkedin from "../../assets/images/homepage/linkedin.svg";
import twitter from "../../assets/images/homepage/twitter.svg";
function Footer() {
  const logos = [facebook, instagram, linkedin, twitter];
  return (
    <div className="w-full bg-black p-5 md:pt-10 mt-20 text-white flex-col">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 border-b p-5">
        <div className="col-span-1 flex flex-col">
          <div className="text-3xl font-bold mx-auto text-primary">
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
                  className="rounded-full border-2 p-2 hover:bg-green-secondary transition-all duration-200 hover:bg-primary cursor-pointer transform hover:-translate-y-1 hover:scale-125"
                >
                  <img src={logo} className="w-4 h-4" alt="" />
                </div>
              );
            })}
          </div>
        </div>
        <div className="col-span-1 mx-auto ">
          <div className="text-2xl font-bold mx-auto text-primary">
            CarbonPay
          </div>
          <ul className="mt-3 space-y-2 text-center text-sm sm:text-base">
            <li>CarbonPay 1</li>
            <li>CarbonPay 2</li>
            <li>CarbonPay 3</li>
            <li>CarbonPay 4</li>
            <li>CarbonPay 5</li>
          </ul>
        </div>
        <div className="col-span-1 mx-auto">
          <div className="text-2xl font-bold mx-auto text-primary">
            Developers
          </div>
          <ul className="mt-3 space-y-2 text-center  text-sm sm:text-base">
            <li>Developers 1</li>
            <li>Developers 2</li>
            <li>Developers 3</li>
            <li>Developers 4</li>
            <li>Developers 5</li>
          </ul>
        </div>
      </div>
      <div className="text-center mx-auto px-5 lg:px-20 pt-5">
        All Right Reserve &copy; Carbon Pay
      </div>
    </div>
  );
}

export default Footer;
