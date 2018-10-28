

import React, { Component } from "react";

export default class Form1Name extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: "Me"
        }
        console.log(this.props)
        // this.setState = this.setState.bind(this.props);
    }
    

    changeName(e){
        return (e) => {
            this.setState({name: e.target.value })
            console.log(this.state);
        }
        
    }

    nextStep(){
        // this.setState({ step: this.props.step + 1 });
        // console.log(this.props)
        let entry = {
            name: this.state.name
        }

        this.props.saveEntries(entry);
        this.props.nextStep()
        // console.log("hello")


    }

  render() {
    return (
      <div>
        <h1>BoredNoMore</h1>
        <h4>For </h4>
        <form>
            <h1>First, what should we call you?</h1>
            <input 
                // value="{this.state.name}"
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

