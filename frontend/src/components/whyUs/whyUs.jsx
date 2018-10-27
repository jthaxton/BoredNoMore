import React from 'react';
import './whyUs.css';
export default class whyUs extends React.Component {
    
    render() {
        return(
        <div className="whyUs">
            <ul className="whyUs-list">

                <li className="whyUs-idx-1" id="whyUs-start"> 
                    <div className="whyUs-content" >
                        <img src="https://cdn0.iconfinder.com/data/icons/geosm-e-commerce/48/info-512.png" />
                        <h3>5 WAYS WE MAKE THE BEST SUGGESTIONS </h3>
                    </div>
                </li>                

                <li className="whyUs-idx-2"> 
                    <div className="whyUs-content">
                    <img src="https://cdn2.iconfinder.com/data/icons/integers/60/number-one-512.png" />
                        <div className="whyUs-list-text">
                            <h3> ITS ALL ABOUT YOU </h3>
                            <p>We get all of the things you already like to do and watch</p>
                        </div>
                    <img src="https://cdn3.iconfinder.com/data/icons/higher-education-icon-set/256/idea.png" />

                    </div>
                </li>
                <li className="whyUs-idx-3"> 
                    <div className="whyUs-content">
                    <img src="https://cdn2.iconfinder.com/data/icons/integers/60/number-two-512.png" />
                        <div className="whyUs-list-text">
                        <h3> WE FIND ALL OF THE POSSIBILITIES </h3>
                        <p>We scour the internet for everything you could possibly consider doing</p>
                        </div>
                    <img src="https://cdn3.iconfinder.com/data/icons/higher-education-icon-set/256/idea.png" />

                    </div>
                </li>
                <li className="whyUs-idx-4"> 
                    <div className="whyUs-content">
                    <img src="https://cdn2.iconfinder.com/data/icons/integers/60/number-three-512.png" />
                        <div className="whyUs-list-text">
                    <h3> GET INFORMED RECOMMENDATIONS </h3>
                    <p>We look at a wide range of paramaters of what's popular, what's 
                        trending, and what's new</p>
                        </div>
                    <img src="https://cdn3.iconfinder.com/data/icons/higher-education-icon-set/256/idea.png" />

                    </div>
                </li>
                <li className="whyUs-idx-5"> 
                    <div className="whyUs-content">
                    <img src="https://cdn2.iconfinder.com/data/icons/integers/60/number-four-512.png" />
                        <div className="whyUs-list-text">
                    <h3> WE LEARN </h3>
                    <p>As you make choices, our algorithem learns over time what you like
                        and the accuracy of our suggestions improves over time.
                    </p>
                        </div>
                    <img src="https://cdn3.iconfinder.com/data/icons/higher-education-icon-set/256/idea.png" />

                    </div>
                </li>
                

            </ul>

        </div>
        )
    }
}