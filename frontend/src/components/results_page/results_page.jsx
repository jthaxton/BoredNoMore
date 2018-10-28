import React from 'react';
import { Component } from 'react'
import Modal from 'react-modal';
import './result_page.css';
import ResultModal from './result_modal'

const ticketMasterIds = require('../../util/api_ticket_master_ids');

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

Modal.setAppElement('#root');

export default class resultsPage extends Component {
  constructor(props){
    super(props);
      
    this.state ={
      modalIsOpen: false,
      modalComponent: <ResultModal />,
      coords: {
        latitude: 42.35984802,
        longitude: -71.05888367
      }
    };

    // this.openModal = this.openModal.bind(this);
    // this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  } 
   // will be getting props for results

  // openModal() {
  //   this.setState({ modalIsOpen: true });
  // }

  // afterOpenModal() {
  //   this.subtitle.style.color = '#f00';
  // }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  fetchData(pos) {
    this.setState({ coords: pos.coords })

    this.props.getRestaurants(
      {
        latitude: this.state.coords.latitude,
        longitude: this.state.coords.longitude,
        categories: this.props.currentUser.preferences.cuisine,
      }
    )

    this.props.getEvents(
      {
        latitude: this.state.coords.latitude,
        longitude: this.state.coords.longitude,
        segmentId: this.props.currentUser.preferences.liveEventType
      }
    )
  }

  componentDidMount() {
    console.log('Getting location...');    
    navigator.geolocation.getCurrentPosition(
      (pos) => this.fetchData(pos),
      () => alert('Could not locate, please allow location')
    );
  }
  
  
  render() {
    console.log(this.state);
    console.log(this.props);
    

      const logoutModal = (
        <button className="logout-button"
          onClick={this.closeModal}
        >
          Logout
        </button>
      );

    return <div className="results-all">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.1/css/all.css" integrity="sha384-5sAR7xN1Nv6T6+dT2mhtzEpVJvfS3NScPQTrOxhwjIuvcA67KV2R5Jz6kr4abQsz" crossOrigin="anonymous" />

        <Modal isOpen={this.state.modalIsOpen} onAfterOpen={this.afterOpenModal} onRequestClose={this.closeModal} style={customStyles}>
          {this.state.modalComponent}
        </Modal>

        <div className="result-header">
          <section className="user-greeting">
            {/* <p>
              <i className="fas fa-user-alt"
                id="user-icon"
                onClick={() => this.setState({ modalComponent: logoutModal, modalIsOpen: true })}> 
              </i>
              Welcome, {this.props.currentUser.name}
            </p> */}
          </section>

          <div className="borednomore-logo">BoredNoMore</div>
        </div>

        <div className="result-body">
          <ul className="results-body-index">
            <li className="activitySelection">
              <img src="https://images.unsplash.com/photo-1521967906867-14ec9d64bee8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=63f399f203a46024cdee72cd6aa42163&auto=format&fit=crop&w=1350&q=80" />
              <p>Activity</p>
            </li>

            <li className="restaurantSelection" onClick={() => this.setState(
                  {
                    modalComponent: (
                      <ResultModal data={this.props.selectRestaurant} />
                    ),
                    modalIsOpen: true
                  }
                )}>
              <img src="https://images.unsplash.com/photo-1527224538127-2104bb71c51b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c7fc4917011de5709727efa4b8497bad&auto=format&fit=crop&w=1351&q=80" />
              <p>Food</p>
            </li>

            <li className="movieSelection">
              <img src="https://images.unsplash.com/photo-1513106580091-1d82408b8cd6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c93960a66ab95463358588dd85dc9d26&auto=format&fit=crop&w=1355&q=80" />
              <p>Movie</p>
            </li>

            <li className="eventSelection" onClick={() => this.setState({
                  modalComponent: (
                    <ResultModal data={this.props.selectEvent} />
                  ),
                  modalIsOpen: true
                })}>
              <img src="https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3a413a0b054159dd7840130c25e6dbdf&auto=format&fit=crop&w=1350&q=80" />
              <p>Event</p>
            </li>
          </ul>
        </div>
      </div>;
  }
}
