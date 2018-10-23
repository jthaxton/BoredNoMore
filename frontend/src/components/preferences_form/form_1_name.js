import React from "react";

import React, { Component } from "react";

const name = "You";

changeName(e){
    return e => {
        this.setState({name: e.target.value})
    }
}

render(){
    <div>
        <form>
            <h1>BoredNoMore</h1>
            <h4>For </h4>
            <h1>First, what should we call you?</h1>
            <input value=""
                onChange() => this.changeName()>
                {name}</input>
                </form>>

        </form>
    </div>

} 

