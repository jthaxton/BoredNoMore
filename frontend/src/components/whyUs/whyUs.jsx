import React from 'react';
import './whyUs.css';
export default class whyUs extends React.Component {
    
    render() {
        return(
        <div className="whyUs">
            <ul className="whyUs-list">
             
                <li className="whyUs-idx-1" id="whyUs-splash"> 
                    <div className="whyUs-content">
                        <div className="whyUs-list-text" id="whyUs-splash-text">
                            <img src="https://cdn2.iconfinder.com/data/icons/circle-icons-1/64/bar-chart-512.png" />
                            <h3> THE 4 STEPS TO PERFECT SUGGETIONS </h3>
                        </div>
                    </div>
                </li>




                <li className="whyUs-idx-2"> 
                    <div className="whyUs-content">
                    <img src="https://cdn2.iconfinder.com/data/icons/integers/60/number-one-512.png" />
                        <div className="whyUs-list-text">
                            <h3> ITS ALL ABOUT YOU </h3>
                            <p>We get a list of all of your favorite activities and choices so we can 
                                taylor our recommendations around what you like.
                            </p>
                        </div>
                    <img src="https://cdn3.iconfinder.com/data/icons/higher-education-icon-set/256/idea.png" />

                    </div>
                </li>
                <li className="whyUs-idx-3"> 
                    <div className="whyUs-content">
                    <img src="https://cdn2.iconfinder.com/data/icons/integers/60/number-two-512.png" />
                        <div className="whyUs-list-text">
                        <h3> WE FIND ALL OF THE POSSIBILITIES </h3>
                        <p>We scour the internet for everything you could possibly do,
                            so that we have all the options when choosing what to recommend.
                        </p>
                        </div>
                    <img src="https://cdn1.iconfinder.com/data/icons/the-movies/100/movie-06-512.png" />

                    </div>
                </li>
                <li className="whyUs-idx-4"> 
                    <div className="whyUs-content">
                    <img src="https://cdn2.iconfinder.com/data/icons/integers/60/number-three-512.png" />
                        <div className="whyUs-list-text">
                    <h3> INFORMED RECOMMENDATIONS </h3>
                    <p>We look at a wide range of parameters including what's 
                        trending, and what's new to feed our recommendations algorithm.  Then we compare
                        that to what you've told us you love.</p>
                        </div>
                    <img src="https://cdn1.iconfinder.com/data/icons/infographic-vol-7/512/10-128.png" />

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
                    <img src="https://cdn0.iconfinder.com/data/icons/tutor-icon-set/512/diploma_icon-512.png" />

                    </div>
                </li>
                

            </ul>

        </div>
        )
    }
}