import React from 'react'
import styled from "styled-components"
import { Link } from "gatsby"



export default function NavLinks() {
    return (
        <>
        <Link to="/news" title="Tech News">What's new</Link>
        <Link to="/downloads" title="Template downloads(eg adobe xd, html5, bootstrap)">Templates</Link>
        <Link to="/tutorials" title="Tutorials">Tutorials</Link>
     </>
    )
}
