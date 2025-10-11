import { MENU_API } from "./constants";
import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {
    const [ resInfo, setResInfo ] = useState(null);
    // fetch data
    useEffect(()=> {
        fetchMenu();
    }, [])
    const fetchMenu = async () => {
        // const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.5003489&lng=77.03474849999999&restaurantId=254196");
        const data = await fetch("http://192.168.1.2:8080/mock-response");
        const json = await data.json();
        console.log(json, 'test')
        setResInfo(json.data);
    }
 return resInfo;
}
export default useRestaurantMenu;