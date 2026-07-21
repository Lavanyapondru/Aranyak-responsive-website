function Plant() {
    return ( 
        <div>
            <div className="container">
                <div className="row plant">
                    <div className="col-lg-6">
                     <img src="/manwatering.png" className="w-100"/>
                    </div>
                    <div className="col-lg-6">
                        <h1 className="display-1 lh-1 mb-5"> Be a <span className="fw-bold">Plant Parent</span> today with <span className="title">Aranyak</span></h1>
                        <p className="lead fs-3 mb-5">First timer or experienced, we have something for you. Take a look at our vast collection of greenery & let us help you transform your household and front/back yard.</p>
                        <button className="btn bg-success text-light fs-5">Explore Catalog <i class="bi bi-arrow-right fs-5"></i></button>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row plant">
                    <div className="col-lg-6">
                      <h1 className="display-1 lh-1 mb-5 planting"> However Popular or <span className="text-warning fw-bold">rare plant</span><br/> it is</h1>
                        <p className="lead fs-3 mb-5">First timer or experienced, we have something for you. Take a look at our vast collection of greenery & let us help you transform your household and front/back yard.</p>
                        <button className="btn1 bg-success text-light fs-5 mb-5">Explore Catalog <i class="bi bi-arrow-right fs-5"></i></button> 
                    </div>
                    <div className="col-lg-6">
                        <img src="/planting.png" className="w-100"/>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row counter">
                    <div className="col-lg-4">
                        <img src="Counter1.png"/>
                        <h1 className="display-3 num">9,125,737</h1>
                        <h1 className="text-success">Plants <br/>Delivered</h1>
                    </div>
                    <div className="col-lg-4">
                        <img src="Counter2.png"/>
                        <h1 className="display-3 num">36,487</h1>
                        <h1 className="text-success">Happy <br/>customers</h1>

                    </div>
                    <div className="col-lg-4">
                        <img src="Counter3.png"/>
                        <h1 className="display-3 num">400+</h1>
                        <h1 className="text-success">Growing <br/>Catalog</h1>

                    </div>

                </div>
            </div>
        </div>
     );
}

export default Plant;