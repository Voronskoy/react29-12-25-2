import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import classNames from "classnames";
import styles from "./Pages.module.scss";
const ListPage = () => {
  const getActiveClass = ({ isActive }) =>
    classNames(styles.link, { [styles.active]: isActive });
  return (
    <section>
      <h1>ListPage</h1>
      <nav>
        <ul className={styles.menu}>
          <li>
            <NavLink to="play" className={getActiveClass}>
              PlayList
            </NavLink>
          </li>
          <li>
            <NavLink to="quote" className={getActiveClass}>
              QouteList
            </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </section>
  );
};

export default ListPage;
