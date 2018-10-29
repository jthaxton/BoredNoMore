
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
        return <div>
            <h1>BoredNoMore</h1>
            <h4>For {this.props.name}</h4>
            <form>
              <h1>What do you like to eat?</h1>
              <ul>
                <li>
                  <button onClick={this.handleSelect("chinese")} />
                </li>

                <li>
                  <button onClick={this.handleSelect("mexican")} />
                </li>

                <li>
                  <button onClick={this.handleSelect("american")} />
                </li>

                <li>
                  <button onClick={this.handleSelect("italian")} />
                </li>

                <li>
                  <button onClick={this.handleSelect("foodtrucks")} />
                </li>

                <li>
                  <button onClick={this.handleSelect("coffee")} />
                </li>

                <li>
                  <button onClick={this.handleSelect("desserts")} />
                </li>

                <li>
                  <button onClick={this.handleSelect("bars")} />
                </li>

                <li>
                  <button onClick={this.handleSelect("cuisine9")} />
                </li>
              </ul>
            </form>
            <button className="next-step" onClick={this.nextStep.bind(this)}>
              Next
            </button>
          </div>;
    }
}



