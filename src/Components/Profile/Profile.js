import React , {Component} from 'react';
import classes from './Profile.module.css';
import axios from 'axios';

class Profile  extends  Component {
    
    state = {
       info:[],
       skills:[]
    }
    
    componentDidMount(){
        axios.get('js/data.json').then(res => {this.setState({ 
            info : res.data.info ,
            skills:res.data.skills
        }) });
    }
    
    
    render() {
       const info = this.state.info;
       const infoItems = info.map((item) => {
           return (
            <ul className={classes.profileList} key={item.id}>
                <li className={classes.profileItem}>
                    <span className={classes.sp1}>{item.title}</span>
                    <span className={item.title === "Website" ? (classes.web):('')}>{item.body}</span>
                </li>
            </ul>
           )
       });
       
       const skills = this.state.skills;
       const skillsItem = skills.map((askill) => {
           return (
            <div className={classes.bar} key={askill.id}>
                <span className={classes.title}>{askill.title}</span>
                <span className={classes.percentage}>{askill.percentage}</span>
                <div className={classes.parent}>
                    <span className={askill.id === 1 ? (classes.skill_1):(askill.id === 2 ? (classes.skill_2):(classes.skill_3))}></span>
                </div>
            </div>
           )
       })
        
        
        return (
            <div className={classes.profile}>
                <div className="container">
                    <div className={classes.right}>
                        <h2 className={classes.profileTitle}><span>My </span >Profile </h2>
                        {infoItems}
                    </div>
                    
                    <div className={classes.left}>
                        <h2 className={classes.skillsTitle}>Some <span>skills</span></h2>
                        <p className={classes.skillsDesc}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
                        </p>
                        {skillsItem}
                    </div>
                    
                </div>
            </div>

        )
    }
};

export default Profile;