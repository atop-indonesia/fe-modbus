import './sidebar.css'
import {
  LineStyle,
  TrendingUp,
  

} from "@material-ui/icons";
import { Link } from "react-router-dom";
import DevicesRoundedIcon from '@mui/icons-material/DevicesRounded';
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
            <li className="sidebarListItem">
              <LineStyle className="sidebarIcon" />
              Home
            </li>
            </Link>
            <Link to="/fungsionalmodbus" className='link'>
            <li className="sidebarListItem">
              <DevicesRoundedIcon className="sidebarIcon" />
              Device
            </li>
            </Link>
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon" />
              Control
            </li>
          </ul>
        </div>

        


      </div>
    </div>
  );
}
export default Sidebar;