import React , {Component} from 'react';
import classes from './SocialMedia.module.css';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook,faTwitter, faPinterest } from "@fortawesome/free-brands-svg-icons";



class  SocialMedia extends Component {
    state = {
        social: [],
        icon: [faFacebook,faTwitter, faPinterest]
    }
    
   componentDidMount() {
       axios.get('js/data.json').then(res => {this.setState({social: res.data.social})})
   }
    
    
    
    
    render() {
    const social = this.state.social;
    const SocialItems = social.map(( item , index ) => {
        return (
            <div className={item.id === 1 ? (classes.socialFace):(item.id === 2 ? (classes.socialTwitter):(classes.socialPin))} key={item.id}>
                <div className={classes.socialMain}>
                    <div className={classes.socialFa}><FontAwesomeIcon icon={this.state.icon[index]} size={item.size}  ></FontAwesomeIcon></div>
                    <p className={classes.para}>
                        <span className={classes.info1}>{item.title}</span>
                        <span className={classes.info2}>{item.body}</span>
                    </p>
                </div>
            </div>
        )
    })
    return (
        <div className={classes.socialMedia}>
            <div className={classes.container} >
            {SocialItems}
            </div>
            
        </div>

    )
    }
};

export default SocialMedia;