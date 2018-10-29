
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
        return <div className="form-page">
            <h1>BoredNoMore</h1>
            <h4>For {this.props.name}</h4>
        <form className="form-content">
              <h1>Almost there...</h1>
              <ul>
                {/* <li>
                  <button onClick={this.signUp}>
                    Yes, please!
                  </button>
                </li> */}

                <ul>
                    <li>Email:
                        <input type="text"></input>
                    </li>
                    <li>Password:
                        <input type="password"></input>
                    </li>

                </ul>
                </ul>
                <div className="signup-button-options">
                    <button>Sign Up!</button>
                

                  <button onClick={this.signUp}>No, thanks.</button>
                  </div>
            </form>
          </div>;
    }
}



