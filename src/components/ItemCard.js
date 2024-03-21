import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemCard = ({ ItemData }) => {

    const dispatch = useDispatch();

    const handleAdd = (item) => {
        dispatch(addItem(item))
    }

    return (
        <div>
            {ItemData.map(item => (
                    <div className="text-left p-2 m-2 border-b-2 border-gray-200"> 
                    <div className="flex justify-between"> 
                    <div className="w-9/12">
                    <h3 className="font-bold pb-3">{item.card.info.name} - Rs.{item.card.info.price / 100}</h3> 
                    <p className="text-gray-500">{item.card.info.description}</p>  
                    </div>
                    <div className="w-3/12">
                        <diV className="absolute px-1">
                          <button className="bg-black text-white p-1" onClick={() => handleAdd(item) }>Add+</button>
                        </diV>
                        
                        <img className="w-44 mx-1" src={CDN_URL + item.card.info.imageId}></img>
                    </div>
                    </div>
                    </div>
                    
            ))}
        </div>
    )
}

export default ItemCard;