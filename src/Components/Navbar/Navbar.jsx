
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Navbar({userData,logout}) {


    return (
        <>
            <nav className="navbar navbar-expand-lg nav-bgcolor p-3 ">
                <div className="container">
                    <Link className="navbar-brand text-white" to={"/"}>Noxe</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        {userData?<ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className={({ isActive }) =>
                                    isActive ? "nav-Link active-link" : "nav-Link" } to="">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({ isActive }) =>
                                    isActive ? "nav-Link active-link" : "nav-Link" } to="movies">Movies</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({ isActive }) =>
                                    isActive ? "nav-Link active-link" : "nav-Link" } to="tvshow">Tv show</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({ isActive }) =>
                                    isActive ? "nav-Link active-link" : "nav-Link" } to="people">People</NavLink>
                            </li>
                            

                        </ul>:''}
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <i className="fab fa-facebook"></i>
                                <i className="fab fa-instagram"></i>
                                <i className="fab fa-youtube"></i>
                                <i className="fab fa-twitter"></i>

                            </li>
                            
                            {userData?
                            <>
                            <li className="nav-item">
                                <span className="nav-Link cursor-pointer" onClick={logout}>LogOut</span>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({ isActive }) =>
                                    isActive ? "nav-Link active-link" : "nav-Link" } to="profile">Welcom {userData.first_name}</NavLink>
                            </li>
                            </>
                            :
                            <>
                            <li className="nav-item">
                                <NavLink className={({ isActive }) =>
                                    isActive ? "nav-Link active-link" : "nav-Link" } to="login">Login</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({ isActive }) =>
                                    isActive ? "nav-Link active-link" : "nav-Link" } to="register">Register</NavLink>
                            </li>
                            </>}


                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}
