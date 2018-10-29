

import React, { Component } from "react";

export default class Form1Name extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: "Me"
        }
    }
    

    changeName(e){
        return (e) => {
            this.setState({name: e.target.value })
        }
        
    }

    nextStep(){
        let entry = {
            name: this.state.name
        }

        this.props.saveEntries(entry);
        this.props.nextStep()


    }

  render() {
    return (
      <div className="form-page">
      
        <h1>BoredNoMore</h1>
        <h4>For {this.state.name}</h4>
        <form className="form-content">
            <h1>First, what should we call you?</h1>
            <input
                onChange={this.changeName()} >
            </input>
        </form >
        <button 
            className="next-step"
            onClick={this.nextStep.bind(this)}>Next</button>
      </div>
    )
  }

}

