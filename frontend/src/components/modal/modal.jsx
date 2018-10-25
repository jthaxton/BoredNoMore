import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import SelectionShowContainer from './selection_show_container';

function Modal({ modal, closeModal }) {
    if (!modal) {
        return null;
    }

    let component;
    switch (modal) {
        case 'restaurant':
            component = <SelectionShowContainer />;
            break;
        case 'event':
            component = <SelectionShowContainer />;
            break;
        case 'movies':
            component = <SelectionShowContainer />;
            break;
        case 'streaming':
            component = <SelectionShowContainer />;
            break;
        default:
            component = null;
    }
    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child">
                {component}
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        modal: state.ui.modal,
        imageId: state.imageId
    };
};

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
