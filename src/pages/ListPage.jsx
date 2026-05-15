import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const ListPage = () => {
    return (
        <section>
           <h1>ListPage</h1>
           <nav>
            <ul>
                <li><NavLink to='play'>PlayList</NavLink></li>
                <li><NavLink to='quote'>QouteList</NavLink></li>
            </ul>
           </nav>
           <Outlet/>
        </section>
    );
}

export default ListPage;
