import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";

const ItemList = ({ items, dummy }) => {
    const dispatch = useDispatch();
    const handleAddItem = (item) => {
        dispatch(addItem(item));
    }
    return (
        <div>
            {items.map((item) => (
                <div key={item.card.info.id} className="p-2 my-4 border-gray-200 border-b-2 text-left flex justify-between">
                    <div className="w-9/12">
                        <div className="py-2">
                            <p className="font-bold">{item.card.info.name}</p>
                            <p className="font-bold">₹ {item.card.info.price / 100}</p>
                            <p className="my-2">❇️ {item.card.info.ratings.aggregatedRating.rating} ({item.card.info.ratings.aggregatedRating.ratingCountV2})</p>
                        </div>
                        <p className="text-xs">{item.card.info.description}</p>
                    </div>
                    <div className="w-3/12 p-4 bg-green-100 rounded-xl">
                        <img className="w-full" src={CDN_URL + item.card.info.imageId} />
                        <button 
                        className="absolute mx-5 bg-white rounded-lg px-10  py-2 border border-solid border-gray-200 text-green-500"
                        onClick={()=> handleAddItem(item)}
                        >
                            ADD
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ItemList;