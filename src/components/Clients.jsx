function Clients() {
    return ( 
        <div>
            <div className="container">
                <div className="reviews  mb-5">
                    <h2>Review</h2>
                    <h1 className="team display-2 lh-1 mb-5 mt-5">Some words from <br/> our <span className="team1 fw-bold">Lovely customers</span></h1>

                    <div className="row mt-5 mb-5">
                        <div className="col-lg-6">
                            <div className="review">
                                <div className="review1">
                                    <img src="review1.png"/>
                                </div>
                                <div className="review2">
                                 <h3>Ahsoka Tano</h3>
                                <p className="lead lh-1">Firefighter</p>
                                <h6>I’m not really a customer of this site, but their free gardening guide helped me a lot. Thank you ...</h6>
                                </div>
                            </div>
                            <div className="review">
                                <div className="review1">
                                    <img src="review2.png"/>
                                </div>
                                <div className="review2">
                                 <h3>Ahsoka Tano</h3>
                                <p className="lead lh-1">Firefighter</p>
                                <h6>I’m not really a customer of this site, but their free gardening guide helped me a lot. Thank you ...</h6>
                                </div>
                            </div><div className="review">
                                <div className="review1">
                                    <img src="review3.png"/>
                                </div>
                                <div className="review2">
                                 <h3>Ahsoka Tano</h3>
                                <p className="lead lh-1">Firefighter</p>
                                <h6>I’m not really a customer of this site, but their free gardening guide helped me a lot. Thank you ...</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <img src="/clientletter.png" className="img-fluid"/>
                        </div>
                    </div>
                    <button className="btn1 bg-success text-light fs-5 btnreview">Load More <i class="bi bi-arrow-right fs-5"></i></button> 

                </div>
            </div>
        </div>
     );
}

export default Clients;