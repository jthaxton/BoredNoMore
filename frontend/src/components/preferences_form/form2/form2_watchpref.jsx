
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
      <div className="form-page">
            <h1>BoredNoMore</h1>
            <h4>For {this.props.name}</h4>
            <form>
              <h1>What do you like to watch?</h1>
              <ul>
                <li>
                  <button onClick={this.handleSelect("action")} />
                </li>

                <li>
                  <button onClick={this.handleSelect("comedy")} />
                </li>

                <li>
                    <button onClick={this.handleSelect("drama")} />
                </li>

                <li>
                    <button onClick={this.handleSelect("romance")} />
                </li>

                <li>
                    <button onClick={this.handleSelect("horror")} />
                </li>

                <li>
                    <button onClick={this.handleSelect("documentary")} />
                </li>

                <li>
                    <button onClick={this.handleSelect("thriller")} />
                </li>

                <li>
                    <button onClick={this.handleSelect("kids")} />
                </li>

                <li>
                    <button onClick={this.handleSelect("sci-fi/fantasy")} />
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



