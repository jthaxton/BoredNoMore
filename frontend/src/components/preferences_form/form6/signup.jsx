
import React, { Component } from "react";

export default class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            email: [],
            password: "" 
        };
    }

signUp(){
    console.log("signup")       
    }


    render() {
        return <div>
            <h1>BoredNoMore</h1>
            <h4>For {this.props.name}</h4>
            <form>
              <h1>Almost there...</h1>
              <ul>
                <li>
                  <button onClick={this.signUp}>
                    Yes, please!
                  </button>
                </li>

                <ul>
                    <li>Email:
                        <input type="text"></input>
                    </li>
                    <li>Password:
                        <input type="password"></input>>
                    </li>

                    <li><button>Sign Up!</button></li>
                </ul>
                

                <li>
                  <button onClick={this.signUp}>No, thanks.</button>
                </li>
              </ul>
            </form>
          </div>;
    }
}



