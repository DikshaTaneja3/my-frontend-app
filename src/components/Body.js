import RestaurantCard from "./RestaurantCard"
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
    const [ listOfRestaurants, setListOfRestaurants ] = useState([]);
    const [ filteredRestaurants, setFilteredRestaurants ] = useState([]);
    const [ searchText, setSearchText ] = useState("");

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
            <div className="filter">
                <div className="search">
                    <input 
                        type="text" 
                        className="search-box" 
                        value={searchText}
                        onChange={(e)=> {
                            setSearchText(e.target.value)
                        }}
                    />
                    <button onClick={()=> {
                        const searchFilter = listOfRestaurants.filter((res) => res?.card?.card?.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        setFilteredRestaurants(searchFilter)
                        console.log(searchFilter);
                    }}>Search</button>
                </div>
                <button className="filter-btn" onClick={ () => {
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
            <div className="res-container">
                {filteredRestaurants.map((restaurant, i) => (
                    <Link key={restaurant?.card?.card?.info.id} to={"/restaurants/"+restaurant?.card?.card?.info.id}><RestaurantCard resData={restaurant}/></Link> 
                ))}
            </div>
        </div>
    )
}

export default Body;