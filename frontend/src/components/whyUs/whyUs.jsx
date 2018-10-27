import React from 'react';
import './whyUs.css';
export default class whyUs extends React.Component {
    
    render() {
        return(
        <div className="whyUs">
            <ul className="whyUs-list">
                <li className="whyUs-idx-1"> 
                    <div className="whyUs-content">
                        <img src="https://cdn0.iconfinder.com/data/icons/geosm-e-commerce/48/info-512.png" />
                        <p>How do we find the best suggestions? </p>
                    </div>
                </li>                

                <li className="whyUs-idx-2"> 
                    <p>movies</p> 

                </li>

                <li className="whyUs-idx-3"> 
                    restaurants
                </li>
                
                <li className="whyUs-idx-4"> 
                    events
                </li>
                
                <li className="whyUs-idx-5"> 
                    concerts
                </li>
            </ul>

        </div>
        )
    }
}