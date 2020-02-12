import React from 'react';
import classes from './Home.module.css';

const Home = () => {
    return (
        <div className={classes.home}>
            <div className="container">
                <div className={classes.homeInformation}>
                    <h2 className={classes.homeTitle}>Mahmoud Elbshat</h2>
                    <h4 className={classes.homeInfo}>Petroleum Engineer</h4>
                    <p className={classes.homeText}>
                        I am a professional <span>UX Designer</span> and Front-End Developer creating modern and resposive designs to Web. Let us work together. Thank you. 
                    </p>
                    <button className={classes.homeButton}>Let's Begin</button>
                </div>
            </div>
        </div>

    )
};

export default Home;