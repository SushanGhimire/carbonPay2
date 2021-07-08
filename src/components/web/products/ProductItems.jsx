import React from "react";

const ProductItems = ({ data }) => {
  return (
    <>
      <div className="grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className="overflow-hidden shadow-lg rounded-lg h-90 max-w-xs m-auto"
            >
              <div className="w-full block h-full">
                <img
                  alt=""
                  src={item.image}
                  className="max-h-44 w-full object-cover"
                />
                <div className="bg-white w-full p-4">
                  <div className="text-primary link">{item.brand}</div>
                  <div className="text-secondary heading-5 mb-2">
                    {item.product_name}
                  </div>
                  <div className="caption text-text line-clamp-2">
                    {item.details}
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
            </div>
          );
        })}
      </div>

      <div className="flex justify-center pt-6 md:pt-10">
        <button className="button-animation px-6 rounded-full py-2" type="button">
          Load More
        </button>
      </div>
    </>
  );
};

export default ProductItems;
