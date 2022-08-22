import {NavLink} from 'react-router-dom';
import React from 'react';
import '../styles/index.css'

const Header = () => (
    <header>
      <h1>Expensify</h1>
      <div className='nav-link'>
        <ul>
          <li><NavLink to={"/"} className={({ isActive }) => isActive ? "is-active" : ""}>Home</NavLink></li>
          <li><NavLink to={"/create"} className={({ isActive }) => isActive ? "is-active" : ""}>Create Expense</NavLink></li>
          <li><NavLink to={"/edit"} className={({ isActive }) => isActive ? "is-active" : ""}>Edit Expense</NavLink></li>
          <li><NavLink to={"/help"} className={({ isActive }) => isActive ? "is-active" : ""}>Help</NavLink></li>
        </ul>
      </div>
    </header>
)

export default Header;