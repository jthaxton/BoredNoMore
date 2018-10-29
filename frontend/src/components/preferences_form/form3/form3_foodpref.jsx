
import React, { Component } from "react";

export default class Form3FoodPref extends Component {

    constructor(props) {
        super(props);
        this.state = { cuisines: [] };
    }

    handleSelect(cuisine) {
        return (e) => {
            let cuisinesArr = []

            if (cuisinesArr.length > 3) {
              alert("You may only select 3 genres.");
            } else {
                cuisinesArr = this.state.cuisines;
                if (!cuisinesArr.includes(cuisine)) {
                    cuisinesArr.push(cuisine);
                this.setState({ cuisines: cuisinesArr });
              }
            }
        }
    }

    nextStep() {
        let entry = {
            cuisines: this.state.cuisines
        }
        this.props.saveEntries(entry);
        this.props.nextStep()
    }


    render() {
        return       <div className="form-page">

            <h1>BoredNoMore</h1>
            <h4>For {this.props.name}</h4>
            <form>
              <h1>What do you like to eat?</h1>
              <ul className="form-list">
                <li>
                  <button onClick={this.handleSelect("chinese")} > CHINESE </button>
                </li>

                <li>
                  <button onClick={this.handleSelect("mexican")} > MEXICAN </button>
                </li>

                <li>
                  <button onClick={this.handleSelect("american")} > AMERICAN </button>
                </li>

                <li>
                  <button onClick={this.handleSelect("italian")} > ITALIAN </button>
                </li>

                <li>
                  <button onClick={this.handleSelect("foodtrucks")} > FOODTRUCKS </button>
                </li>

                <li>
                  <button onClick={this.handleSelect("coffee")} > COFFEE </button>
                </li>

                <li>
                  <button onClick={this.handleSelect("desserts")} > DESSERTS </button>
                </li>

                <li>
                  <button onClick={this.handleSelect("bars")} > BARS </button>
                </li>

                <li>
                  <button onClick={this.handleSelect("cuisine9")} > OTHER </button>
                </li>
              </ul>
            </form>
            <button className="next-step" onClick={this.nextStep.bind(this)}>
              Next
            </button>
          </div>;
    }
}



