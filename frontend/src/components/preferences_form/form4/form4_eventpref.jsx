
import React, { Component } from "react";

export default class Form4EventPref extends Component {

    constructor(props) {
        super(props);
        this.state = { events: [] };
    }

    handleSelect(event) {
        return (e) => {
            let eventsArr = []

            if (eventsArr.length > 3) {
                alert("You may only select 3 genres.");
            } else {
                eventsArr = this.state.events;
                if (!eventsArr.includes(event)) {
                    eventsArr.push(event);
                    this.setState({ events: eventsArr });
                }
            }
        }
    }

    nextStep() {
        let entry = {
            events: this.state.events
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
                    <h1>What events do you like?</h1>
                    <ul>
                        <li>
                            <button onClick={this.handleSelect("Sports")} />
                        </li>

                        <li>
                            <button onClick={this.handleSelect("Music")} />
                        </li>

                        <li>
                            <button onClick={this.handleSelect("ArtsTheatre")} />
                        </li>

                        <li>
                            <button onClick={this.handleSelect("Film")} />
                        </li>

                        <li>
                            <button onClick={this.handleSelect("Miscellaneous")} />
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



