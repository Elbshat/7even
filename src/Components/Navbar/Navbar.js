import React from 'react';
import {Link} from 'react-router-dom';
import classes from './Navbar.module.css';
 

const Navbar = () => {
    return (
        <div className={classes.navbar}>
            
            <div className='container'>
                
                <div className={classes.logo}>
                    <h2 className={classes.logoText}>7even</h2>
                </div>
                
                <ul className={classes.ulList}>
                    <li className={classes.listItem}><Link to='/'>Home</Link></li>
                    <li className={classes.listItem}><a href="#">Work</a></li>
                    <li className={classes.listItem}><a href="#">Portfolio</a></li>
                    <li className={classes.listItem}><a href="#">Resume</a></li>
                    <li className={classes.listItem}><a href="#">About</a></li>
                    <li className={classes.listItem}><Link to='/contact'>Contact</Link></li>
                </ul>
                
            </div>
            
        </div>

    )
};

export default Navbar;