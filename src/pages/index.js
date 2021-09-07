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

        <section clasName="intro-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-4"><h1>column left 1</h1></div>
              <div className="col-lg-4"><h1>column right 2</h1></div>
              <div className="col-lg-4"><h1>column right 2</h1></div>
            </div>
          </div>
        </section>
      </Layout>
    
   )
}
