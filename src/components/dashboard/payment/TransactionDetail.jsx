import React from "react";

function TransactionDetail({ showTransactionDetail }) {
  return (
    <div className="w-full h-full absolute top-0 left-0">
      <div className="w-full h-full relative">
        <div className="w-full h-full bg-black absolute top-0 left-0 opacity-90 flex justify-center items-center">
          <div className="w-full max-w-lg mx-auto bg-white p-10">
            Transaction Detail Here
            <button onClick={showTransactionDetail} className="ml-10">
              close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TransactionDetail;
