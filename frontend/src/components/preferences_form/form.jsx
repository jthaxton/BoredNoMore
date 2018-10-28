import React, { Component } from 'react';
import Form1 from './form1/form1_name_container';
import Form15 from "./form1/form1.5_location_container";
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
            name: "Me",
            email: "",
            password: "",
            location: "",
            genres: [],
            cuisines: [],
            eventTypes: [],
            subs: []
        }

        this.nextStep = this.nextStep.bind(this);
    }

    saveEntries(entries){
        this.setState(Object.assign({}, this.state, entries))
    } 
    //setState to Object that combines this.state and entries object with updated fields

    nextStep(e){
        this.setState({
            step: this.state.step + 1
        })
    }

    previousStep(e){
        this.setState({
            step: this.state.step - 1
        })
    }

  render() {
    switch (this.state.step) {
        case 1:
            return <Form1 
                        name={this.state.name}
                        nextStep={this.nextStep}
                        saveEntries={this.saveEntries} />
        case 2:
            return <Form15 
                        location={this.state.location}
                        nextStep={this.nextStep}
                        saveEntries={this.saveEntries} />
        case 3: 
            return <Form2 
                        genres={this.state.genres}
                        nextStep={this.nextStep}
                        saveEntries={this.saveEntries} />
        case 4: 
            return <Form3 
                        cuisines={this.state.cuisines}
                        nextStep={this.nextStep}
                        saveEntries={this.saveEntries} />
        case 5:
            return <Form4 
                        eventTypes={this.state.eventTypes}
                        nextStep={this.nextStep}
                        saveEntries={this.saveEntries} />
        case 6:
            return <Form5 
                        subs={this.state.subs}
                        nextStep={this.nextStep}
                        saveEntries={this.saveEntries} />
        case 7:
            return <Form6
                        email={this.state.email}
                        password={this.state.password}
                        saveEntries={this.saveEntries} />
        default:
            return <Form1
                        name={this.state.name}
                        nextStep={this.nextStep}
                        saveEntries={this.saveEntries} />
    }
    // return(
    //     <Form1 />
    // )
  };
}

export default Form;

//credit: https://www.viget.com/articles/building-a-multi-step-registration-form-with-react/