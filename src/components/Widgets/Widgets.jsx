import React from 'react';
import { Widget, AreaCharts, PieCharts } from '../'
import styles from './Widgets.module.scss';
import { chartData, pieData } from '../../data/variables'


const Widgets = () => {
  return (
  <div className={styles.Widgets}>
    <Widget 
      title='Company Facts' 
      subtitle='Employees'
      chart={<AreaCharts/>}

      statItems={chartData}
    />
    <Widget 
      title='Statisctics' 
      chart={<PieCharts/>}

      statItems={pieData}
    />
    <Widget 
      title='Assigned Risks' 
      default_title='risks'
    />
    <Widget 
      title='Assigned action items'
      default_title='action' 
    />
  </div>
  )
};


export default Widgets;
