
import React, { Component } from "react";

export default class form1_Name extends Component {
    constructor(props) {
        super(props);
        this.state = {
            genre: [],
        }
    }

    changeName(e) {
        return e => {
            this.setState({ genres: e.target.value })
        }
    }

    render() {
        return (
            <div>
                <form>
                    <h1>BoredNoMore</h1>
                    <h4>For </h4>
                    <h1>First, what should we call you?</h1>
                    <input
                        value="{this.state.name}"
                        onChange={() => this.changeName().bind(this)} >
                    </input>
                </form >
            </div>
        )
    }
}



