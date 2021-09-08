import React from 'react'
import Layout from '../components/Layout'
import Seo from '../components/Seo'

export default function contact() {
    return (
        <Layout>
      <Seo title='contact page'
        description='contact description here'
        slug='/' 
        author='Patrick Muriungi' 
        keywords="Patrick Muriungi, web developer, jamstack developer, creator, tutorials,"/>


  <section className="post-intro-content">
       <div className="container">
           <div className="row">
              <div className="col-lg-12">
                <div className="content text-white">
                 <h1 className="display-1--post">contact page </h1>                                                
                </div>
              </div>
           </div>
         </div>
   </section>
   <section className="post-ntop">
   <div className="container">
     <div className="row">                                           
             <div className="col-lg-12 col-md-12">                                 
                   <div className="post-box border--4sides">  
                   <div className="content">  
                   <h1>Put your Contact details here</h1>       
                   </div>
                </div>                                                    
              </div>
            </div>      
        </div>
     </section>
    </Layout>
    )
}
