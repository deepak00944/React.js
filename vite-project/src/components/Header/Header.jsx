import React from "react";
import { Link, NavLink } from "react-router-dom"
import "./Header.css"

export default function Header(){
    return(
        <div id="main">
            <div id="nav" className="flex jusfify-content-center align-item-center">
                <div id="left">
                    <Link className="text-3xl p-20">yourLogo</Link>
                </div>
                <div id="mid">
                    <NavLink to="/">
                        <ul>
                            <li>
                                Home
                            </li>
                        </ul>
                    </NavLink>
                </div>
                <div id="right"></div>
            </div>
        </div>
    )
}