function Joinus() {
    return ( 
        <div>
            <div className="container">
                <div className="row contact mb-5">
                    <div className="col-lg-6">
                        <img src="/womenwatering.png"/>
                    </div>
                    <div className="col-lg-6">
                        <h2 className="mt-5 mb-4">Join Us</h2>
                        <h1 className="team display-3 lh-1 mt-3 mb-5">Subscribe to our <span className="team1 fw-bold">Newsletter</span></h1>
                        <p className="lead fs-2">Get Our <span className="fw-bold">Beginners Guide To Plant </span> <br/><span className="fw-bold">Parenthood</span> for free</p>
                        <p className="lead">"Discover simple tips and tricks to grow happy, thriving plants. Start your journey into plant parenthood today!"</p>

                        <form>
                            <input type="text" placeholder="Enter your email address here..." className="form-control px-2 py-3 mb-3 mt-5"/>
                            <button className="subscribe fw-bold fs-5 mt-1">Subscribe</button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
     );
}

export default Joinus;