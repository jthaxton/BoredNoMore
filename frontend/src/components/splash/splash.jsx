import React from 'react';
import './splash.css'

export default class SplashComponent extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            background_index: 0,
            background_images: [
            'https://s3-us-west-2.amazonaws.com/marcato.west/venues_files/photos/733768/original.jpg?1493902675',
            'https://stmed.net/sites/default/files/restaurant-wallpapers-28840-4336902.jpg',
            'https://s3-us-west-2.amazonaws.com/marcato.west/venues_files/photos/733768/original.jpg?1493902675',
            'https://stmed.net/sites/default/files/restaurant-wallpapers-28840-4336902.jpg'
        ] 
        }
        this.changeImage = this.changeImage.bind(this)
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
        setInterval(this.changeImage, 3000)
        // setTimeout(this.changeImage, 2000)

    }



    render(){
        return(
        <div className="splash-page">
            <div className="splash-top-nav">
                <button className="index-list-button">
                    <img src="https://archive.li/2lOth/6137843c93a88319db1888612acbbcfc745dc988.png" />
                </button>
                <h3>BoredNoMore</h3>
            </div>
            <div className="splash-content">
                <h1>Need Recommendations?</h1>
                <button className="quiz-button">
                    Take Quiz
                </button>
                <h1>{this.state.background_index}</h1>

            </div>
             {/* <img className="splash-background-image" src={ this.state.background_images[2] } /> */}
             <img className="splash-background-image" src={ this.state.background_images[this.state.background_index] } />

        </div>
        )
    }
    
}
