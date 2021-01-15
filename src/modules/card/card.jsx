import React, { Component } from 'react';
import styles from './card.module.scss';

class card extends Component {

    render() {
      return(
        <div className={styles.card}>
            <div className={styles.title}>
                {this.props.title}
            </div>
            <div className={styles.desc}>
                {this.props.desc}
            </div>
        </div>
      )
    }
  
  }

export default card