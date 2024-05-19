import React from 'react'
import { NavLink } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import InventoryIcon from '@mui/icons-material/Inventory';
import MenuIcon from '@mui/icons-material/Menu';
export const NavigationBar = () => {
  return (
    <div className='navmenu-section'>
    <ul>
    <li title='Home'>
    <NavLink to={'/'} className={({isActive})=> isActive ? "active" : ""}> <HomeIcon/> </NavLink>
    </li>
    <li title='Menu'>
    <NavLink to={'/menu'} className={({isActive})=> isActive ? "active" : ""}> <MenuIcon/> </NavLink>
    </li>
    <li title='Products'>
    <NavLink to={'/products'} className={({isActive})=> isActive ? "active" : ""}> <InventoryIcon/> </NavLink>
    </li>
    </ul>

     </div>
  )
}

