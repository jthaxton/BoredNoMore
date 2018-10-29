
import React, { Component } from "react";

export default class Form2WatchPref extends Component {

    constructor(props) {
        super(props);
        this.state = { genres: [] };
    }

    handleSelect(genre) {
        return (e) => {
            let genresArr = []

            if (genresArr.length > 3) {
                alert("You may only select 3 genres.")
            } else {
                genresArr = this.state.genres;
                if (!genresArr.includes(genre)) {
                    genresArr.push(genre)
                    this.setState(
                        { genres: genresArr }
                    )
                }
            }
        }
    }

    nextStep() {
        let entry = {
            genres: this.state.genres
        }
        this.props.saveEntries(entry);
        this.props.nextStep()
    }


    render() {
        return( 
      <div className="form-page-wlist">
            <h1>BoredNoMore</h1>
            <h4>For {this.props.name}</h4>
            <form >
              <h1>What do you like to watch?</h1>
              <ul className="form-list">
                <li>
                  <button onClick={this.handleSelect("action")}> 
                  ACTION 
                  {/* <img src="https://cdn3.iconfinder.com/data/icons/outline-amenities-icon-set/64/Cable_TV-512.png" /> */}
                  < /button>
                </li>

                <li>
                  <button onClick={this.handleSelect("comedy")}> COMEDY 
                  {/* <img src="https://cdn3.iconfinder.com/data/icons/solid-amenities-icon-set/64/Cable_TV_2-512.png" /> */}
                  < /button>
                </li>

                <li>
                    <button onClick={this.handleSelect("drama")} > DRAMA < /button>
                </li>

                <li>
                    <button onClick={this.handleSelect("romance")} > ROMANCE < /button>
                </li>

                <li>
                    <button onClick={this.handleSelect("horror")} > HORROR < /button>
                </li>

                <li>
                    <button onClick={this.handleSelect("documentary")} > DOCUMENTARY < /button>
                </li>

                <li>
                    <button onClick={this.handleSelect("thriller")}> THRILLER < /button>
                </li>

                <li>
                    <button onClick={this.handleSelect("kids")}> KIDS < /button>
                </li>

                <li>
                    <button onClick={this.handleSelect("sci-fi/fantasy")} > SCI-FI  < /button>
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



