function Footer() {
    return ( 
        <div>
            <div className="footerclr">
                <div className="container">
                    <div className="row footer">
                        <div className="col-lg-4">
                            <h6><img src="/Footerlogo.png"/></h6>
                            <div className="links">
                                <ul className="fs-5 footerlinks mb-3">
                                <li><a href="" className="text-decoration-none text-light">Home</a></li>
                                <li><a href="" className="text-decoration-none text-light">About</a></li>
                                <li><a href="" className="text-decoration-none text-light">Catalog</a></li>
                                <li><a href="" className="text-decoration-none text-light">Blog</a></li>
                                <li><a href="" className="text-decoration-none text-light">Support</a></li>
                                <li><a href="" className="text-decoration-none text-light">Contact</a> </li>                              
                            </ul>
                            </div> 
                        </div>

                        <div className="col-lg-4">
                            <h2 className="account mb-4 mt-4 text-light">User Acccount</h2>
                            <div className="links">
                                <ul className="fs-5 footerlinks">
                                <li><a href="" className="text-decoration-none text-light">Sign Up</a></li>
                                <li><a href="" className="text-decoration-none text-light">Login</a></li>
                                <li><a href="" className="text-decoration-none text-light">Edit Profile</a></li>
                                <li><a href="" className="text-decoration-none text-light">History</a></li>
                                <li><a href="" className="text-decoration-none text-light">Refund</a></li>
                            </ul>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <h2 className="account2  mb-4 mt-4 text-light">Follow Us At</h2>
                            <h3 className="text-light"><i class="bi bi-facebook footericons"></i> <i class="bi bi-youtube footericons"></i>  <i class="bi bi-twitter footericons"></i>  <i class="bi bi-linkedin footericons"></i></h3>
                            <h3 className="mt-4 text-light">Contact</h3>
                            <h5 className="text-light">Obito Uchiha<br/> Konoha,Leaf Village</h5>
                        </div>
                    </div>
                </div>
                <div className="footerclr">
                    <div className="container">
                        <div className="rights text-light">
                            <h5>Made by <a href="" className=" heart text-decoration-none text-light">Themewagon <i class="bi bi-suit-heart-fill text-danger"></i></a>. All Copyrights Reserved @2024</h5>
                            <h5>F.A.Q Cookies Policy  <span className="ms-3">Legal Terms </span><span className="ms-3"> Privacy Policy</span></h5>
                        </div>
                    </div>
                </div>
              </div>
        </div>
     );
}

export default Footer;