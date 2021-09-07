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
      <div className="col-lg-12">
        <h1 className="display-1">
          <span className="display-1--main">Designer, developer &#38; Creator</span>
          </h1>      
        </div>
       </div>
      </div>
  </section>
      </Layout>
    
   )
}
