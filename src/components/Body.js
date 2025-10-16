import RestaurantCard, {withPromotedLabel} from "./RestaurantCard"
import resList from "../utils/mockData";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
    const [ listOfRestaurants, setListOfRestaurants ] = useState([]);
    const [ filteredRestaurants, setFilteredRestaurants ] = useState([]);
    const [ searchText, setSearchText ] = useState("");
    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
    const { loggedInUser, setUserName } = useContext(UserContext);

    useEffect(() => {
        fetchData();  
    }, []);

    const fetchData = async () => {
        // const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5003489&lng=77.03474849999999&collection=83631&tags=layout_CCS_Pizza&sortBy=&filters=&type=rcv2&offset=0&page_type=null");
        const json = await data.json();
        console.log(json);
        const newArray = json?.data?.cards.slice(3);
        setListOfRestaurants(newArray);
        setFilteredRestaurants(newArray);
        console.log(newArray);
    }

    const onlineStatus = useOnlineStatus();
    if(onlineStatus === false)
        return (
            <h1>Looks Like you are offline!!! Please check your connection</h1>
        )

    return listOfRestaurants.length === 0 ? (
        <Shimmer />
    )  : (
        <div className="body">
            <div className="filter flex">
                <div className="search m-4 p-4">
                    <input 
                        type="text" 
                        className="border border-solid border-black" 
                        value={searchText}
                        onChange={(e)=> {
                            setSearchText(e.target.value)
                        }}
                    />
                    <button
                        className="px-4 py-2 bg-black text-white rounded-lg m-4" 
                        onClick={()=> {
                        const searchFilter = listOfRestaurants.filter((res) => res?.card?.card?.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        setFilteredRestaurants(searchFilter)
                        console.log(searchFilter);
                        }}
                    >
                        search
                    </button>
                </div>
                <div className="search m-4 p-4">
                    <button 
                        className="px-4 py-2 bg-gray-500 text-white rounded-lg m-4" onClick={ () => {
                        const filterList = listOfRestaurants.filter((res) => {
                            return res?.info.avgRating > 4;
                        })
                        setListOfRestaurants(filterList);
                        console.log("Button clicked", filterList);
                    }} 
                    >
                        Top Rated Restaurants
                    </button>
                </div>
                <div className="search m-4 p-4">
                    <label>UserName: </label>
                    <input 
                        className="border border-black p-2"
                        value={loggedInUser}
                        onChange={(e)=>setUserName(e.target.value)}
                    />
                </div>
            </div>
            <div className="res-container flex flex-wrap">
                {filteredRestaurants.map((restaurant, i) => (
                    <Link key={restaurant?.card?.card?.info.id} to={"/restaurants/"+restaurant?.card?.card?.info.id}>
                        {restaurant?.card?.card?.info.promoted ?  
                            (<RestaurantCardPromoted resData={restaurant}/>)
                            :
                            (<RestaurantCard resData={restaurant}/>)
                        }
                    </Link> 
                ))}
            </div>
        </div>
    )
}

export default Body;