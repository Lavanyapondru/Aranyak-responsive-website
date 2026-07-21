function Ablog() {
    return ( 
        <div>
            <div className="container">
                <div className="blogs  mb-5">
                    <h1 className="mt-5 mb-5">ARANYAK Blog</h1>
                    <h1 className="team display-3 mt-5 mb-5 lh-1">To Bring more <span className="team1 fw-bold">Green</span><br/> into <span className="team1">your Home</span></h1>
                       <div className="row mt-5 mb-5">
                            <div className="col mb-3">
              <div className="card h-100">
               <img src="/blog1.png" className="card-img-top proimg" alt="..."/>
               <div className="plants pt-3 pb-2">
                  <h5>Indoor Gardening</h5>
                 </div>
                <div className="card-body text-secondary">
                 <small>5 mins read</small>
                 <h3 className="card-title mb-3 text-dark">4 Ways to Level Up Your Indoor Gardening Game</h3>
                  <p className="card-text mb-3 fs-6">Indoor gardening is not just about maintaining plants but also about composition and arrangement in a ...</p>
                  <a href="#" className=" rm text-decoration-none text-dark fs-5 fw-bold">Read More...</a>
                  </div>
                  </div>
                  </div>

              <div className="col mb-3">
              <div className="card h-100">
               <img src="/blog2.png" className="card-img-top proimg" alt="..."/>
               <div className="plants pt-3 pb-2">
                  <h5>Fruit Plant</h5>
                 </div>
                <div className="card-body text-secondary">
                 <small>2 mins read</small>
                 <h3 className="card-title mb-3 text-dark">6 reasons to reconsider where to plant fruit tree</h3>
                  <p className="card-text mb-3 fs-6">Growing fruit trees indoors means you get to control everything from the light to humidity, right down to ....</p>
                  <a href="#" className="rm text-decoration-none text-dark fs-5 fw-bold">Read More...</a>
                  </div>
                  </div>
                  </div>
            
            <div className="col">
              <div className="card h-100">
               <img src="/blog3.png" className="card-img-top proimg" alt="..."/>
               <div className="plants pt-3 pb-2">
                  <h5>Cactus Gardening</h5>
                 </div>
                <div className="card-body text-secondary">
                 <small>2 mins read</small>
                 <h3 className="card-title mb-3 text-dark">Cactus: Some Common Myths and Misconceptions</h3>
                  <p className="card-text mb-3 fs-6">Cactus Plants symbolize endurance, persistence, & toughness. Gifting someone a cactus plant means ...</p>
                  <a href="#" className="rm text-decoration-none text-dark fs-5 fw-bold">Read More...</a>
                  </div>
                  </div>
                  </div>
                 </div>
                    <button className="btn1 bg-success text-light fs-5 btnreview">See Full Posts <i class="bi bi-arrow-right fs-5"></i></button> 

                </div>
            </div>
        </div>
     );
}

export default Ablog;