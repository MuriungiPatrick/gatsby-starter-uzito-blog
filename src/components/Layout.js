import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import '../scss/style.scss'


export default function Layout(props) {
    return (
        <div>
            <div>
             <Navbar />
            <div class="content">
            { props.children }
            </div>
            <Footer />
           </div>
        </div>
    )
}
