import React, { Component } from 'react'
import styles from './card.module.scss';
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'

class Card extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { taskName, taskDesc, onDelTask } = this.props
        return(
            <div className={styles.card}>
                <div className={styles.card__controls_hover}>
                    <a href='#' className={styles.navIcon}><FontAwesomeIcon icon={faArrowLeft}/></a>
                    <a href='#' className={styles.navIcon}><FontAwesomeIcon icon={faArrowRight}/></a>
                    <a href='#' className={styles.navIcon}><FontAwesomeIcon icon={faEdit} /></a>
                    <a href='#' onClick={onDelTask}><FontAwesomeIcon icon={faTrash}/></a>
                </div>
                <div className={styles.title}>
                    {taskName}
                </div>
                <div className={styles.desc}>
                    {taskDesc}
                </div>
            </div>
        )
    }
}

Card.propTypes = {
    taskName: PropTypes.string.isRequired,
    taskDesc: PropTypes.string.isRequired,
    onDelTask: PropTypes.func.isRequired
}

export default Card