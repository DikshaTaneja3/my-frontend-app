import { CDN_URL } from "../utils/constants";   

const RestaurantCard = (props) => {
    console.log(props)
    const { resData } = props;
    const { 
        name, 
        cuisines, 
        avgRating, 
        costForTwo, 
        deliveryTime,
        sla, 
        cloudinaryImageId 
    } = resData?.card?.card?.info;
    return (
        <div className="res-card">
            <img className="res-logo" alt="res-logo" src={ CDN_URL + cloudinaryImageId }/>
            <div className="res-content">
                <h3>{name}</h3>
                <h4>{cuisines.join(",")}</h4>
                <h4>{avgRating} stars</h4>
                <h4>{costForTwo}</h4>
                <h4>{sla.deliveryTime} minutes</h4>
            </div>
        </div>
    )
}
export default RestaurantCard;