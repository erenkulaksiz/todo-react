import React, { Component } from 'react';
import styles from './addbanner.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

class AddBanner extends Component {
    render (){
        return (
        <div className={styles.cardBanner}>
            <div className={styles.cardBanner__icon}>
                <div className={styles.banner_icon}>
                    <FontAwesomeIcon icon={faCheck}/>
                </div>
            </div>
            <div className={styles.cardBanner__texts}>
                <div className={styles.banner_title}>
                    No Tasks
                </div>
                <div className={styles.banner_desc}>
                    Move tasks by navigators <br/>or click + to add new task
                </div>
            </div>
        </div>
        )
    }
}

export default AddBanner