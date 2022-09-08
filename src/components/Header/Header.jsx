import React from 'react';
import styles from './Header.module.scss';
import Avatar from '../../assets/avatar.png'
import { IoNotifications } from 'react-icons/all'

const Header = () => (
  <div className={styles.Header}>
    <div className={styles.user} >
    <img src={Avatar} ></img>
    <p className={styles.name} >Jane S.</p>
    </div>
    <IoNotifications className={styles.notification} />
  </div>
);


export default Header;
