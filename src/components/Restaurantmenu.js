import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
    const { resId } = useParams();
    const resInfo = useRestaurantMenu(resId);
    const [ showIndex, setShowIndex ] = useState(0);
    // props drilling example
    const dummy = "Dummy Data";

    if(resInfo === null) return <Shimmer/>;

    const {name, costForTwoMessage, cuisines} = resInfo?.cards[2]?.card?.card?.info

    const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card
    
    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) => c.card?.["card"]?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
    console.log(categories)

    return (
        <div className="menu text-center">
            <h1 className="font-bold my-4 text-lg">{name}</h1>
            <p className="font-bold text-lg">{cuisines.join(", ")} - {costForTwoMessage}</p>
            {/* <ul>
                {itemCards.map(item => (
                    <li key={item.card.info.id}>
                        {item.card.info.name} -{" "}
                        {item.card.info.price/100 || item.card.info.defaultPrice/100}
                    </li>
                ))}
            </ul> */}
            {categories.map((category, index) => (
                <RestaurantCategory key={category.card.card.categoryId} data={category?.card?.card} 
                showItems={index === showIndex ? true : false}
                setShowIndex={()=> setShowIndex(index)}
                dummy={dummy}
                />
            ))}
        </div>
    )
}

export default RestaurantMenu;