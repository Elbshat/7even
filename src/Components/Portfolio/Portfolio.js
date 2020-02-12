import React, { useState , useEffect } from 'react';
import classes from './Portfolio.module.css';
import axios from 'axios';

const Portifolio = () => {
    
    const [images , setImages] = useState([])

    useEffect(() => {
        axios.get('js/data.json').then(res => {setImages(res.data.portfolio)})
    }, [])


    const portfolioImg = images.map((img) => {
        return (
            <div className={classes.imgDiv} key={img.id}>
                    <img src={img.image} alt=""  />
                    <p className="overlay">
                        <span>
                            Show Image
                        </span>
                    </p>
                </div>
        )
    })
 
    return (
        <div className={classes.portfolio}>
            <div className='container'>
            <h2 className={classes.portfolioTitle}><span>My</span> Portfolio</h2>
            <ul className={classes.portfolioList}>
                <li className={classes.portfolioItem_active}>All</li>
                <li className={classes.portfolioItem}>HTML</li>
                <li className={classes.portfolioItem}>Photoshop</li>
                <li className={classes.portfolioItem}>Wordpress</li>
                <li className={classes.portfolioItem}>Mobile</li>
            </ul>
            
            <div >
                
                {portfolioImg }
                
            </div>
            </div>
            
        </div>

    )
};

export default Portifolio;