import React from "react";
import MarriedCouple from "./MarriedCouple";
import { colors } from "./../input_data";

const CouplePanel = ({ children, colorIndex }) => {
  return (
    <div className="flex">
      {children.map((childItem, i) => {
        return (
          <div
            className="outline ma2 tc br4"
            style={{ background: colors[colorIndex] }}
          >
            <MarriedCouple
              persons={childItem.couple}
              colorIndex={(colorIndex + 1) % colors.length}
            />
            <CouplePanel
              children={childItem.children}
              colorIndex={(colorIndex + 1) % colors.length}
            />
          </div>
        );
      })}
    </div>
  );
};

export default CouplePanel;
