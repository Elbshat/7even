import React, { Fragment } from 'react';
import classes from './Contact.module.css';
import Footer from '../Footer/Footer';

const Contact = () => {
    return (
        <Fragment>
            <div className={classes.contact}>
                <div className="container">
                    <h2 className={classes.contactTitle}><span>contact </span>Me A line</h2>
                    <form  className={classes.form} action="">
                        <div className={classes.formTop}>
                            <input type="text" placeholder="Your Name"/>
                            <input type="email" placeholder="Your Email"/>
                        </div>
                        <input type="text" className={classes.sub} placeholder="Your Subject"/>
                        <textarea cols="30" rows="10" placeholder="Your Message"></textarea>
                        <input type="submit" value="Send Message" className={classes.submit}  />
                    </form>
                </div>
            </div>
            <Footer />
        </Fragment>


    )
};

export default Contact;