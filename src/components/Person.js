import React from "react";
import "./../App.css";

class Person extends React.Component {
  render() {
    return (
      <div className="tc bg-light-green dib br3 pa1 ma2 grow bw2 shadow-5">
        <img
          className="person-image"
          src={
            this.props.person.image
              ? this.props.image
              : "https://robohash.org/1?100x100"
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
