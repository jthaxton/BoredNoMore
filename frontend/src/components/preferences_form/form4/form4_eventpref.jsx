
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
                            <button onClick={this.handleSelect("event1")} />
                        </li>

                        <li>
                            <button onClick={this.handleSelect("event2")} />
                        </li>

                        <li>
                            <button onClick={this.handleSelect("event3")} />
                        </li>

                        <li>
                            <button onClick={this.handleSelect("event4")} />
                        </li>

                        <li>
                            <button onClick={this.handleSelect("event5")} />
                        </li>

                        <li>
                            <button onClick={this.handleSelect("event6")} />
                        </li>

                        <li>
                            <button onClick={this.handleSelect("event7")} />
                        </li>

                        <li>
                            <button onClick={this.handleSelect("event8")} />
                        </li>

                        <li>
                            <button onClick={this.handleSelect("event9")} />
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



