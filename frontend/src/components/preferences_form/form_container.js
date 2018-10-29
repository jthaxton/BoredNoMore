import { connect } from "react-redux";

import Form from './form';

const mstp = (state) => {
    return{
        formNum: state.session.form.formStep,
        name: state.session.form.name,
        email: state.session.form.email,
        password: state.session.form.password,
        location: state.session.form.location,
        genres: state.session.form.genres,
        cuisines: state.session.form.cuisines,
        eventTypes: state.session.form.eventTypes,
        subs: state.session.form.subs,
    }
}

export default connect(mstp, null)(Form);