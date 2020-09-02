import React from 'react'
import { Link } from 'gatsby'

export default function Header(props) {
  return <header style={{fontSize: "72px" }}>
          <div className="header-main">
            <h1>{props.hText}</h1>
            <p>
              <a style={{color: 'rgba(25, 0, 255)'}}><Link to='/'>Home  | </Link></a>
              <a style={{color: 'rgba(255, 0, 0)'}}><Link to="/contact/">Contact | </Link></a>
              <a style={{color: 'rgba(255, 251, 0)'}}><Link to="/about/">About</Link></a>
            </p>
          </div>
          <nav className="header-menu"></nav>
        </header>

}
