import React, { Component } from 'react'
import styles from './card.module.scss';
import PropTypes from 'prop-types'

class Card extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { value, onIncrement, onDecrement } = this.props
        return(
            <div className={styles.card}>
                <div className={styles.title}>
                    {value} <button onClick={onIncrement}>+</button>{' '}<button onClick={onDecrement}>-</button>
                </div>
                <div className={styles.desc}>
                    {this.props.desc}
                </div>
            </div>
        )
    }
}

Card.propTypes = {
    value: PropTypes.number.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired
}

export default Card