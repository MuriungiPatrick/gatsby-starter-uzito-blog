import React from 'react'
import styled from "styled-components"
import { Link } from "gatsby"


const NavItem = styled(Link)`
  text-decoration: none;
  color: #fff;
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
  transition: all 200ms ease-in;
  position: relative;

  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: ".";
    color: transparent;
    background: #061C56;
    height: 1px;
    transition: all 0.4s ease-in;
  }

  :hover {
    color: #061C56;
    ::after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    padding: 20px 0;
    font-size: 1.5rem;
    z-index: 6;
  }
`

export default function NavLinks() {
    return (
        <>
        <NavItem to="/news" title="Tech News">What's new</NavItem>
        <NavItem to="/downloads" title="Template downloads(eg adobe xd, html5, bootstrap)">Templates</NavItem>
        <NavItem to="/tutorials" title="Tutorials">Tutorials</NavItem>
     </>
    )
}
