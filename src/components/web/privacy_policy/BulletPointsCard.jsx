import React from "react";

function BulletPointsCard({ header, subheader, points }) {
  return (
    <div>
      <div className="flex flex-col space-y-3">
        <div className="text-primary text-2xl font-semibold">{header}</div>
        <div>{subheader}</div>
        <ul className="list-disc text-gray-700 px-16">
          {points.map((i, index) => {
            const { point } = i;
            return (
              <li className="" key={index}>
                {point}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default BulletPointsCard;
