import UserClass from "./UserClass";
import User from "./User";
import { Component, useEffect } from "react";
import UserContext from "../utils/UserContext";

class About extends Component {
    constructor(props) {
        super(props);
        console.log("About us page");
    }
    componentDidMount() {
        // Parent component did mount
    }
    render () {
        return (<div>
            <h1>About us Page</h1>
            <div>
                <UserContext.Consumer>
                    {({loggedInUser}) => <h1 className="text-lg font-bold">{loggedInUser}</h1>}
                </UserContext.Consumer>
            </div>
            <h2>This is about react routing page</h2>
            <UserClass name={"Diksha Taneja Class"} />
            {/* <User name={"Diksha Taneja Functional"}/> */}
        </div>)
    }
}
export default About;