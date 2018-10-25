import React, { Component } from 'react';
import Form1 from './form1/form1_name_container';
import Form2 from './form2/form2_watchpref_container';
import Form3 from "./form3/form3_foodpref_container";
import Form4 from "./form4/form4_eventpref_container";
import Form5 from './form5/form5_sub_container';
import Form6 from './form6/signup_container';


class Form extends Component {
    constructor(props){
        super(props)

        this.state = {
            step: 1,
            name: "",
            email: "",
            password: "",
            location: "",
            genres: [],
            cuisines: [],
            events: []
        }
    }

  render() {
    switch (this.state.step) {
        case 1:
            return <Form1 />
        case 2:
            return <Form2 /> 
        case 3: 
            return <Form3 />
        case 4: 
            return <Form4 />
        case 5:
            return <Form5 />
        case 6:
            return <Form6 />
        default:
            return <Form1 />
    }
    // return(
    //     <Form1 />
    // )
  };
}

export default Form;