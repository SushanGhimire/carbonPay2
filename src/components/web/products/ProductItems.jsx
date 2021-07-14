import React, { useEffect, useState } from "react";

function ProductItems() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

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

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <ul className="grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {items.map(item => (
          <li key={item.id} className="overflow-hidden shadow-lg rounded-lg h-90 max-w-xs m-auto">
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
                      <div className="button-animation-outline px-6 rounded-full py-2">
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