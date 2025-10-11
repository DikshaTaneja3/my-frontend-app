import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: {
                name: "Dummy",
                Location: "Default"
            }
        }
        console.log('class child constructor')
    }
    componentDidMount () {
        console.log("componentDidMount used for api calls")
        this.timer = setInterval(()=> {
            console.log("interval in class component")
        }, 1000);
    }
    componentDidUpdate () {
        console.log("componentDidUpdate is called")
    }
    componentWillUnmount () {
        clearInterval(this.timer);
        console.log("componentWillUnmount is called")
    }
    render() {
        console.log('class child render')
        return (
            <div className="user-card">
                <h2>Name:- {this.state.userInfo.name}</h2>
                <img src={this.state.userInfo.avatar_url} />
                <h3>Location:- Panipat</h3>
                <h4>Contact:- @DikshaTaneja3</h4>
            </div>
        )
    }
}

export default UserClass;