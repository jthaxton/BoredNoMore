import React, { Component } from 'react';
import Form1 from './form1/form1_name_container';
import Form15 from "./form1/form15_location";
import Form2 from './form2/form2_watchpref';
import Form3 from "./form3/form3_foodpref";
import Form4 from "./form4/form4_eventpref";
import Form5 from './form5/form5_activities';
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
            events: [],
            subs: []
        }
        this.nextStep = this.nextStep.bind(this);
        this.saveEntries = this.saveEntries.bind(this);
    }
    

    saveEntries(entry){
        this.setState(Object.assign({}, this.state, entry))
    } 

    nextStep(e){
        this.setState({
            step: this.state.step + 1
        });
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
                        data={this.state}
                        signUp={this.props.signUp}
                        saveEntries={this.saveEntries} 
                        />
        default:
            return <Form1
                        name={this.state.name}
                        nextStep={this.nextStep}
                        saveEntries={this.saveEntries} />
    }

  };
}

export default Form;

//credit: https://www.viget.com/articles/building-a-multi-step-registration-form-with-react/