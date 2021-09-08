import React from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faHeart } from '@fortawesome/free-solid-svg-icons'


export default function Footer() {
  
    return (
        <footer className="footer">
            <div className="container">
        <div className="row">
        <Link to="#" className="back-to-top">
            <FontAwesomeIcon icon={faChevronUp} className="icon" />
        </Link>  
      </div>
    </div>
    <div className="container">
        <div className="row">
            <div className="col-lg-6 col-md-6">
        <div className="legal-stuff">
        <Link to="#">Terms</Link>  
        <Link to="#">Privacy policy</Link>  
        </div>
          </div>
          <div className="col-lg-6 col-md-6">
          <div className="madewithlove">
          <p> Developed by<Link to="https://codewithpatrick.com"> Patrick Muriungi </Link> &copy; {new Date().getFullYear()} </p>
              </div>
          </div>
        </div>
      </div>
   </footer>
    )
}
