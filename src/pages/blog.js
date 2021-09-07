import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/Layout'
import Seo from '../components/Seo'




export default function Blog() {

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
        <Seo title='Blog'
          description='blog description here'
          slug='/' 
          author='Patrick Muriungi' 
          keywords="Patrick Muriungi, web developer, jamstack developer, creator, tutorials,"/>
  
 
  
    <section className="post-intro-content">
         <div className="container">
             <div className="row">
                <div className="col-lg-11">
                  <div className="content text-white">
                   <h1 className="display-1--post">blog page</h1>                                     
                   <h4>here you'll find all tutorials listed </h4>               
                  </div>
                </div>
             </div>
           </div>
     </section>
     <section className="post-ntop">
     <div className="container">
       <div className="row">   
       { data.allMarkdownRemark.nodes.map((nodes) => {
            return(                                        
               <div className="col-lg-4 col-md-6 col-sm-12">
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
        </Layout>
    )
}
