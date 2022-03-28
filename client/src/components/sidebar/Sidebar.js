import "./Sidebar.css"
import logo from "../../assets/LogoP.png"
import sidebar_items from '../../assets/sidebar_routes.json'
import { Link } from 'react-router-dom'
import React from 'react'
import { useLocation } from 'react-router-dom'

const SidebarItem = props => {
    const Out = props.title == 'Sair' ? 'sidebar__logout' : 'sidebar__link'
    const active = props.active ? 'active_menu_link' : ' '
    
    return (
        <div className="sidebar__menu">
            <div className={`${Out} ${active}`}>
                <i className={props.icon}></i>
                <a href="">
                    {props.title}
                </a> 
            </div>
        </div>
    )   
}
const Sidebar = ({sidebarOpen, closeSidebar},props) => {

  const location = useLocation(props);
  const activeItem = sidebar_items.findIndex(item => item.route === location.pathname)
    return(
        <div className={sidebarOpen ? "sidebar-responsive" : ""} id="sidebar">
        <div className="sidebar__title">
            <div className="sidebar__img">
                <img src = {logo} alt="logo"/>
            </div>
            <i 
               className="fa fa-times" 
               id="sidebarIcon" 
               onClick={() => closeSidebar()}           
            ></i>
        </div>
        <div className= "sidebar__menu">
        {
            sidebar_items.map((item, index) => (
                
                <Link to={item.route} key={index}>
                    <SidebarItem
                        title={item.display_name}
                        icon={item.icon}
                        active={index === activeItem}
                    />
                </Link>
                ))       
        }
            </div>
        </div>
    )
}
export default Sidebar;
/*

*/            