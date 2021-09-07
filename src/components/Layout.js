import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import '../scss/style.scss'
import '../scss/flexboxgrid.css'


export default function Layout(props) {
    return (     
            <div>
             <Navbar />
            <div class="content">
            { props.children }
            </div>
            <Footer />
           </div>
    )
}
