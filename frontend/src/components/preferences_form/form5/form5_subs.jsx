
import React, { Component } from "react";

export default class Form5Subs extends Component {

    constructor(props) {
        super(props);
        this.state = { subs: [] };
    }

    handleSelect(sub) {
        return (e) => {
            let subsArr = []

            if (subsArr.length > 3) {
                alert("You may only select 3 genres.");
            } else {
                subsArr = this.state.subs;
                if (!subsArr.includes(sub)) {
                    subsArr.push(sub);
                    this.setState({ subs: subsArr });
                }
            }
        }
    }

    nextStep() {
        let entry = {
            subs: this.state.subs
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
                    <h1>What subscriptions for you have?</h1>
                    <ul>
                        <li>
                            <button onClick={this.handleSelect("Netflix")} />
                        </li>

                        <li>
                            <button onClick={this.handleSelect("Amazon Prime")} />
                        </li>

                        <li>
                            <button onClick={this.handleSelect("Hulu")} />
                        </li>

                        <li>
                            <button onClick={this.handleSelect("HBO")} />
                        </li>

                        <li>
                            <button onClick={this.handleSelect("Sling")} />
                        </li>

                        <li>
                            <button onClick={this.handleSelect("sub6")} />
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



