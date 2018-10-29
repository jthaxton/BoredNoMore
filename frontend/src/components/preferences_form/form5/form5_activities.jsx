
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
                for(let i = 0; i < activity.length; i++){
                    activitiesArr = this.state.activities;
                    if (!activitiesArr.includes(activity[i])) {
                        activitiesArr.push(activity[i]);
                        this.setState({ activities: activitiesArr });
                    }
                    
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
      <div className="form-page-wlist">
                <h1>BoredNoMore</h1>
                <h4>For {this.props.name}</h4>
                <form>
                    <h1>What activities do you enjoy?</h1>
              <ul className="form-list">
                        <li>
                            <button onClick={this.handleSelect(["active"])}> ACTIVE </button >
                        </li>

                        <li>
                            <button onClick={this.handleSelect(["arts"])} > ARTS </button >
                        </li>

                        <li>
                            <button onClick={this.handleSelect(["beautysvc"])} > BEAUTY </button >
                        </li>

                        <li>
                            <button onClick={this.handleSelect(["localservices"])} > SERVICES </button >
                        </li>

                        <li>
                            <button onClick={this.handleSelect(["shopping"])} > SHOPPING </button >
                        </li>

                        <li>
                            <button onClick={this.handleSelect(["skiresorts", "tours"])} > SKIING/TOURS </button >
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



