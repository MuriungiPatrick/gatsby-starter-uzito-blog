import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome'
import { faCalendar, faFolderOpen  } from '@fortawesome/free-solid-svg-icons'
import Author from '../components/Author'



export const query = graphql`
query ($slug: String!) {
  markdownRemark(frontmatter: {slug: {eq: $slug}}) {
    frontmatter {
      category
      title
      tags
      author
      date(fromNow: true)
      featuredImg {
        childImageSharp {
          fluid(maxWidth: 1500) {
            ...GatsbyImageSharpFluid
          }                
        }
      }
    }
    html 
  }
}
    `


export default function Blog({ data }) {
    const { html } = data.markdownRemark
    const { title, category, tags, date } = data.markdownRemark.frontmatter
    return (
    <Layout>
        <Seo title={ title } />
        <section className="post-intro-content">
            <div className="container">
                <div className="row">
                   <div className="col-lg-12">
                     <div className="post-meta">
                      <h1 className="display-1--post">{ title }</h1>                                                      
                      <div className="details">                    
                        <Author />                   
                        <div className="category">
                          <h4><FontAwesomeIcon icon={faFolderOpen} className="icon" />
                          {category}</h4>
                        </div>
                        <div className="date">
                          <h4><FontAwesomeIcon icon={faCalendar} className="icon" />
                          {date }</h4>
                        </div>                   
                      </div>
                     </div>
                   </div>
                </div>
              </div>
        </section>
        <section className="post-ntop">
          <div className="container">
              <div className="row">
              <div className="col-lg-12">
              <div className="post-section">
            <p dangerouslySetInnerHTML={ { __html: html}}></p>
               </div>
              <div className="post-section">          
            <div className="tags">
                        
                        </div>
                    </div>
                </div>     
               </div>
             </div>
           </section>          
        </Layout>
    )
}
