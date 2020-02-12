import React from 'react';
import classes from './About.module.css';

const About = () => {
    return (
        <div className={classes.about}>
            <div className="container">
                <div className={classes.aboutInfo}>
                    <h2 className={classes.infoTitle}><span>This is</span> Me</h2>
                    <h4 className={classes.infoDir}>Creative Director</h4>
                    <p className={classes.infoDesc}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est <a href="#">explicabo</a> maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                    </p>
                    <p className={classes.infoDesc}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est explicabo maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                    </p>
                </div>
            </div>
        </div>

    )
};

export default About;