
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
            <div>
            <h1>BoredNoMore</h1>
            <h4>For {this.props.name}</h4>
            <form>
              <h1>What do you like to watch?</h1>
              <ul>
                <li>
                  <button onClick={this.handleSelect("genre1")} />
                </li>

                <li>
                  <button onClick={this.handleSelect("genre2")} />
                </li>

                <li>
                    <button onClick={this.handleSelect("genre3")} />
                </li>

                <li>
                    <button onClick={this.handleSelect("genre4")} />
                </li>

                <li>
                    <button onClick={this.handleSelect("genre5")} />
                </li>

                <li>
                    <button onClick={this.handleSelect("genre6")} />
                </li>

                <li>
                    <button onClick={this.handleSelect("genre7")} />
                </li>

                <li>
                    <button onClick={this.handleSelect("genre8")} />
                </li>

                <li>
                    <button onClick={this.handleSelect("genre9")} />
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



