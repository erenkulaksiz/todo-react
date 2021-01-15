import React, { Component } from 'react'
import styles from './card.module.scss';
import PropTypes from 'prop-types'

class Card extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { taskName, taskDesc, onDelTask } = this.props
        return(
            <div className={styles.card}>
                <div className={styles.title}>
                    { taskName } <button onClick={onDelTask}>del task</button>
                </div>
                <div className={styles.desc}>
                    { taskDesc }
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