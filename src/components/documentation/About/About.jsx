import React from "react";

function About() {
  return (
    <div className="flex flex-col pt-10 px-7 md:px-16">
      {/* top header  */}
      <div className="text-2xl md:text-3xl font-semibold  text-primary pb-8">
        Welcome to CarbonPay Documentation
      </div>
      {/* about carbonpay  */}
      <div className="flex flex-col ">
        {/* about  */}
        <div className="flex flex-col  max-w-2xl space-y-2">
          <div className="text-xl md:text-2xl font-semibold text-primary">
            About the CarbonPay
          </div>
          {/* what is carbonpay  */}
          <div className="flex  text-sm md:text-base">
            CarbonPay is an application through which any user can help to
            remove carbon from the environment with every online purchase.
          </div>
        </div>
        {/* Fund Climate Change Efforts with Payment */}
        <div className="flex flex-col  max-w-2xl space-y-2">
          <div className="text-lg md:text-xl font-semibold mt-5 text-primary">
            Fund Climate Change Efforts with Payment
          </div>
          <div className="flex text-sm md:text-base">
            <div>
              With CarbonPay, you can direct a fraction of each payment to the
              best carbon removal non-profits in just a few clicks.
            </div>
          </div>
          <div className=" max-w-2xl   pl-4 ">
            <ol className="list-decimal space-y-1 text-sm md:text-base">
              <li>
                CarbonPay dynamically connects a small percentage of each
                transaction to a non-profit with the highest net carbon-removal
                efforts
              </li>
              <li>
                CarbonPay automatically sends a confirmation email to customers
                about what happened with their purchase.
              </li>
              <li>
                CarbonPay’s Carbon Neutral Purchase calculates the extra cost
                that will be required to offset the carbon from the climate on
                your use of that specific item.
              </li>
            </ol>
          </div>
        </div>
        {/* Fight Climate Change with each Payment */}
        <div className="flex flex-col  max-w-2xl space-y-2">
          <div className="text-lg md:text-xl font-semibold mt-5 text-primary">
            Fight Climate Change with each Payment
          </div>
          <div className="flex ">
            With CarbonPay, you donate a portion of each online payment to
            non-profits with the highest net-carbon removal efforts. CarbonPay
            lets customers know their purchase supported a good cause in their
            email receipt, allowing them to track their own contributions!
          </div>
          <div className=" flex  pl-4 ">
            <ol className="list-decimal space-y-1">
              <li>
                Funds are directed to non-profits with the highest net-carbon
                removal efforts
              </li>
              <li>
                CarbonPay lets the customer know their purchase supported a good
                cause in their email receipt
              </li>
            </ol>
          </div>
        </div>
        {/* Why Payment? */}
        <div className="flex flex-col  max-w-2xl space-y-2">
          <div className="text-lg md:text-xl font-semibold text-primary mt-5">
            Why Payment?
          </div>
          {/* what is carbonpay  */}
          <div className="flex  pb-20">
            Taking merchant selected % off of every internet transaction to fund
            the highest impact Climate Change efforts
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
