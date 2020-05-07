<template>

    <body>
      
  <div class="home">

    <h1 class="name">Tine Freudendahl</h1>

    <div class="line">_________________________________________________________________</div>

    <h2>Multimediedesigner</h2>


<div class="main">

 <router-link to="/Projekter">
 <div class="manwoman"> <img src="../assets/projekter/collage.png" alt=""> </div>
  </router-link>

</div>

<footer>
     <a>Jeg studerer multimediedesign på Erhvervsakademiet Sydvest. 
       Jeg elsker at designe og jeg laver flere forskellige stilarter. 
       Under mine projekter kan man se nogle af mine forskellige designs. 
       Jeg har lavet illustrationer, hjemmesider, logoer, fotografier og meget andet. 
       Under CV kan du finde en oversigt over mine tidligere jobs og uddannelser samt et video Cv. 
       Find mine kontakt oplysninger på kontakt siden. 
    </a> 
    <div class="flower"></div>
    <div class="flower2"></div>
</footer>

  </div>
  </body>

</template>



<script>

</script>



<style scoped>

.home {
  background-image: url(../assets/baggrund/plant.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  padding-top: 10px;
  margin-top: -90px;
  margin-right: -20px;
}


.name {
  font-size: 145px;
  padding-right: 50px;
  margin-top: 320px;
  font-family: 'Dancing Script', cursive;
   -webkit-animation:fade-in 2s cubic-bezier(.39,.575,.565,1.000) both;animation:fade-in 2s cubic-bezier(.39,.575,.565,1.000) both
}


.line {
  padding-right: 40px;
  margin-top: -25px;
   -webkit-animation:fade-in 2s cubic-bezier(.39,.575,.565,1.000) both;animation:fade-in 2s cubic-bezier(.39,.575,.565,1.000) both
}

h2 {
  height: 20px;
  padding-right: 50px;
  margin-top: 5px;
  font-family: Oswald extralight;
  font-size: 40px;
   -webkit-animation:fade-in 2s cubic-bezier(.39,.575,.565,1.000) both;animation:fade-in 2s cubic-bezier(.39,.575,.565,1.000) both
}


@-webkit-keyframes fade-in{0%{opacity:0}100%{opacity:1}}@keyframes fade-in{0%{opacity:0}100%{opacity:1}}


.main {
  background-color: #EBE6E6;
  margin: 0;
  height: 900px;
  margin-right: -20px;
  margin-top: 300px;
}


img {
  height: 800px;
  margin-top: 100px;
  margin-left: 100px;
}


footer {
  height: 900px;
  margin-right: -20px;
  background-color: #022318;
  margin-top: -10px;
  padding-top: 20px;
}

a {
  color: white;
  margin-left: 150px;
  display: flex;
  width: 700px;
  margin-top: 30px;
  margin-left: 150px;
  font-family: Oswald extralight;
}

.flower {
  background-image: url(../assets/baggrund/flower.png);
  background-size: contain;
  background-repeat: no-repeat;
  height: 550px;
  width: 700px;
  margin-top: -135px;
  margin-left: 990px;
}

.flower2 {
  background-image: url(../assets/baggrund/flower2.png);
  background-size: contain;
  background-repeat: no-repeat;
  height: 350px;
  width: 700px;
  margin-top: -350px;
  margin-left: 70px;
}



/* responsive styles iphone*/

@media screen and (max-width: 700px) {


.home {
  background-size: contain;
  width: 100%;
}

 .name {
  font-size: 55px;
  padding-right: 10px;
  margin-top: 250px;
  font-family: 'Dancing Script', cursive;
}


h2 {
  height: 20px;
  padding-right: 10px;
  font-size: 25px;
  font-family: 'Oswald', sans-serif;
}

.line {
  margin-left: -90px;
}

.main {
  height: 400px;
  margin-top: 300px;
  width: 100%;
}

img {
  height: 250px;
  margin-left: -20px;
  margin-top: 80px;
}


footer {
  height: 500;
  width: 1550px;;
  margin-top: -10px;
  padding-top: 20px;
  width: 100%;
}

a {
  margin-left: 40px;
  width: 300px;
  font-size: 25px;
  margin-top: 30px;
  font-family: 'Oswald', sans-serif;
}

.flower {
  height: 150px;
  width: 200px;
  margin-top: 260px;
  margin-left: 250px;
}

.flower2 {
  height: 150px;
  width: 200px;
  margin-top: -150px;
  margin-left: 10px;
}

}

/* responsive styles ipad*/

@media screen and (min-width: 700px) and (max-width: 1000px) {


.home {
  background-size: contain;
  width: 100%;
}

 .name {
  font-size: 77px;
  display: flex;
  justify-content: center;
  margin-left: 20px;
  font-family: 'Dancing Script', cursive;
}


h2 {
  height: 20px;
  font-size: 25px;
  display: flex;
  justify-content: center;
  margin-left: 20px;
  font-family: 'Oswald', sans-serif;
}

.line {
  display: flex;
  justify-content: center;
  margin-left: 20px;
}

.main {
  height: 500px;
  margin-top: 300px;
  width: 100%;
}

img {
  height: 490px;
  margin-left: -60px;
  margin-top: 40px;
}


footer {
  height: 500;
  width: 1550px;;
  margin-top: -10px;
  padding-top: 20px;
  width: 100%;
}

a {
  margin-left: 150px;
  width: 470px;
  margin-top: 20px;
  font-size: 35px;
  font-family: 'Oswald', sans-serif;
}

.flower {
  height: 550px;
  width: 200px;
  margin-top: 60px;
  margin-left: 490px;
}

.flower2 {
  height: 550px;
  width: 200px;
  margin-left: 40px;
  margin-top: -520px;
}


}


</style>