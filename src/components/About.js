import React from "react";
import UserContext from "../utils/UserContext";

class About extends React.Component {

  constructor() {
    super()

    
  }

  render() {

    return (
      <div>
        <h1>About Us</h1>
        <h2>We are the number 1 Food Delivery App</h2>
        <div>
          <UserContext.Consumer>
            {({ loggedInUser }) => <h1 className="font-bold text-xl">{loggedInUser}</h1>}
          </UserContext.Consumer>
          </div>
      </div>
    );
    
  }
}



export default About;
