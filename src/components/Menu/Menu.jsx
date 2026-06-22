import React from "react";
import { NavLink } from "react-router-dom";
import classNames from "classnames";
import styles from "./Menu.module.scss";

const Menu = () => {
  const getActiveClass = ({ isActive }) =>
    classNames(styles.link, { [styles.active]: isActive });
  return (
    <nav>
      <ul className={styles.menu}>
        <li>
          <NavLink to="/" className={getActiveClass}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/heroes" className={getActiveClass}>
            Heroes
          </NavLink>
        </li>
        <li>
          <NavLink to="/list" className={getActiveClass}>
            List
          </NavLink>
        </li>
        <li>
          <NavLink to="/camp" className={getActiveClass}>
            Camp
          </NavLink>
        </li>
        <li>
          <NavLink to='/books' className={getActiveClass}>Books</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
