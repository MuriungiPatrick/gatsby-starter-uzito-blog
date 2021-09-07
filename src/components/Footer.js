import React from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'


export default function Footer() {
  
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="footer__copyright">
                Handcrafted by Patrick Muriungi  &copy; {new Date().getFullYear()} 
                </div>
              </div>
        <div className="row">
        <Link to="#" className="back-to-top">
            <FontAwesomeIcon icon={faChevronUp} className="icon" />
        </Link>  
      </div>
    </div>
   </footer>
    )
}
