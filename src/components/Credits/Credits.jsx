import React from 'react';
import styles from './Credits.module.scss';

const Credits = () => {
  return(
  <div className={styles.Credits}>
    <h1 className={styles.title} >Camioca</h1>
    <p className={styles.version} >Version: 1.0.0.11</p>
  </div>
  )
};


export default Credits;
