import React from 'react';

import { Component } from 'react'

import './result_page.css';

export default class resultsPage extends Component {
    constructor(props){
        super(props)
    } 
    // will be getting props for results

  render() {
    return <div>
        <div className="results-all">
          <div className="result-header">
            <section className="user-greeting">
              {/* Welcome, {this.props.currentUser.name} */}
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.1/css/all.css" integrity="sha384-5sAR7xN1Nv6T6+dT2mhtzEpVJvfS3NScPQTrOxhwjIuvcA67KV2R5Jz6kr4abQsz" crossorigin="anonymous"/>
              <i className="fas fa-user-alt" />
              Welcome, User
            </section>
            <h1 className="borednomore-results">BoredNoMore</h1>
          </div>

          <div className="result-main-body">
            <aside className="side-navbar">
              <ul>
                <li>My Profile</li>
                <li />
                <li />
                <li />
                <li>
                  <button className="result-page-logout" onClick={() => this.props.logout()}>
                    Logout
                  </button>
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

              <li className="restaurantSelection">
                <div>stand-in for image</div>
                {/* <img src="some url that we will likely get from props" /> */}
                {/* <h4>{this.props.restaurantSelection}</h4> */}
              </li>

              <li className="movieSelection">
                <div>stand-in for image</div>
                {/* <img src="some url that we will likely get from props" /> */}
                {/* <h4>{this.props.movieSelection}</h4> */}
              </li>

              <li className="eventSelection">
                <div>stand-in for image</div>
                {/* <img src="some url that we will likely get from props" /> */}
                {/* <h4>{this.props.eventSelection}</h4> */}
              </li>
            </ul>
          </div>
        </div>
      </div>;
  }
}
