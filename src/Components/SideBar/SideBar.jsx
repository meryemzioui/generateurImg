import "../SideBar/SideBar.css";
import logo from '../logo.svg';
const SideBar = () => {
  return (
    <div className="container">
      <div className="sidenav">
        <img src={logo} alt="" />
        <button className="create">Create</button>
      </div>
    </div>
  );
};

export default SideBar;
