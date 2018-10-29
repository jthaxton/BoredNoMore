
import React, { Component } from "react";

export default class Form5Activities extends Component {

    constructor(props) {
        super(props);
        this.state = { activities: [] };
    }

    handleSelect(activity) {
        return (e) => {
            let activitiesArr = []

            if (activitiesArr.length > 3) {
                alert("You may only select 3 genres.");
            } else {
                activitiesArr = this.state.activities;
                if (!activitiesArr.includes(activity)) {
                    activitiesArr.push(activity);
                    this.setState({ activities: activitiesArr });
                }
            }
        }
    }

    nextStep() {
        let entry = {
            activities: this.state.activities
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
                    <h1>What activities do you enjoy?</h1>
                    <ul>
                        <li>
                            <button onClick={this.handleSelect("active")} />
                        </li>

                        <li>
                            <button onClick={this.handleSelect("arts")} />
                        </li>

                        <li>
                            <button onClick={this.handleSelect("beautysvc")} />
                        </li>

                        <li>
                            <button onClick={this.handleSelect("localservices")} />
                        </li>

                        <li>
                            <button onClick={this.handleSelect("shopping")} />
                        </li>

                        <li>
                            <button onClick={this.handleSelect("skiresorts")} />
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



