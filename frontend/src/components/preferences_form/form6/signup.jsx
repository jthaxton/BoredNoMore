
import React, { Component } from "react";
import { withRouter } from 'react-router-dom';


class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            email: [],
            password: "" 
        };
        console.log(this.props)
    }

    saveSignup(type){
        return (e) =>{
            this.setState({ [type]: e.target.value })
        }
    }

    handleSubmit(e) {
        // e.preventDefault();
        let entry = {
            email: this.state.email,
            password: this.state.password
        }
        console.log(this.props)
        this.props.saveEntries(entry);
        console.log(this.state)
        let userData = Object.assign({}, this.props.data, this.state)
        console.log(userData)
        this.props.signUp(userData).then(() => this.props.history.push('/results'));
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
                        <input type="text"
                            onChange={this.saveSignup('email')}
                        ></input>
                    </li>
                    <li>Password:
                        <input type="password"
                            onChange={this.saveSignup('password')}
                            ></input>>
                    </li>


                    <li><button 
                            onClick={this.handleSubmit.bind(this)}
                        >Sign Up!</button></li>
                </ul>
                </ul>
                <div className="signup-button-options">
                

                  <button onClick={this.signUp}>No, thanks.</button>
                  </div>
            </form>
          </div>;
    }
}

export default withRouter(SignUp);
