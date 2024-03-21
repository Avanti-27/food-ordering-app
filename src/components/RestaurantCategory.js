import { useState } from "react";
import ItemCard from "./ItemCard";

const RestaurantCategory = ({ data,showItems,setShowIndex }) => {

    

    const handleClick = () => {
        setShowIndex();
    }


    return (
        <div className="text-center w-6/12 bg-gray-100 p-3 mx-auto my-5 shadow-lg">
            <div className="flex justify-between cursor-pointer" onClick={handleClick} >
            <span className="font-bold text-xl">{data.title} ({data.itemCards.length})</span>
             <span>⬇️</span>
            </div>
            <div>
               {showItems && <ItemCard ItemData={data.itemCards} />} 
            </div>
           
        </div>
    )
}


export default RestaurantCategory;