import './sidebar.css'
import { Link } from "react-router-dom";
import DevicesRoundedIcon from '@mui/icons-material/DevicesRounded';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
            <li className="sidebarListItem">
              <HomeOutlinedIcon className="sidebarIcon" />
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
              <DevicesRoundedIcon className="sidebarIcon" />
              Control
            </li>
          </ul>
        </div>

        


      </div>
    </div>
  );
}
export default Sidebar;