import React from 'react';

import React, { Component } from 'react'

export default class resultsPage extends Component {
    constructor(props){
        super(props)
    } 

    render(){
        return(
        <div className="splash-page">
            <div className="splash-top-nav">
                <button>
                    options button
                </button>
                <h3>BoredNoMore</h3>
            </div>
            <div className="splash-content">
                <h1>Need Recommendations?</h1>
                <button>
                    Take Quiz
                </button>
            </div>



        </div>
        )
    }
    
}
