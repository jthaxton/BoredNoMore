import React, { Component } from 'react'

export default class Form15Location extends Component {

    constructor(props) {
        super(props);
        this.state = { location: "94111" };
    }

    addLocation(e) {
        return (e) => {
            this.setState({ location: e.target.value })
        }

    }

    nextStep() {
        let entry = {
            location: this.state.location
        }
        this.props.saveEntries(entry);
        this.props.nextStep()
    }


  render() {
    return (
      <div>
        <h1>BoredNoMore</h1>
        <h4>For {this.props.name}</h4>
        <form>
            <h1>Let's get started.</h1>
            <h1>Where are you looking?</h1>
            <input
                onChange={this.addLocation()} >
            </input>
        </form >
        <button
            className="next-step"
            onClick={this.nextStep.bind(this)}>Next</button>
      </div>
    )
  }
}
