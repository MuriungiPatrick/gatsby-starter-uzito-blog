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
          date(fromNow: true)
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
        description='starter gatsby blog for Developers and creator'
        slug='/' 
        author='Patrick Muriungi' 
        keywords="Patrick Muriungi,Gatsby, gatsby blog, gatsby starter, web developer, jamstack developer, creator, tutorials,"/>


  <section className="post-intro-content">
         <div className="container">
             <div className="row">
                <div className="col-lg-12">
                  <div className="content text-white">
                   <h1 className="display-1--post">Latest post</h1>                                     

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
               <div className="col-lg-6">
                 <div className="post-box border--4sides">                        
                  <figure className="img-card">       
                  <Link to={`/blog/${nodes.frontmatter.slug}`}>        
                  <img src={nodes.frontmatter.featuredImg.childImageSharp.fluid.originalImg} title={nodes.frontmatter.title} alt={nodes.frontmatter.title} />                     
                  </Link>
                    </figure>           
                     <div className="content">
                       <div className="date">
                        <h5> <strong>Published:</strong> {nodes.frontmatter.date}</h5>
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
     <div className="col-lg-12">
                  <div className="content text-white">
                   <h1 className="display-1--post">Another section with Latest Post without images</h1>                                     
                  </div>
                </div>
         
       { data.allMarkdownRemark.nodes.map((nodes) => {
            return(                                        
               <div className="col-lg-12">
                 <div className="post-box border--4sides">                                  
                     <div className="content">
                       <div className="date">
                        <h5> <strong>Published:</strong> {nodes.frontmatter.date}</h5>
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
