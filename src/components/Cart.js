import { useDispatch, useSelector } from "react-redux";
import ItemCard from "./ItemCard";
import { clearCart } from "../utils/cartSlice";



const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items)
    const dispatch = useDispatch();

    const handleClear = () => {
        dispatch(clearCart())
    }

    return(
        <div className="text-center m-4 p-4">
            <h1 className="font-bold text-2xl">Cart</h1>
            <button className="m-2 p-2 bg-black text-white rounded-md" onClick={handleClear}>Clear cart</button>
            <div className="w-6/12 m-auto">
                <ItemCard ItemData={cartItems} />
            </div>
            
        </div>
    )
}

export default Cart;