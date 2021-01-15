import React, { Component } from 'react';
import Card from '../card/card.jsx';
import styles from './todoapp.module.scss';
//
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeartbeat, faCheckCircle, faLightbulb } from '@fortawesome/free-solid-svg-icons'

class todoapp extends Component {

    render() {
      return(
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <div className={styles.content__todo}>
                    <div className={styles.header}>
                        <div className={styles.header_content}>
                            <div className={styles.title}>
                                <FontAwesomeIcon icon={faHeartbeat} className={styles.headerIcon}/> To-Do
                            </div>
                            <div className={styles.count}>
                                5
                            </div>
                        </div>
                    </div>
                    <div className={styles.todo_content}>
                        <Card title={"taesadasdas"} desc={"desc"} id={5}/>
                        <Card title={"taesadasdas"} desc={"desc"} id={5}/>
                        <Card title={"taesadasdas"} desc={"desc"} id={5}/>
                    </div>
                </div>
                <div className={styles.content__done}>
                    <div className={styles.header}>
                        <div className={styles.header_content}>
                            <div className={styles.title}>
                                <FontAwesomeIcon icon={faCheckCircle} className={styles.headerIcon}/> Done
                            </div>
                            <div className={styles.count}>
                                5
                            </div>
                        </div>
                    </div>
                    <div className={styles.done_content}>
                        <Card title={"taesadasdas"} desc={"desc"} id={5}/>
                        <Card title={"taesadasdas"} desc={"desc"} id={5}/>
                        <Card title={"taesadasdas"} desc={"desc"} id={5}/>
                    </div>
                </div>
                <div className={styles.content__later}>
                    <div className={styles.header}>
                        <div className={styles.header_content}>
                            <div className={styles.title}>
                                <FontAwesomeIcon icon={faLightbulb} className={styles.headerIcon}/> To-Do Someday
                            </div>
                            <div className={styles.count}>
                                5
                            </div>
                        </div>
                    </div>
                    <div className={styles.later_content}>
                        <Card title={"taesadasdas"} desc={"desc"} id={5}/>
                        <Card title={"taesadasdas"} desc={"desc"} id={5}/>
                        <Card title={"taesadasdas"} desc={"desc"} id={5}/>
                    </div>
                </div>
            </div>
        </div>
      )
    }
  
  }

export default todoapp