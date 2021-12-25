import React from "react";

import "./Cards.css";

const Cards = () => {
  return (
    <div>
      <section class="py-5">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 mx-auto">
              <header class="text-left pb-5">
                <h1 class="h2">Famous Shayari</h1>
              </header>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-4 mx-auto">
              <blockquote class="blockquote blockquote-custom bg-white p-5 shadow rounded">
                <div class="blockquote-custom-icon bg-info shadow-sm">
                  <i class="fa fa-quote-left text-white"></i>
                </div>
                <p class="mb-0 mt-2 font-italic">
                  "Agar Thak Jaao Kabhi Toh Humse Kahna Hum Utha Lenge Tumko
                  Apni Baahon Mein Aap Ek Baar Pyar Karke Toh Dekho Humse Hum
                  Khusiyan Bichha Denge Aapki Raahon Mein Rab Kare Zindagi Mein
                  Aisa Mukaam Aaye...{" "}
                  <a href="#" class="text-info">
                    @hashmi
                  </a>
                  ."
                </p>
                <footer class="blockquote-footer pt-4 mt-4 border-top">
                  Someone famous in
                  <cite title="Source Title">unKnown</cite>
                </footer>
              </blockquote>
            </div>

            <div class="col-lg-4 mx-auto">
              <blockquote class="blockquote blockquote-custom bg-white p-5 shadow rounded">
                <div class="blockquote-custom-icon bg-info shadow-sm">
                  <i class="fa fa-quote-left text-white"></i>
                </div>
                <p class="mb-0 mt-2 font-italic">
                  "Meri Har Nazar Mein Basi Hai Tu, Meri Har Qalam Pe Likhi Hai
                  Tu, Tujhe Soch Loon To Ghazal Meri, Na Likh Sakun To Wo Khayal
                  Hai Tu.. Har Lamha Yun Kal Ko Talash Raha Hai Yeh Dil,Guzri
                  Yaadon Ko Fir Se Jeena Chah Raha Hai Yeh Dil,{" "}
                  <a href="#" class="text-info">
                    @consequat
                  </a>
                  ."
                </p>
                <footer class="blockquote-footer pt-4 mt-4 border-top">
                  Someone famous in
                  <cite title="Source Title">Unknown</cite>
                </footer>
              </blockquote>
            </div>

            <div class="col-lg-4 mx-auto">
              <blockquote class="blockquote blockquote-custom bg-white p-5 shadow rounded">
                <div class="blockquote-custom-icon bg-info shadow-sm">
                  <i class="fa fa-quote-left text-white"></i>
                </div>
                <p class="mb-0 mt-2 font-italic">
                  "Wo Nadaan Hai Baatein Samajhte Nahi, Yeh Din Yeh Raatein
                  Samjahte Nahi, Main Paas Bhi Jaun To Darr Jaate Hain, Main
                  Dard Nahi Dawa Hun Samajhte Nahi.. Dil Se Roye Magar Honto Se
                  Muskura Beithe,{" "}
                  <a href="#" class="text-info">
                    @consequat
                  </a>
                  ."
                </p>
                <footer class="blockquote-footer pt-4 mt-4 border-top">
                  Someone famous in
                  <cite title="Source Title">unKnown</cite>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Cards;
