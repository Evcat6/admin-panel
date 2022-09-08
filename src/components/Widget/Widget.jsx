import React from 'react';
import styles from './Widget.module.scss';

const Widget = ({title, chart, subtitle, statItems = [], default_title = ''}) => (
  <div className={styles.Widget}>
    <h1 className={styles.title} >{title}</h1>
    <p className={styles.subtitle} >{subtitle}</p>
    <div className={styles.chart}>
    {chart}
    </div>
    <div className={styles.all_items}>

      {statItems.map((item, index) => (
        <div className={styles.item} key={index} >
          <span className={styles.circle} style={{backgroundColor: item.color}} ></span><p className={styles.chart_item} >{item.name}</p>
        </div>
      ))}
    </div>
      {default_title && <h2  className={styles.default} >There are not {default_title} assigned</h2>}
  </div>
);


export default Widget;
