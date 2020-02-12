import React , {Component} from 'react';
import classes from './Work.module.css';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink,faBolt, faBorderStyle } from "@fortawesome/free-solid-svg-icons";

class Work extends Component {
    state = {
        works :[],
        icon : [faLink , faBolt , faBorderStyle]
    }

    componentDidMount () {
        axios.get('js/data.json').then(res => {this.setState({works: res.data.works })});
    }
    
    
    
    
    render() {
       
        const works = this.state.works;
        
        const workList = works.map((workItem , index) => {
            
            
            return(
                <div className={workItem.id === 1 ? (classes.partFirst) : (workItem.id === 3 ? (classes.partLast) : (classes.part))} 
                key={workItem.id}>
                    <FontAwesomeIcon icon={this.state.icon[index]} size={workItem.size} className={classes.fa}></FontAwesomeIcon>
                    <h4 className={classes.partTitle}>{workItem.title}</h4>
                    <hr className={classes.line}/>
                    <p className={classes.partDesc}>
                    {workItem.body}
                    </p>
                </div>
            )
        })

        return (
            <div className={classes.work}>
                <div className="container">

                    <h2 className={classes.workTitle}><span>My</span> Work</h2>


                    {workList}
                    
                </div>
            </div>
            

        )
        }
};

export default Work;







/*workItem.id === 1 ? (
    <div className={classes.partFirst} key={workItem.id}>
        <FontAwesomeIcon icon={this.state.icon[index]} size='2x' className={classes.faLink}></FontAwesomeIcon>
        <h4 className={classes.partTitle}>{workItem.title}</h4>
        <hr className={classes.line}/>
        <p className={classes.partDesc}>
        {workItem.body}
        </p>
    </div>
) :(
    <div className={classes.part} key={workItem.id}>
        <FontAwesomeIcon icon={this.state.icon[index]} size='2x' className={classes.faLink}></FontAwesomeIcon>
        <h4 className={classes.partTitle}>{workItem.title}</h4>
        <hr className={classes.line}/>
        <p className={classes.partDesc}>
        {workItem.body}
        </p>
    </div>
)*/