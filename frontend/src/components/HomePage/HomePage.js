import React from 'react'
import './HomePage.css';
import Cards from '../../components/centerCards/Cards'
const HomePage = () => {
    return (
        <div>
            <header>

<div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" style={{backgroundImage:" url('https://images.unsplash.com/photo-1494368308039-ed3393a402a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=943&q=80/1920x1080')"}}>
      <div class="carousel-caption">
        <h5 style={{fontStyle:"italic",fontSize:"15px"}}>Kisi Ko..</h5>
        <p>Ittna Bhe Na Chaho ka Bhula na Sako.</p>
      </div>
    </div>
    <div class="carousel-item" style={{backgroundImage: "url('https://images.unsplash.com/photo-1476370648495-3533f64427a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')"}}>
      <div class="carousel-caption">
        <h5 style={{fontStyle:"italic",fontSize:"15px"}}>Yad Hai</h5>
        <p>Har baar hum bena Ghalti ky bhi Ghalti maan lete thay kyun k dar legta tha khain tu humse <b style={{fontStyle:"italic",fontSize:"20px"}}>Rooth</b> na jaye.</p>
      </div>
    </div>
    <div class="carousel-item" style={{backgroundImage: "url('https://images.unsplash.com/photo-1519412203450-e04051dbb778?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')"}}>
      <div class="carousel-caption">
        <h5>Kittna Shouk se</h5>
        <h2 style={{fontStyle:"italic"}}>Chodh Diya</h2>
        <p>Baat kerna, Jaise Sadiyan se tere Upar Bojh the hum.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</header>
<div className="container text-center"><Cards/></div>
        </div>
    )
}

export default HomePage
