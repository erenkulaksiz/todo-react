import React, { Component } from 'react';
import styles from './addtask.module.scss';
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

class AddTask extends Component {
    render (){
        const { onAddTask } = this.props
        return (
            <div className={styles.cardAdd}>
                <a href='#' onClick={onAddTask}><FontAwesomeIcon icon={faPlus} /></a>
            </div>
        )
    }
}

AddTask.propTypes = {
    onAddTask: PropTypes.func.isRequired
}

export default AddTask