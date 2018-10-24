import React from 'react';

import React, { Component } from 'react'
import ReactModal from "react-modal";

export default class resultsPage extends Component {
    constructor(props){
        super(props)
    } 
    // will be getting props for results

  render() {
    return <div>
        <section className="user-greeting">
          Welcome, {this.props.name}
        </section>
        <h1>BoredNoMore</h1>
        <aside className="side-navbar">
          <ul>
            <li />
            <li />
            <li />
            <li />
            <li>
                <button 
                className="result-page-logout"
                onClick= {() => this.props.logout()}
                >Logout</button>
            </li>
          </ul>
        </aside>

        <ul className="results">
            <li className="streamSelection"
                Click={() => 
                <ReactModal on
                    isOpen={false} 
                    selection={selection}/> } >
                <img src="some url that we will likely get from props" />
                <h4>{this.props.streamSelection}</h4>
            </li>

            <li className= "restaurantSelection"
                onClick={() => 
                    <ReactModal
                        isOpen={false}
                        selection={selection} />} >
                <img src="some url that we will likely get from props" />
                <h4>{this.props.restaurantSelection}</h4>
            </li>

            <li className="movieSelection"
                Click={() =>
                    <ReactModal on
                        isOpen={false}
                        selection={selection} />} >
                <img src="some url that we will likely get from props" />
                <h4>{this.props.movieSelection}</h4>
            </li>

             <li className="eventSelection"
                Click={() =>
                    <ReactModal on
                        isOpen={false}
                        selection={selection} />} >
                <img src="some url that we will likely get from props" />
                <h4>{this.props.eventSelection}</h4>
            </li>
        </ul>
      </div>;
  }
}
