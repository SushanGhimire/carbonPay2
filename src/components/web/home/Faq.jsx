import { React, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function Faq() {
  //   const [height, setHeight] = useState("h-0");
  const [faqs, setfaqs] = useState([]);
  let Faqs = [
    {
      qst: "What on Earth is a carbon offset?",
      ans:
        "Carbon offsets are a practical and effective way to reduce the effects of climate change by funding renewable energy, forestry, or clean water projects. These projects reduce emissions of carbon dioxide or other greenhouse gases in order to compensate for emissions made elsewhere, like the emissions created from ordering something online. EcoCart calculates the emissions created from your online orders and donates the exact dollar amount required to reduce those emissions directly to these projects on your behalf.",
      isTrue: false,
      aos: "fade-up",
      time: "2000",
    },
    {
      qst: "How much does EcoCart cost?",
      ans:
        "A $0.15 transaction fee is included in the Eco Shipping Cost. There is no cost to you, the business owner – the app is free, and we do not charge for Eco Shipping calculations. If you choose to pay for offsets on behalf of your customers, you’ll be making a bigger impact and we’ll offer a reduced fee of $0.03 per transaction.",
      isTrue: false,
      aos: "fade-up",
      time: "2200",
    },
    {
      qst: "Will EcoCart interfere with my current checkout process?",
      ans:
        "No, in fact EcoCart works to improve conversion. EcoCart exists within the cart and not the checkout process. Your customers will see that they have the option to make their order carbon neutral while browsing their cart, improving the likelihood that they will continue to checkout and complete their order when they see your brand’s values are aligned with their own.",
      isTrue: false,
      aos: "fade-up",
      time: "2400",
    },
    {
      qst: "Can I customize how EcoCart looks in my shop?",
      ans:
        "Of course! EcoCart is fully customizable, putting in control of the look and feel of the experience so you can properly reflect your brand’s values. Or you can simply select our default view that tells the story of your brand’s contribution to the planet in an easily digestible format.",
      isTrue: false,
      aos: "fade-up",
      time: "2600",
    },
  ];
  useState(() => {
    AOS.init();
    setfaqs(Faqs);
  }, []);

  const handleFaq = (index) => {
    Faqs[index].isTrue || faqs[index].isTrue
      ? (Faqs[index].isTrue = false)
      : (Faqs[index].isTrue = true);

    setfaqs(Faqs);
  };

  return (
    <div className="w-full flex flex-col px-10 lg:px-20 py-20">
      <div className="text-xl sm:text-4xl text-center mt-10 font-header font-bold">
        FAQ
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
                  className="text-3xl hover:text-primary transition-all duration-300 ease-linear cursor-pointer font-bold flex justify-between"
                  onClick={() => {
                    handleFaq(index);
                  }}
                >
                  <div> {qst}</div>
                  <div>
                    <svg
                      className="w-6 h-6"
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
                  className={`text-lg text-gray-600 transition-all duration-300 ease-linear  overflow-hidden ${
                    isTrue ? "h-36" : "h-0"
                  }`}
                >
                  {ans}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Faq;
