import React, { Component } from 'react';
import Form1 from './form1/form1_name_container';
import Form15 from "./form1/form15_location";
import Form2 from './form2/form2_watchpref';
import Form3 from "./form3/form3_foodpref";
import Form4 from "./form4/form4_eventpref";
import Form5 from './form5/form5_subs';
import Form6 from './form6/signup';



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
        this.saveEntries = this.saveEntries.bind(this);
        // this.setState = this.setState.bind(this);
    }
    

    saveEntries(entry){
        this.setState(Object.assign({}, this.state, entry))
    } 
    //setState to Object that combines this.state and entries object with updated fields

    nextStep(e){
        this.setState({
            step: this.state.step + 1
        });
        console.log(this.state)
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
                        name={this.state.name}
                        location={this.state.location}
                        nextStep={this.nextStep}
                        saveEntries={this.saveEntries} />
        case 3: 
            return <Form2 
                        name={this.state.name}
                        genres={this.state.genres}
                        nextStep={this.nextStep}
                        saveEntries={this.saveEntries} />
        case 4: 
            return <Form3 
                        name={this.state.name}
                        cuisines={this.state.cuisines}
                        nextStep={this.nextStep}
                        saveEntries={this.saveEntries} />
        case 5:
            return <Form4 
                        name={this.state.name}
                        eventTypes={this.state.eventTypes}
                        nextStep={this.nextStep}
                        saveEntries={this.saveEntries} />
        case 6:
            return <Form5 
                        name={this.state.name}
                        subs={this.state.subs}
                        nextStep={this.nextStep}
                        saveEntries={this.saveEntries} />
        case 7:
            return <Form6
                        name={this.state.name}
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