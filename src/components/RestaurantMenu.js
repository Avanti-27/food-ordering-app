import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams  } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {

  const [resInfo, setResInfo] = useState(null);
  const [showIndex, setShowIndex] = useState(0);
  

  const { resId } = useParams();

  

  useEffect(() => {
    fetchMenu()
  },[]);

  const fetchMenu = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=" +resId);

    const json = await data.json();
    
    setResInfo(json.data);
    
  }

   //if(!Object.entries(resInfo).length>0) return <Shimmer />;

   if(resInfo === null) return <Shimmer />

   const { name, cuisines, costForTwoMessage } = resInfo?.cards?.[0]?.card?.card?.info;


  //const {itemCards} = resInfo?.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;

 //console.log(resInfo?.cards[2].groupedCard.cardGroupMap.REGULAR.cards);

 const categories = resInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards.filter(c => c.card.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
 console.log(categories);

  return (

    <div className="text-center">
      <h1 className="text-center text-2xl font-bold ">{name}</h1>
      <p className="text-center font-bold text-sm p-2 m-1" >{cuisines.join(",")} - {costForTwoMessage}</p>
        {categories.map((category, index) => (
          <RestaurantCategory data={category.card.card} showItems={index === showIndex && true} 
            setShowIndex={() => setShowIndex(index)}
          />
        ))}
    </div>
  );
};

export default RestaurantMenu;
