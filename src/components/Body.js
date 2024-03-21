import RestrauntCard from "./RestaurantCard";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestauarnts, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  const handleClick = () => {
    const filtered = restaurantList.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurants(filtered);
  };

  useEffect(() => {
    fetchData()
  },[]);

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();

  console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)

    setRestaurantList(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    setFilteredRestaurants(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);

  }

  const onlineStatus = useOnlineStatus();

  if(onlineStatus === false){
    return <h1>Looks like you are offline!!! Please check your internet connection.</h1>
  }

  if (restaurantList.length === 0) {
    return <Shimmer />;
  }

  const { loggedInUser, setUserName } = useContext(UserContext);


  return (

    

    <div className="body">
      <div className="flex justify-start mb-2">
        <div className="m-6">
          <input className="p-1 m-1 border border-black-200"
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button className="bg-green-200 py-1 px-2 m-1 rounded-lg" onClick={handleClick}>Search</button>
        </div>
        <button
          onClick={() => {
            const filteredList = restaurantList.filter(
              (res) => res.info.avgRating > 4
            );
            setFilteredRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
        <input type="text" className="m-2 p-2 border border-black" value={loggedInUser} onChange={(e) => setUserName(e.target.value)} />
      </div>
      <div className="flex flex-wrap justify-between">
        {filteredRestauarnts.map((restaurant) => (
          <Link key={restaurant.info.id} to={"/restaurant/" + restaurant.info.id}><RestrauntCard resData={restaurant} /> </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
