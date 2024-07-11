import React from "react";

class About extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h1 className="bg-[#8892b3] text-white w-full py-4 px-40 text-4xl">
          About Us
        </h1>
        <div>
          <div className="float-left mr-10 ml-40">
            <img
              className="w-[450px] h-[400px]"
              src="https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg"
              alt="food"
            />
          </div>
          <div className=" mt-20 pl-80 pt-20 mr-40">
            <h2 className="font-bold p-1 mx-4 text-3xl">
              EatSafe - Food made Safe
            </h2>
            <p className="p-1 mx-4 text-lg break-words">
              EatSafe is an online food ordering system which we have developed
              for restaurant owners and food lovers. Through EatSafe we are
              helping customers to discover the best restaurants in city. If you
              are restaurant owner, you can easily register your restaurant and
              upload restaurant menu to start receiving online orders through
              this fast growing portal without any cost.
            </p>
          </div>
        </div>
        <div className="bg-[#d0f4de]"></div>
      </div>
    );
  }
}

export default About;
