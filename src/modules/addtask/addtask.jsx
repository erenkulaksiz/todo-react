import React, { Component } from 'react';
import styles from './addtask.module.scss';
import PropTypes from 'prop-types'

class AddTask extends Component {


    render (){
        const { onAddTask } = this.props
        return (
            <button onClick={onAddTask}>asdadsa</button>
        )
    }
}

AddTask.propTypes = {
    onAddTask: PropTypes.func.isRequired
}

export default AddTask