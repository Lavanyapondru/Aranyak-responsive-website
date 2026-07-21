import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';


function Ourproducts() {
    return ( 
        <div>

            <div className="container">
                <div className="ourproducts mb-3">
                <h2>Our Products</h2>
                <h1 className="display-3 team"><span className="team1 fw-bold display-2">New</span> Arrivals</h1>
                <div className="products mt-5 mb-5">
                    <Swiper
              freeMode={true}
              pagination={{ clickable: true }}
              modules={[FreeMode, Pagination]}
              className="mySwiper"
              breakpoints={{
                320: { slidesPerView: 1, spaceBetween: 10 },   // mobile
                768: { slidesPerView: 2, spaceBetween: 20 },   // tablet
                1024: { slidesPerView: 3, spaceBetween: 30 },
                1400: { slidesPerView: 3, spaceBetween: 30 },  
              }}>
        <SwiperSlide>
            <div className="col">
              <div className="card">
               <img src="/product1.png" className="card-img-top proimg" alt="..."/>
               <div className="plants pt-3 pb-2">
                  <h5><i class="bi bi-file-earmark-word-fill"></i>  Add to wishlist</h5>
                  <h5><i class="bi bi-cart-fill"></i>  Add to cart</h5>
                 </div>
                <div className="card-body text-secondary">
                 <h1 className="card-title mt-3 mb-3">Philodendron</h1>
                  <p className="card-text mb-3">The Philodendron White Princess has been around for some time in private collections.But they have hit the market now in full big potted plants.</p>
                  </div>
                  </div>
                  </div>
        </SwiperSlide>
        <SwiperSlide>
              <div className="col">
              <div className="card">
               <img src="/product2.png" className="card-img-top proimg" alt="..."/>
               <div className="plants pt-3 pb-2">
                  <h5><i class="bi bi-file-earmark-word-fill"></i>  Add to wishlist</h5>
                  <h5><i class="bi bi-cart-fill"></i>  Add to cart</h5>
                 </div>
                <div className="card-body text-secondary">
                 <h1 className="card-title mt-3 mb-3">Monstera Obliqua Peruvian</h1>
                  <p className="card-text mb-1">As it is a small species. Monstera Obliqua is uncommon.Another reason for its scarcity is that grows slowly and has short selling seasons.</p>
                  </div>
                  </div>
                  </div>

        </SwiperSlide>
        <SwiperSlide>
            <div className="col">
              <div className="card">
               <img src="/product3.png" className="card-img-top proimg" alt="..."/>
               <div className="plants pt-3 pb-2">
                  <h5><i class="bi bi-file-earmark-word-fill"></i>  Add to wishlist</h5>
                  <h5><i class="bi bi-cart-fill"></i>  Add to cart</h5>
                 </div>
                <div className="card-body text-secondary">
                 <h1 className="card-title mt-3 mb-3">Norfolk Island Pine</h1>
                  <p className="card-text mb-3">Although a lively addition to your home all year round- The Norfolk Island Pine Shines.As a live holiday tree during the winter season.</p>
                  </div>
                  </div>
                  </div>
             </SwiperSlide>
        <SwiperSlide>
            <div className="col">
              <div className="card">
               <img src="/product4.png" className="card-img-top proimg" alt="..."/>
               <div className="plants pt-3 pb-2">
                  <h5><i class="bi bi-file-earmark-word-fill"></i>  Add to wishlist</h5>
                  <h5><i class="bi bi-cart-fill"></i>  Add to cart</h5>
                 </div>
                <div className="card-body text-secondary">
                 <h1 className="card-title mt-3 mb-3">Bromeliad Aechmea Pink</h1>
                  <p className="card-text mb-1">Featuring colorful, long-lasting blooms.The Bromeliad Aechmea Pink is a unique flowering plant to add a touch of Tropics with lasting blooms.</p>
                  </div>
                  </div>
                  </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="col">
              <div className="card">
               <img src="/product5.png" className="card-img-top proimg" alt="..."/>
               <div className="plants pt-3 pb-2">
                  <h5><i class="bi bi-file-earmark-word-fill"></i>  Add to wishlist</h5>
                  <h5><i class="bi bi-cart-fill"></i>  Add to cart</h5>
                 </div>
                <div className="card-body text-secondary">
                 <h1 className="card-title mt-3 mb-3">Spider PLant</h1>
                  <p className="card-text mb-1">The fast-growing shoots produce little "Babies".That you can Re-pot for added greenary elsewhere.Just stick to well-lit spots water weekly.</p>
                  </div>
                  </div>
                  </div>
        </SwiperSlide>
        
        
      </Swiper>
                </div>
                </div>
            </div>

            <div className="container">
              <div className="littleplants">
                <h1 className="display-3 team text-end"><span className="team1 fw-bold display-2">Popular</span> Little Plants</h1>
                <div className="products mt-5 mb-5">
                    <Swiper
                    freeMode={true}
              pagination={{ clickable: true }}
              modules={[FreeMode, Pagination]}
              className="mySwiper"
              breakpoints={{
                320: { slidesPerView: 1, spaceBetween: 10 },
                768: { slidesPerView: 2, spaceBetween: 20 },
                1024: { slidesPerView: 3, spaceBetween: 30 },
                1400: { slidesPerView: 3, spaceBetween: 30 },
              }}>
        <SwiperSlide>
              <div className="col">
              <div className="card">
               <img src="/product6.png" className="card-img-top proimg" alt="..."/>
               <div className="plants pt-3 pb-2">
                  <h5><i class="bi bi-file-earmark-word-fill"></i>  Add to wishlist</h5>
                  <h5><i class="bi bi-cart-fill"></i>  Add to cart</h5>
                 </div>
                <div className="card-body text-secondary">
                 <h1 className="card-title mt-3 mb-3">Snake/Sanseveria</h1>
                  <p className="card-text mb-3">Sanseverias are succulent plants.They have strong,stiff,succulent leaves that store water. These plants release oxygen in the night.</p>
                  </div>
                  </div>
                  </div>

        </SwiperSlide>
        <SwiperSlide>
            <div className="col">
              <div className="card">
               <img src="/product4.png" className="card-img-top proimg" alt="..."/>
               <div className="plants pt-3 pb-2">
                  <h5><i class="bi bi-file-earmark-word-fill"></i>  Add to wishlist</h5>
                  <h5><i class="bi bi-cart-fill"></i>  Add to cart</h5>
                 </div>
                <div className="card-body text-secondary">
                 <h1 className="card-title mt-3 mb-3">Bromeliad Aechmea Pink</h1>
                  <p className="card-text mb-1">Featuring colorful, long-lasting blooms.The Bromeliad Aechmea Pink is a unique flowering plant to add a touch of Tropics with lasting blooms.</p>
                  </div>
                  </div>
                  </div>
             </SwiperSlide>
        <SwiperSlide>
            <div className="col">
              <div className="card">
               <img src="/product7.png" className="card-img-top proimg" alt="..."/>
               <div className="plants pt-3 pb-2">
                  <h5><i class="bi bi-file-earmark-word-fill"></i>  Add to wishlist</h5>
                  <h5><i class="bi bi-cart-fill"></i>  Add to cart</h5>
                 </div>
                <div className="card-body text-secondary">
                 <h1 className="card-title mt-3 mb-3">Parlor Palm</h1>
                  <p className="card-text mb-3">The Parlor Palm(Chamaedorea Elegans) has long been used as an indoor plant.NASA gave this plant a high purifying score.</p>
                  </div>
                  </div>
                  </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="col">
              <div className="card">
               <img src="/product2.png" className="card-img-top proimg" alt="..."/>
               <div className="plants pt-3 pb-2">
                  <h5><i class="bi bi-file-earmark-word-fill"></i>  Add to wishlist</h5>
                  <h5><i class="bi bi-cart-fill"></i>  Add to cart</h5>
                 </div>
                <div className="card-body text-secondary">
                 <h1 className="card-title mt-3 mb-3">Monstera Obliqua Peruvian</h1>
                  <p className="card-text mb-1">As it is a small species. Monstera Obliqua is uncommon.Another reason for its scarcity is that grows slowly and has short selling seasons.</p>
                  </div>
                  </div>
                  </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="col">
              <div className="card">
               <img src="/product1.png" className="card-img-top proimg" alt="..."/>
               <div className="plants pt-3 pb-2">
                  <h5><i class="bi bi-file-earmark-word-fill"></i>  Add to wishlist</h5>
                  <h5><i class="bi bi-cart-fill"></i>  Add to cart</h5>
                 </div>
                <div className="card-body text-secondary">
                 <h1 className="card-title mt-3 mb-3">Philodendron</h1>
                  <p className="card-text mb-3">The Philodendron White Princess has been around for some time in private collections.But they have hit the market now in full big potted plants.</p>
                  </div>
                  </div>
                  </div>
        </SwiperSlide>   
      </Swiper>
                </div>
              </div>
            </div>

            <div className="container">
              <div className="careplants mb-5">
                <h1 className="display-3 team"><span className="team1 fw-bold display-2">Easy</span> to care plants</h1>
                 <div className="products">
                  <Swiper
              freeMode={true}
              pagination={{ clickable: true }}
              modules={[FreeMode, Pagination]}
              className="mySwiper"
              breakpoints={{
                320: { slidesPerView: 1, spaceBetween: 10 },
                768: { slidesPerView: 2, spaceBetween: 20 },
                1024: { slidesPerView: 3, spaceBetween: 30 },
                1400: { slidesPerView: 3, spaceBetween: 30 },
              }}
      >
        <SwiperSlide>
              <div className="col">
              <div className="card">
               <img src="/product8.png" className="card-img-top proimg" alt="..."/>
               <div className="plants pt-3 pb-2">
                  <h5><i class="bi bi-file-earmark-word-fill"></i>  Add to wishlist</h5>
                  <h5><i class="bi bi-cart-fill"></i>  Add to cart</h5>
                 </div>
                <div className="card-body text-secondary">
                 <h1 className="card-title mt-3 mb-3">Kalanchoe</h1>
                  <p className="card-text mb-3">This water-retaining succulent grows colourful.Bell-Shaped flowers and withstands dry climates and terrible temperature swings.</p>
                  </div>
                  </div>
                  </div>

        </SwiperSlide>
        <SwiperSlide>
            <div className="col">
              <div className="card">
               <img src="/product1.png" className="card-img-top proimg" alt="..."/>
               <div className="plants pt-3 pb-2">
                  <h5><i class="bi bi-file-earmark-word-fill"></i>  Add to wishlist</h5>
                  <h5><i class="bi bi-cart-fill"></i>  Add to cart</h5>
                 </div>
                <div className="card-body text-secondary">
                 <h1 className="card-title mt-3 mb-3">Philodendron</h1>
                  <p className="card-text mb-3">The Philodendron White Princess has been around for some time in private collections.But they have hit the market now in full big potted plants.</p>
                  </div>
                  </div>
                  </div>
             </SwiperSlide>
        <SwiperSlide>
            <div className="col">
              <div className="card">
               <img src="/product9.png" className="card-img-top proimg" alt="..."/>
               <div className="plants pt-3 pb-2">
                  <h5><i class="bi bi-file-earmark-word-fill"></i>  Add to wishlist</h5>
                  <h5><i class="bi bi-cart-fill"></i>  Add to cart</h5>
                 </div>
                <div className="card-body text-secondary">
                 <h1 className="card-title mt-3 mb-3">Peace Lily</h1>
                  <p className="card-text mb-3">If you're prone to overwatering try spathiphyllum, with enough light.They'll also produce their Spade-Shaped flowers throuhout the year.</p>
                  </div>
                  </div>
                  </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="col">
              <div className="card">
               <img src="/product5.png" className="card-img-top proimg" alt="..."/>
               <div className="plants pt-3 pb-2">
                  <h5><i class="bi bi-file-earmark-word-fill"></i>  Add to wishlist</h5>
                  <h5><i class="bi bi-cart-fill"></i>  Add to cart</h5>
                 </div>
                <div className="card-body text-secondary">
                 <h1 className="card-title mt-3 mb-3">Spider Plant</h1>
                  <p className="card-text mb-3">The fast-growing shoots produce little "Babies".That you can Re-pot for added greenary elsewhere.Just stick to well-lit spots water weekly.</p>
                  </div>
                  </div>
                  </div>
        </SwiperSlide> 
      </Swiper>
                        <button className="btn bg-success text-light fs-5 btncatalog">see full  Catalog <i class="bi bi-arrow-right fs-5"></i></button>

                 </div>

              </div>
            </div>
        </div>
     );
}

export default Ourproducts;