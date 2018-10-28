import React from 'react';
import { Component } from 'react'
import Modal from 'react-modal';
import './result_page.css';
import ResultItem from './result_item'
import ResultModal from './result_modal'

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
      // modalComponent: <ResultModal />,
      coords: {
        latitude: 42.35984802,
        longitude: -71.05888367
      }
    };

    // this.openModal = this.openModal.bind(this);
    // this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.openResultModal = this.openResultModal.bind(this);
  } 
   // will be getting props for results

  // openModal() {
  //   this.setState({ modalIsOpen: true });
  // }
  openResultModal(data) {
    console.log('openResultModal ran');
    
    this.setState({
      modalIsOpen: true, 
      modalComponent: (
        <ResultModal data={data} />
      ) });
  }

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

    this.props.getActivities({
      latitude: this.state.coords.latitude,
      longitude: this.state.coords.longitude,
      categories: this.props.currentUser.preferences.activityType
    });

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
            <p>
              <i className="fas fa-user-alt" id="user-icon" onClick={() => this.setState(
                    { modalComponent: logoutModal, modalIsOpen: true }
                  )} />
              Welcome, {this.props.currentUser.name}
            </p>
          </section>

          <div className="borednomore-logo">BoredNoMore</div>
        </div>


        <div className="result-body">

          <ul className="results-body-index">
            <ResultItem 
              caption="Activity" 
              imgSrc="https://images.unsplash.com/photo-1521967906867-14ec9d64bee8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=63f399f203a46024cdee72cd6aa42163&auto=format&fit=crop&w=1350&q=80"
              modalFn={() => this.openResultModal(this.props.selectActivity)} 
            />

            <ResultItem 
              caption="Food" 
              imgSrc="https://images.unsplash.com/photo-1527224538127-2104bb71c51b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c7fc4917011de5709727efa4b8497bad&auto=format&fit=crop&w=1351&q=80"
              modalFn={() => this.openResultModal(this.props.selectRestaurant)} 
            />

            <ResultItem 
              caption="Movie" 
              imgSrc="https://images.unsplash.com/photo-1513106580091-1d82408b8cd6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c93960a66ab95463358588dd85dc9d26&auto=format&fit=crop&w=1355&q=80"
              // modalFn={() => this.openResultModal(this.props.selectActivity)} 
            />

            <ResultItem 
            caption="Event" 
            imgSrc="https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3a413a0b054159dd7840130c25e6dbdf&auto=format&fit=crop&w=1350&q=80"
            modalFn={() => this.openResultModal(this.props.selectEvent)} 
            />
          </ul>
        </div>
      </div>;
  }
}
