import * as React from "react"
import Layout from '../components/Layout'
import { Link } from 'gatsby'
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

        <section>
          <h1>Hello fro homepage</h1>
        </section>
      </Layout>
    
   )
}
