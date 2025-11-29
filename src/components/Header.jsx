import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Header(){
  return (
    <header className="site-header">
      <div className="nav-inner container-sm">
        <Link to="/" className="logo">Puma</Link>
        <nav>
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </div>
    </header>
  )
}
