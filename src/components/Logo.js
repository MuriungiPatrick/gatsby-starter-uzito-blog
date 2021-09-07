import React from 'react'
import styled from "styled-components"
import { Link, graphql, useStaticQuery } from 'gatsby'


const LogoWrap = styled.div`
  margin: auto 0;
  flex: 0 1 36px;
  color: #fff;
  
  
  
  @media (max-width: 768px) and (orientation: landscape) {
    display: inline;
    flex: 0 1 25px;
  }
`

export default function Logo() {
    const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          siteUrl
          }
        }
      }
  `)
    return (
        <LogoWrap as={Link} to="/">
          { data.site.siteMetadata.title }
      </LogoWrap>
    )
}
