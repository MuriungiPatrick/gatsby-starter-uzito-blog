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
                 <h4>here you'll find all tutorials listed </h4>               
                </div>
              </div>
           </div>
         </div>
   </section>
   <section className="post-ntop">
   <div className="container">
     <div className="row">                                           
             <div className="col-lg-6 col-md-6">                                 
                   <div className="post-box border--4sides content">  
                   <h1>Contact details</h1>       
                </div>                                                    
              </div>
             <div className="col-lg-6 col-md-6">                                    
                   <div className="post-box border--4sides content">       
                   <h1>Contact details</h1>                                                                                     
                  </div>                                    
              </div>
            </div>      
        </div>
     </section>
    </Layout>
    )
}
