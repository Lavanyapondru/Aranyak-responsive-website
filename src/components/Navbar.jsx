function Navbar() {
    return ( 
        <div>
                <nav class="navbar navbar-expand-lg fixed-top" aria-label="Ninth navbar example">
        <div class="container-xl">
          <a className="navbar-brand" href="#"><img src="/aranyaklogo.png"/></a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample07XL"
            aria-controls="navbarsExample07XL"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarsExample07XL">
            <form role="search">
              <input className="form-control ms-5 me-5" type="search"  placeholder="Search Plant" aria-label="Search"/>
            </form>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item"><a className="nav-link active me-3" aria-current="page" href="/">Home</a></li>
              <li className="nav-item"><a className="nav-link active me-3" aria-current="page" href="about">About</a></li>
              <li className="nav-item"><a className="nav-link active me-3" aria-current="page" href="catalog">Catalog</a></li>
              <li className="nav-item"><a className="nav-link active me-3" aria-current="page" href="support">Support</a></li>
              <li className="nav-item"><a className="nav-link active me-3" aria-current="page" href="blog">Blog</a></li>
              <li className="nav-item"><a className="nav-link active me-3" aria-current="page" href="contact">Contact</a></li>

              
            </ul>
            
          </div>
        </div>
      </nav>
        </div>
     );
}

export default Navbar;