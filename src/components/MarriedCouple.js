import React from "react";
import Person from "./Person";
import { colors } from "./../input_data";

class MarriedCouple extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div
        className="tc dib br3 pa1 ma2 bw2 shadow-5"
        style={{ background: colors[this.props.colorIndex] }}
      >
        {this.props.persons.map((person) => {
          return <Person person={person} />;
        })}
      </div>
    );
  }
}

export default MarriedCouple;
