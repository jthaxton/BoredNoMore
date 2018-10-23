import React from 'react';

import React, { Component } from 'react'

export default class resultsPage extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <div className="splash-page">
            <div className="splash-top-nav">
              <button>options button</button>
              <div className="protected-splash-title">
                <h3>BoredNoMore</h3>
                <h4>Hello {this.props.username</h4>
              </div>
            </div>
            <div className="splash-content">
              <h1>Need Recommendations?</h1>
              <button>Previous Preferences</button>
              <button>Set Preferences</button>
            </div>
          </div>;
    }

}