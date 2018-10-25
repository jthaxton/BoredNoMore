import React from 'react';
import form1 from './form1/form1_name_container';
import form2 from './form2/form2_watchpref_container';
import form3 from "./form3/form3_foodpref_container";
import form4 from "./form4/form4_eventpref_container";
import form5 from './form5/form5_sub_container';
import form6 from './form6/signup_container';


import React, { Component } from 'react'

export default class Form extends Component {

    componentDidMount(){
        this.setState = {
            step: 1
        }
    }

    
    

  render() {
    switch (this.state.step) {
    case 1:
        return <form1 />
    case 2:
        return <form2 /> 
    case 3: 
        return <form3 />
    case 4: 
        return <form4 />
    case 5:
        return <form5 />
    case 6:
        return <form6 />
    default:
        return <form1 />
    }
  }
}