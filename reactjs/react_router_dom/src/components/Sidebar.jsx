import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import "./sidebar.css"
export default function Menu() {
  return (
    <div>
        <h2>Sidebar</h2>
        <ul>
            <li>
                <NavLink
                    to={`/`}
                    className={({ isActive, isPending }) =>
                      isActive
                        ? "active"
                        : isPending
                        ? "pending"
                        : ""
                    }
                >
                    Home
                </NavLink>
            </li>
            <li>
            <NavLink
                    to={`/about`}
                    className={({ isActive, isPending }) =>
                      isActive
                        ? "active"
                        : isPending
                        ? "pending"
                        : ""
                    }
                >
                    About
                </NavLink>
            </li>
            <li>
            <NavLink
                    to={`/products`}
                    className={({ isActive, isPending }) =>
                      isActive
                        ? "active"
                        : isPending
                        ? "pending"
                        : ""
                    }
                >
                    Products
                </NavLink>
            </li>
        </ul>
    </div>
  )
}
