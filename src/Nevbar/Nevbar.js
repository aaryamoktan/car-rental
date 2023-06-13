import React from 'react'
import { Link} from 'react-router-dom'
const Nevbar = () => {
  return (
<>
<nav className="navbar navbar-expand-lg navbar-light ">
  <a className="navbar-brand" href="/">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <a className="nav-item " href='/' >Home <span class="sr-only"></span></a>
      <a className="nav-item " href="/models">Models</a>
      <a className="nav-item " href="/pricing">Pricing</a>
      <a className="nav-item  " href="/contact">Contact</a>
      <a className="nav-item  " href="/service">Service</a>
    </div>
  </div>
</nav>
</>
  )
  }
  export default Nevbar