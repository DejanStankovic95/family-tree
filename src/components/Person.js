import React from "react";
import "./../App.css";

class Person extends React.Component {
  render() {
    return (
      <div
        className="tc dib br4 pa1 ma2 grow bw2 shadow-5"
        style={{ background: "#FFcf60" }}
      >
        <img
          className="person-image"
          src={
            this.props.person.image
              ? this.props.person.image
              : this.props.person.gender === "F"
              ? "https://robohash.org/4?set=set5"
              : "https://robohash.org/3?set=set5"
          }
          alt="person"
        />
        <p>
          {this.props.person.name} {this.props.person.surname}
          <br />({this.props.person.born} - {this.props.person.dead})
        </p>
      </div>
    );
  }
}

export default Person;
