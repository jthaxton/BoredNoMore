import React from 'react';

import { Component } from 'react'

export default class resultsPage extends Component {
    constructor(props){
        super(props)
    } 
    // will be getting props for results

  render() {
    return <div>
        <section className="user-greeting">
          {/* Welcome, {this.props.username} */}
          Welcome, User
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
            <li className="streamSelection">
                {/* onClick ={() => <Modal selection="stream"/>}> */}
                <div>stand-in for image</div>
                {/* <img src="some url that we will likely get from props" /> */}
                {/* <h4>{this.props.streamSelection}</h4> */}
            </li>

            <li className= "restaurantSelection">
                {/* <img src="some url that we will likely get from props" /> */}
                {/* <h4>{this.props.restaurantSelection}</h4> */}
            </li>

            <li className="movieSelection">
                {/* <img src="some url that we will likely get from props" /> */}
                {/* <h4>{this.props.movieSelection}</h4> */}
            </li>

             <li className="eventSelection">
                {/* <img src="some url that we will likely get from props" /> */}
                {/* <h4>{this.props.eventSelection}</h4> */}
            </li>
        </ul>
      </div>;
  }
}
