import React from 'react'
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from "prop-types"

export default function Seo({ description, lang, meta, title, siteUrl, author}) {
  
    const { site } = useStaticQuery(graphql`
    query {
        site {
          siteMetadata {
            title
            author 
            siteUrl
          }
        }
      }
  `)
  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title
    return (
        <Helmet
        htmlAttributes={{
          lang,
        }}
        title={title}
        titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
        meta={[
          {
            name: `description`,
            content: metaDescription,
          },
          {
            property: `og:title`,
            content: title,
          },
          {
            property: `og:description`,
            content: metaDescription,
          },
          {
            property: `og:type`,
            content: `siteUrl`,
          },
          {
            name: `twitter:card`,
            content: `summary`,
          },
          {
            name: `twitter:creator`,
            content: site.siteMetadata?.author || ``,
          },
          {
            name: `twitter:title`,
            content: title,
          },
          {
            name: `twitter:description`,
            content: metaDescription,
          },
        ].concat(meta)}
      />
    )
}

Seo.defaultProps = {
    lang: `en`,
    meta: [],
    description: ``,
  }
  
  Seo.propTypes = {
    description: PropTypes.string,
    lang: PropTypes.string,
    meta: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string.isRequired,
  }