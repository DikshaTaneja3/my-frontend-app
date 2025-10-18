import { useContext } from "react";
import { CDN_URL } from "../utils/constants";   
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
    const { resData } = props;
    console.log(resData);
    const { 
        name, 
        cuisines, 
        avgRating, 
        costForTwo, 
        deliveryTime,
        sla, 
        cloudinaryImageId 
    } = resData?.card?.card?.info;
    const { loggedInUser } = useContext(UserContext)
    return (
        <div data-testid="resCard" className="m-4 p-4 w-[300px] rounded-lg bg-white drop-shadow-md hover:bg-gray-700">
            <img className="res-logo w-full h-32 rounded-lg" alt="res-logo" src={ CDN_URL + cloudinaryImageId }/>
            <div className="res-content wrap-break-word">
                <h3 className="font-bold py-2 text-lg">{name}</h3>
                <h4>{cuisines.join(",")}</h4>
                <h4>{avgRating} stars</h4>
                <h4>{costForTwo}</h4>
                <h4>{sla.deliveryTime} minutes</h4>
                <h4>User:- {loggedInUser}</h4>
            </div>
        </div>
    )
}

export const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
        // const { resData } = props
        return (
            <div>
                <label className="absolute bg-black text-white m-2 p-2 rounded-lg z-1">Promoted</label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
}

export default RestaurantCard;