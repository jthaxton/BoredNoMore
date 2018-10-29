
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
        return (
            <div>
                <h1>BoredNoMore</h1>
                <h4>For {this.props.name}</h4>
                <form>
                    <h1>What do you like to eat?</h1>
                    <ul>
                        <li>
                            <button onClick={this.handleSelect("cuisine1")} />
                        </li>

                        <li>
                            <button onClick={this.handleSelect("cuisine2")} />
                        </li>

                        <li>
                            <button onClick={this.handleSelect("cuisine3")} />
                        </li>

                        <li>
                            <button onClick={this.handleSelect("cuisine4")} />
                        </li>

                        <li>
                            <button onClick={this.handleSelect("cuisine5")} />
                        </li>

                        <li>
                            <button onClick={this.handleSelect("cuisine6")} />
                        </li>

                        <li>
                            <button onClick={this.handleSelect("cuisine7")} />
                        </li>

                        <li>
                            <button onClick={this.handleSelect("cuisine8")} />
                        </li>

                        <li>
                            <button onClick={this.handleSelect("cuisine9")} />
                        </li>
                    </ul>
                </form>
                <button className="next-step" onClick={this.nextStep.bind(this)}>
                    Next
            </button>
            </div>
        )
    }
}



