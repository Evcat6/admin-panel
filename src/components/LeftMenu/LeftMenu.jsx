import styles from './LeftMenu.module.scss';
import 
{ RiDashboardFill, 
  BsFillPeopleFill, 
  FaClipboardList, 
  BsCalendar4Event, 
  TbHourglassEmpty, 
  RiMessage2Fill, 
  IoHelpSharp, 
  TbBuildingSkyscraper, 
  AiOutlineFundProjectionScreen 
} from 'react-icons/all';

const LeftMenu = () => {

  const pasiveIcon = {
    color: 'gray', 
    fontSize: '24px', 
    marginRight: '30px'
  }

  const activeIcon = {
    color: '#2F80ED', 
    fontSize: '24px', 
    marginRight: '30px'
  }

  return (
    <div className={styles.left_Part} >
  <div className={styles.LeftMenu}>
    <div className={styles.item_active} ><RiDashboardFill style={activeIcon}/> Dashbord</div>
    <div className={styles.item}><BsFillPeopleFill style={pasiveIcon}/> People</div>
    <div className={styles.item} ><FaClipboardList style={pasiveIcon}/> Projects</div>
    <div className={styles.item}><BsCalendar4Event style={pasiveIcon}/> Calendar</div>
    <div className={styles.item}><AiOutlineFundProjectionScreen style={pasiveIcon}/> Training</div>
    <div className={styles.item}><TbHourglassEmpty style={pasiveIcon}/> Timesheet</div>
    <div className={styles.item}><RiMessage2Fill style={pasiveIcon}/> Reports</div>
    <div className={styles.item}><TbBuildingSkyscraper style={pasiveIcon}/> Administration</div>
    <div className={styles.item}><IoHelpSharp style={pasiveIcon}/> Help</div>
  </div>
    </div>

)};


export default LeftMenu;
