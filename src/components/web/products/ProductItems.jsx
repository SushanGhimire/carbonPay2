import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe(
  "pk_test_51HmQ6yDvx1549lk5zlQu2UTcarzAgDT2SIP0BLJLWGWuxCvJ4LjtzGePwEVlR4tFRerJQ0wvxlgVsSqRP0ntSbjz00eVVcHLkw"
);

function ProductItems() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);


  useEffect(() => {
      createCheckoutSession();
      // eslint-disable-next-line
  }, []);

  const createCheckoutSession = async () => {
    const data = [
      {
        id: items.id,
        quantity: 1
      }
    ]
    return await fetch("https://api.joincarbonpay.com/products/create-checkout-session/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({ cartItems: data }),
    }).then(function (response) {
      return response.json();
    });
  };
  //let checkoutSessionId;
  const confirmPayment = async () => {
  // await stripePromise.then((res) => {
  //     createCheckoutSession().then(function (response) {
  //       window.location.href = response.redirect_uri
  //       // stripePromise
  //       //   .redirectToCheckout({
  //       //     sessionId: response.checkoutSessionId,
  //       //   })
  //       //   .then(function (result) {
  //       //     console.log(result);
  //       //   })
  //       //   .catch(function (err) {
  //       //     console.log(err);
  //       //   });
  //     });
  //   })
    
  }

  useEffect(() => {
    fetch("https://api.joincarbonpay.com/products/list/")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  console.log(items);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <ul className="grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {items.map((item, index) => (
          <li key={index} className="overflow-hidden shadow-lg rounded-lg h-90 max-w-xs m-auto">
        <div className="w-full block h-full">
					<img
                  alt=""
                  src={item.image}
                  className="max-h-44 w-full object-cover"
					/>
                <div className="bg-white w-full p-4">
                  <div className="text-primary link">{item.category}</div>
                  <div className="text-secondary heading-5 mb-2">
                    {item.name}
                  </div>
                  <div className="caption text-text line-clamp-2">
                    {item.description}
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <div className="block relative">
                      <div className="text-secondary font-semibold heading-4">
                        {item.price}
                      </div>
                    </div>
                    <div className="flex flex-col justify-between text-sm">
                      <div className="button-animation-outline px-6 rounded-full py-2" onClick={confirmPayment}>
                        Buy Now
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </li>

        ))}
      </ul>
    );
  }
}

export default ProductItems