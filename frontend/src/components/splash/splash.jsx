import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import './splash.css';

Modal.setAppElement('#root')
// const customStyles = {
//   content : {
//     top                   : '50%',
//     left                  : '50%',
//     right                 : 'auto',
//     bottom                : 'auto',
//     // marginRight           : '-50%',
//     transform             : 'translate(-50%, -50%)'
//   }
// };

export default class SplashComponent extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            modalIsOpen: false,
            background_index: 3,
            background_images: [
            'https://stmed.net/sites/default/files/restaurant-wallpapers-28840-4336902.jpg',
            'https://s3-us-west-2.amazonaws.com/marcato.west/venues_files/photos/733768/original.jpg?1493902675',
            'https://images.unsplash.com/photo-1521967906867-14ec9d64bee8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=63f399f203a46024cdee72cd6aa42163&auto=format&fit=crop&w=1050&q=80',
            'https://images.unsplash.com/photo-1468359601543-843bfaef291a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjIxMTIzfQ&s=c869c98d5090b01bc44d53eac1988350&auto=format&fit=crop&w=1053&q=80'
        ] 
        }
        this.changeImage = this.changeImage.bind(this)
            this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleGoWhyUs = this.handleGoWhyUs.bind(this)
    } 

    changeImage() {
        let index = this.state.background_index;
        if (index < 3) {
            index += 1
        }else {
            index = 0
        }
        this.setState( {
            background_index: index
        })
    }

    componentDidMount() {
        setInterval(this.changeImage, 8000)
        // setTimeout(this.changeImage, 2000)

    }

openModal() {
    this.setState({modalIsOpen: true});
    }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    // this.subtitle.style.color = '#f00';
}

  closeModal() {
    this.setState({modalIsOpen: false});
  }
  

  handleGoWhyUs(e, AlbumID){
    e.preventDefault();
    this.props.history.push(`/whyUs`);
  }


    render(){
        return(
        <div className="splash-page">
            <div className="splash-top-nav">
                <button className="index-list-button" id="index-button"
                onClick={this.openModal}>
                    <img src="https://archive.li/2lOth/6137843c93a88319db1888612acbbcfc745dc988.png" />
                </button>

                <h3>BoredNoMore</h3>
            </div>
            <div className="splash-content">
                <h1>Need Recommendations?</h1>
                <button className="quiz-button">
                    TAKE QUIZ
                </button>

            </div>
             {/* <img className="splash-background-image" src={ this.state.background_images[2] } /> */}
             <img className="splash-background-image" src={ this.state.background_images[this.state.background_index] } />
    
        
            <Modal
            className="modal"
            overlayClassName="Overlay"
            isOpen={this.state.modalIsOpen}
              onAfterOpen={this.afterOpenModal}
              onRequestClose={this.closeModal}
        
                >
                <div className="modal-content">
                    <ul className="modal-list">
                        <li>HOME </li>
                        <li>
                            <button onClick={this.handleGoWhyUs}>
                            WHY US 
                            </button>
                        </li>
                        <li>LOGIN< /li>
                    </ul>
                    <ul className="modal-info">
                        <li> IG </li>
                        <li> TWITTER </li>
                        <li> FB </li>
                        <li> FAQS </li>
                        <li> TERMS OF USE </li>
                        <li> PRIVACY </li>
                        <li> CONTACT </li>
                    </ul>
                </div>
            </Modal>
             
        </div>
        )
    }
    
}
