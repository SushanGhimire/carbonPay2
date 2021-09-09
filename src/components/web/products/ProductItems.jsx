import React from "react";
import { baseUrl } from "../../authentication/authorization";
import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe("pk_live_51IJjYBIAj3oA61dKQGeGfJaXzImMsA7rGZY121lN7raRwEUCrPnCN2qLEFBlzsBlzf5Pjz5w5cHjuGahzGDk1pSG00hc0J1EQT");

function ProductItems({error, isLoaded, items}) {
 /*  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]); */

  const createCheckoutSession = async (id) => {
    const data = [
      {
        id: id,
        quantity: 1
      }
    ]
    return await fetch(`${baseUrl}/products/create-checkout-session/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ cartItems: data }),
    }).then(function (response) {
      return response.json();
    });
  };
  //let checkoutSessionId;
  const confirmPayment = async (id) => {
  await stripePromise.then((res) => {
      createCheckoutSession(id).then(function (response) {
        //console.log(response);
        window.location.href = response.redirect_uri
        // stripePromise
        //   .redirectToCheckout({
        //     sessionId: response.checkoutSessionId,
        //   })
        //   .then(function (result) {
        //     console.log(result);
        //   })
        //   .catch(function (err) {
        //     console.log(err);
        //   });
      });
    })
    
  }

  /* useEffect(() => {
    fetch(`${baseUrl}/products/list/`)
      .then(res => res.json())
      .then(
        (result) => {
          if(result.detail === "Unauthorized"){

          } else {
            setIsLoaded(true);
            setItems(result);
          }
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, []); */

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
                        ${item.price}
                      </div>
                    </div>
                    <div className="flex flex-col justify-between text-sm">
                      <div className="button-animation-outline px-6 rounded-full py-2" onClick={() => confirmPayment(item.id)}>
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