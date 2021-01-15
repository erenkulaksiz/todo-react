import React, { Component } from 'react'
import styles from './card.module.scss';
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight, faEdit, faTrash, faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            title: null, 
            desc: null,
        };
    }
    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }
    render() {
        const { taskName, taskDesc, isEditing, onEditClick, onDelTask, onSubmit, onCancel} = this.props

        const data = {
            desc: this.state.desc,
            title: this.state.title
        }

        if(isEditing){
            return(
                // Editing mode
                <div className={styles.card__edit}>
                    {/* Controls */}
                    <div className={styles.card__controls_hover}>
                        <a href='#' onClick={() => {onSubmit(data)}} className={styles.navIconSubmit}><FontAwesomeIcon icon={faCheck}/></a>
                        <a href='#' onClick={onCancel}><FontAwesomeIcon icon={faTimes}/></a>
                    </div>
                    {/* End of Controls */}
                    <div className={styles.card__title}>
                        <input type='text' name={'title'} placeholder={'Title'} defaultValue={taskName} onChange={this.handleChange}></input>
                    </div>
                    <div className={styles.card__desc}>
                        <textarea placeholder={'Description'} name={'desc'} cols="25" rows="5" defaultValue={taskDesc} onChange={this.handleChange}></textarea>
                    </div>
                </div>
            )
        }else{
            return(
                <div className={styles.card}>
                    <div className={styles.card__controls_hover}>
                        <a href='#' className={styles.navIcon}><FontAwesomeIcon icon={faArrowLeft}/></a>
                        <a href='#' className={styles.navIcon}><FontAwesomeIcon icon={faArrowRight}/></a>
                        <a href='#' onClick={onEditClick} className={styles.navIcon}><FontAwesomeIcon icon={faEdit} /></a>
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
}

Card.propTypes = {
    taskName: PropTypes.string.isRequired,
    taskDesc: PropTypes.string.isRequired,
    isEditing: PropTypes.bool.isRequired,
    onEditClick: PropTypes.func,
    onDelTask: PropTypes.func,
    onCancel: PropTypes.func,
    onSubmit: PropTypes.func,
}

export default Card