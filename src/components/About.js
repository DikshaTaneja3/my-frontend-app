import UserClass from "./UserClass";
import User from "./User";
import { useEffect } from "react";

const About = () => {
    console.log("About us page");
    useEffect( () => {
        console.log("used for api calls");
    }, 
    []);
    return (
        <div>
            <h1>About us Page</h1>
            <h2>This is about react routing page</h2>
            <UserClass name={"Diksha Taneja Class"} />
            {/* <User name={"Diksha Taneja Functional"}/> */}
        </div>
    )
}
export default About;