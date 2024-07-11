import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";
import { useEffect, useState } from "react";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const [showIndex, setShowIndex] = useState(null);
  const { resId } = useParams();

  const dummy = "Dummy Data";

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=" +
        resId
    );

    const json = await data.json();

    setResInfo(json?.data);
    console.log(json.data);
  };

  if (resInfo === null) return <Shimmer />;

  let name, cuisines, costForTwoMessage;

  if (resInfo?.cards?.[2]?.card?.card?.info) {
    const { info } = resInfo.cards[2].card.card;
    name = info.name;
    cuisines = info.cuisines;
    costForTwoMessage = info.costForTwoMessage;
  } else {
    // Handle the case where resInfo or its nested properties are null or undefined
    // You might want to set default values or handle it differently based on your application logic
    name = "KFC";
    cuisines = [];
    costForTwoMessage = "200";
  }

  // const { itemCards } =
  //   resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  //console.log(categories);

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {/* categories accordions */}
      {categories.map((category, index) => (
        // controlled component
        <RestaurantCategory
          key={category?.card?.card.title}
          data={category?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
          dummy={dummy}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
