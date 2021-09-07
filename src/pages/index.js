import React from "react"
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import { Link, graphql, useStaticQuery } from 'gatsby'

// markup
export default function Home() {

  const data = useStaticQuery(graphql`

  query {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC },
      filter: { fileAbsolutePath: { regex: "/(blog)/" } }       
     ) {
      nodes {
        frontmatter {
          slug
          title
          category
          date
          author
          tags
          featuredImg {
            childImageSharp {
              fluid(maxWidth: 600) {
                originalImg
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        html
        excerpt(pruneLength: 120)
      }
    }
  }
  
  `)
  return (

    <Layout>
      <Seo title='Home'
        description='Official website for Patrick Muriungi a Jamstack developer, Developer and creator'
        slug='/' 
        author='Patrick Muriungi' 
        keywords="Patrick Muriungi, web developer, jamstack developer, creator, tutorials,"/>

<section className="intro-section">
      <div className="container">
      <div className="row">
      <div className="col-lg-12 col-md-12 ">
        <h1 className="display-1">
          <span className="display-1--main">Gatsby starter</span>
          <span className="display-1--main">Uzito Blog</span>
          </h1>      
        </div>
       </div>
      </div>
  </section>

  <section className="post-ntop">
     <div className="container">
       <div className="row">   
       { data.allMarkdownRemark.nodes.map((nodes) => {
            return(                                        
               <div className="col-lg-4">
                 <div className="post-box border--4sides">                        
                  <div className="img-card">       
                  <Link to={`/blog/${nodes.frontmatter.slug}`}>        
                  <img src={nodes.frontmatter.featuredImg.childImageSharp.fluid.originalImg} title={nodes.frontmatter.title} alt={nodes.frontmatter.title} />                     
                  </Link>
                    </div>           
                     <div className="content">
                       <div className="date">
                         <strong>Published:</strong> {nodes.frontmatter.date}
                       </div>   
                       <Link to={`/blog/${nodes.frontmatter.slug}`}>
                       <h3>{nodes.frontmatter.title}</h3>
                  </Link>  
                  <p>{nodes.excerpt}</p>     
                   <Link to={`/blog/${nodes.frontmatter.slug}`}>Read more</Link>                                                                                                      
                    </div>                                    
                  </div>
                </div>
                    )}
                    )} 
              </div>      
          </div>
       </section>
   <section className="post-ntop">
   <div className="container">
     <div className="row">
                                             
             <div className="column-lg-6 center-xs">
               <div className="post-box border--4sides">                        
                <div className="img-card">       
               
                  </div>           
                   <div className="content">
                     <div className="date">
                       <strong>Published:</strong><em> </em>
                     </div>                                                                                                         
                  </div>                                    
                </div>
              </div>
            </div>      
        </div>
     </section>
      </Layout>
    
   )
}
