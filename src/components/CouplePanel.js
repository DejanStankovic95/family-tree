import React from "react";
import MarriedCouple from "./MarriedCouple";

const CouplePanel = ({ children }) => {
  return (
    <div className="flex">
      {children.map((childItem, i) => {
        return (
          <div className="outline ma2 tc">
            <MarriedCouple persons={childItem.couple} />
            <CouplePanel children={childItem.children} />
          </div>
        );
      })}
    </div>
  );
};

export default CouplePanel;
