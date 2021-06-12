import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import img from "../../../assets/images/neutral/neutral.png";
function Faq() {
  //   const [height, setHeight] = useState("h-0");
  const [faqs, setfaqs] = useState([]);
  const count = "1";
  let Faqs = [
    {
      qst: "What on Earth is a carbon offset?",
      ans: "Carbon offsets are a practical and effective way to reduce the effects of climate change by funding renewable energy, forestry, or clean water projects. These projects reduce emissions of carbon dioxide or other greenhouse gases in order to compensate for emissions made elsewhere, like the emissions created from ordering something online. CarbonPay calculates the emissions created from your online orders and donates the exact dollar amount required to reduce those emissions directly to these projects on your behalf.",
      isTrue: false,
      aos: "fade-up",
      time: "2000",
    },
    {
      qst: "What do you mean “carbon neutral”?",
      ans: "When we say orders will be “carbon neutral” (“net zero” is another term you’ll hear), that means that we will eliminate, capture, or otherwise mitigate all of the carbon emissions created from making your company's products and shipping them to your customer's door.",
      isTrue: false,
      aos: "fade-up",
      time: "2000",
    },
    {
      qst: "How much does CarbonPay cost?",
      ans: "A $0.15 transaction fee is included in the Eco Shipping Cost. There is no cost to you, the business owner – the app is free, and we do not charge for Eco Shipping calculations. If you choose to pay for offsets on behalf of your customers, you’ll be making a bigger impact and we’ll offer a reduced fee of $0.03 per transaction.",
      isTrue: false,
      aos: "fade-up",
      time: "2200",
    },
    {
      qst: "What does CarbonPay do with the collected funds from the merchant??",
      ans: "CarbonPay collects free from Merchant and donates to non-profit with highest net carbon capiture efforts.",
      isTrue: false,
      aos: "fade-up",
      time: "2200",
    },
    {
      qst: "Will CarbonPay interfere with my current checkout process?",
      ans: "No, in fact CarbonPay works to improve conversion. CarbonPay exists within the cart and not the checkout process. Your customers will see that they have the option to make their order carbon neutral while browsing their cart, improving the likelihood that they will continue to checkout and complete their order when they see your brand’s values are aligned with their own.",
      isTrue: false,
      aos: "fade-up",
      time: "2400",
    },
    {
      qst: "Can I customize how CarbonPay looks in my shop?",
      ans: "Of course! CarbonPay is fully customizable, putting in control of the look and feel of the experience so you can properly reflect your brand’s values. Or you can simply select our default view that tells the story of your brand’s contribution to the planet in an easily digestible format.",
      isTrue: false,
      aos: "fade-up",
      time: "2600",
    },
  ];
  useEffect(() => {
    AOS.init();
    setfaqs(Faqs);
    // eslint-disable-next-line
  }, [count]);

  const handleFaq = (index) => {
    Faqs[index].isTrue || faqs[index].isTrue
      ? (Faqs[index].isTrue = false)
      : (Faqs[index].isTrue = true);

    setfaqs(Faqs);
  };

  return (
    <>
      <div className="py-10 px-20">
        <div className="flex justify-center items-center">
          <div className="flex-1 bg-primary h-0.5 riunded-full"></div>
          <div className="px-5 text-3xl font-semibold text-primary">
            Questions?
          </div>
          <div className="flex-1 bg-primary h-0.5 riunded-full"></div>
        </div>
        <div className="flex flex-col mt-20">
          {Array.isArray(faqs) &&
            faqs.map((faq, index) => {
              const { qst, ans, isTrue, aos, time } = faq;
              return (
                <div
                  className="flex flex-col border-t p-5"
                  key={index}
                  data-aos={aos}
                  data-aos-anchor-placement="top-bottom"
                  data-aos-duration={time}
                >
                  <div
                    className=" hover:text-primary transition-all duration-300 ease-linear cursor-pointer font-bold flex justify-between"
                    onClick={() => {
                      handleFaq(index);
                    }}
                  >
                    <div className="text-lg lg:text-3xl font-header">
                      {" "}
                      {qst}
                    </div>
                    <div>
                      <svg
                        className={`w-6 h-6 transform transition-all duration-300 ease-in-out ${
                          isTrue ? "rotate-180" : "rotate-0"
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                  <div
                    className={`text-xs sm:text-sm lg:text-lg text-gray-600 transition-all duration-300 ease-linear  overflow-hidden ${
                      isTrue ? "h-64 sm:h-44 md:h-32 lg:h-40 xl:h-36" : "h-0"
                    }`}
                  >
                    {ans}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <div
        className="flex items-center mt-20 py-10 px-20"
        style={{
          backgroundColor: "#19d668",
          backgroundImage: `linear-gradient(0deg, #9effc6 9%, #befbd9 33%, #e4ffe8 66%, #ffffff 100%)`,
        }}
      >
        {/* left side  */}
        <div
          className="md:w-1/2  flex flex-col space-y-4 text-center items-center justify-center z-20"
          data-aos="fade-right"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="1500"
        >
          <div className="font-bold text-4xl  mt-10 md:mt-0">
            Get started with
          </div>
          <div className="text-base md:text-lg font-semibold text-gray-600 font-rubik">
            A more sustainable shopping experience for your customers, at no
            cost to you. Get set up in minutes.
          </div>
          <div>
            <Link to="/login" className="button-animation">
              <div className="animation-text px-6 rounded-full py-2">
                Start Now
              </div>
              <div className="animation-bg"></div>
            </Link>
          </div>
        </div>
        <div
          className="flex-1 mt-5 md:mt-0 z-20 flex justify-center items-center bg-no-repeat bg-center "
          data-aos="fade-left"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="1500"
        >
          <img src={img} className="  object-cover" alt="" />
        </div>
      </div>
    </>
  );
}

export default Faq;
