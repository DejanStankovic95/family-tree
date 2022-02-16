import React from "react";
import Person from "./Person";

class MarriedCouple extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="tc bg-green dib br3 pa1 ma2 bw2 shadow-5">
        {this.props.persons.map((person) => {
          return <Person person={person} />;
        })}
      </div>
    );
  }
}

export default MarriedCouple;
