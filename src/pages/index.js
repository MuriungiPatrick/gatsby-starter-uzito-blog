import React from "react"
import Layout from '../components/Layout'
import Seo from '../components/Seo'

// markup
export default function Home() {

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

  <section className="post-intro-content">
       <div className="container">
           <div className="row">
              <div className="column-lg-11">
                <div className="content text-white">
                 <h1 className="display-1--post">All Tutorials </h1>                                     
                 <h4>here you'll find all tutorials listed </h4>               
                </div>
              </div>
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
