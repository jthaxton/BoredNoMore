import React from 'react';
import { Component } from 'react'
import './result_page.css';
import Modal from 'react-modal';

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
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    // this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  } 
   // will be getting props for results

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  // afterOpenModal() {
  //   this.subtitle.style.color = '#f00';
  // }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }
   

  render() {
    console.log(this.props)
    return <div>
        <div className="results-all">
          <div className="result-header">
            <section className="user-greeting">
              {/* Welcome, {this.props.currentUser.name} */}
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.1/css/all.css" integrity="sha384-5sAR7xN1Nv6T6+dT2mhtzEpVJvfS3NScPQTrOxhwjIuvcA67KV2R5Jz6kr4abQsz" crossorigin="anonymous"/>
              <p className="welcomeuser">
                <i className="fas fa-user-alt"
                  id="user-icon"
                  onClick={this.openModal}> 
                </i>

                <Modal
                  isOpen={this.state.modalIsOpen}
                  onAfterOpen={this.afterOpenModal}
                  onRequestClose={this.closeModal}
                  style={customStyles}
                >
                  <button className="logout-button"
                          onClick={this.closeModal}
                  >Logout</button>

                </Modal>

                Welcome, User
              </p>
            </section>
            <h1 className="borednomore-results">BoredNoMore</h1>
          </div>

          <div className="result-main-body">
            {/* <aside className="side-navbar">
              <ul>
                <li>My Profile</li>
                <li />
                <li />
                <li />
                <li>
                  <button className="result-page-logout" onClick={() => this.props.logout()}>
                    Logout
                  </button>
                </li>
              </ul>
            </aside> */}

            <ul className="results">
              <li className="streamSelection">
                 {/* onClick={() => this.props.getRestaurants({location: "san francisco, ca", categories: ["chinese", "desserts"], limit: 5})} */}

                <img className="result-img" src="https://images.unsplash.com/photo-1521967906867-14ec9d64bee8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=63f399f203a46024cdee72cd6aa42163&auto=format&fit=crop&w=1350&q=80" />
                {/* <h4>{this.props.streamSelection}</h4> */}
                <p>Streaming Selection Placeholder - Stream Source</p>
              </li>

              <li className="restaurantSelection">
                {/* <div className="image-stand-in">stand-in for image</div>                <img src="some url that we will likely get from props" /> */}
              <img className="result-img" src="https://images.unsplash.com/photo-1527224538127-2104bb71c51b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c7fc4917011de5709727efa4b8497bad&auto=format&fit=crop&w=1351&q=80" />
                {/* <h4>{this.props.restaurantSelection}</h4> */}
                <p>Restaurant Selection Placeholder - San Francisco, CA</p>
              </li>

              <li className="movieSelection">
                {/* <div className="image-stand-in">stand-in for image</div> */}
              <img className="result-img" src="https://images.unsplash.com/photo-1513106580091-1d82408b8cd6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c93960a66ab95463358588dd85dc9d26&auto=format&fit=crop&w=1355&q=80" />
                {/* <h4>{this.props.movieSelection}</h4> */}
                <p>Movie Selection Placeholder - San Francisco, CA</p>
              </li>

              <li className="eventSelection">
                {/* <div className="image-stand-in">stand-in for image</div> */}
                {/* <img src="some url that we will likely get from props" /> */}
              <img className="result-img" src="https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3a413a0b054159dd7840130c25e6dbdf&auto=format&fit=crop&w=1350&q=80" />
                {/* <h4>{this.props.eventSelection}</h4> */}
                <p>Event Selection Placeholder - San Francisco, CA</p>

              </li>
            </ul>
          </div>
        </div>
      </div>;
  }
}
