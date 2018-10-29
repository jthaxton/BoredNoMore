import { connect } from "react-redux";
// import { registerTheUser } from "../../actions/session_actions";
import { registerUser } from "../../util/session_api_util";
import Form from './form';

const mdtp = dispatch => {
  return {
    signUp: userData => dispatch(registerUser(userData))
  };
};



export default connect(null, mdtp)(Form);