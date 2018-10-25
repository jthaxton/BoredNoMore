import { connect } from "react-redux";

import form1Name from './form1_name';

const mstp = (state) =>{
    return{
        name: "Me"
    }
}


export default connect(mstp, null)(form1Name);