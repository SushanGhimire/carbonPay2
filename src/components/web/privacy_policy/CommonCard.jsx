import React from "react";

function CommonCard({ cards }) {
  return (
    <div>
      {cards.map((card, index) => {
        const { header, infos } = card;
        return (
          <div className="flex flex-col space-y-3" key={index}>
            <div className="text-primary text-2xl font-semibold">{header}</div>
            {infos.map((i, index) => {
              const { info } = i;
              return (
                <div className="text-xs sm:text-sm lg:text-lg" key={index}>
                  {info}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default CommonCard;
