import React from 'react'

const Logo = () => <span className="child logo">LALALALA</span>
const Link = ({ children }) => <span className="padd">{children}</span>

const Header = () => (
  <header>
    <div className="container nav end noborder">
      <Logo />
      <Link>Nav1dsad</Link>
      <Link>Nav2 might contain</Link>
      <Link>Contact us</Link>
      <Link>Contact us</Link>
    </div>
  </header>
)

export default Header
