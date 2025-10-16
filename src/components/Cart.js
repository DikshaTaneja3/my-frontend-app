import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart());
    }
    return (
        <div className="text-center m-4 p-4">
            <h1 className="font-bold text-2xl">Cart</h1>
            <div className="w-6/12 m-auto">
                <button className="p-2 m-2 bg-black rounded-lg text-white cursor-pointer" onClick={handleClearCart}>
                    Clear Cart
                </button>
                {cartItems.length === 0 && (
                    <h1>Your cart is empty. Add items to the cart</h1>
                )}
                <ItemList items={cartItems}/>
            </div>
        </div>
    )
}

export default Cart;