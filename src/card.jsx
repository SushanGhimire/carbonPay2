import React from "react";

function card() {
  return (
    <div class="w-96 h-72 rounded-lg shadow-lg flex flex-col mx-auto p-5 border mt-10">
      <div class="mx-auto text-3xl font-medium italic" style="color:#057D3A">
        CarbonPay
      </div>
      <div class="mt-3 mx-auto text-lg font-semibold text-gray-600">
        Thanks for your order
      </div>
      <div class="border-b border-gray-200 py-1 flex items-center text-gray-500 mt-2">
        <span>Your Climate Impact</span>
        <div>
          <img
            src="https://image.flaticon.com/icons/png/512/188/188333.png"
            class="w-5 ml-1"
            alt=""
          />
        </div>
      </div>
      <div class="flex mt-5 space-x-4 items-center text-gray-600">
        <div class="">
          <img
            src="https://i.pinimg.com/originals/4a/ec/ab/4aecaba5f9ff69c67aa953d1663f819e.jpg"
            class="w-24"
            alt=""
          />
        </div>
        <div class="flex-1 p-2 rounded shadow">
          You contributed to reduce
          <span class="font-semibold" style="color:#057D3A">
            {" "}
            96lbs
          </span>{" "}
          of carbon emission by shopping with CarbonPay
        </div>
      </div>
    </div>
  );
}

export default card;
