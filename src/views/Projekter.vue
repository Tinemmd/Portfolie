<template>
 
 <body>
 <div class="top">
  
  <div class="main">


    <h1 class="name">Projekter</h1>

<router-link to="/Projekt1"><div class="box"> <img src="../assets/projekter/manwoman.png" alt=""> </div></router-link>
<router-link to="/Projekt2"><div class="box2"> <img src="../assets/projekter/lion.png" alt=""> </div></router-link>
<router-link to="/Projekt3"><div class="box3"> <img src="../assets/projekter/ek.png" alt=""> </div></router-link>
<router-link to="/Projekt4"><div class="box4"> <img src="../assets/projekter/lady.png" alt=""> </div></router-link>
<router-link to="/Projekt5"><div class="box5"> <img src="../assets/projekter/Radio.jpg" alt=""> </div></router-link>
<router-link to="/Projekt6"><div class="box6"> <img src="../assets/projekter/woman4.png" alt=""> </div></router-link>
  
   
   <footer>
     <div class="flower"></div>
     <div class="flower2"></div>
     <p>Erfaring indenfor Content Creation, User Experience, Business og Design og Development</p>
   </footer>
  </div>
</div>
</body>
</template>


<script>

</script>


<style scoped>

.top {
   background-image: url(../assets/baggrund/plant3.jpg);
   background-repeat: no-repeat;
   background-size: cover;
   background-attachment: fixed;
   margin-right: -20px;
   padding-top: 90px;
   margin-top: -90px;
}


.name {
  font-size: 130px;
  margin-left: 650px;
  margin-top: -450px;
  font-family: 'Dancing Script', cursive;
  color: white;
    -webkit-animation:fade-in 2s cubic-bezier(.39,.575,.565,1.000) both;animation:fade-in 2s cubic-bezier(.39,.575,.565,1.000) both
}

@-webkit-keyframes fade-in{0%{opacity:0}100%{opacity:1}}@keyframes fade-in{0%{opacity:0}100%{opacity:1}}

.main {
    height: 1900px;
    margin-right: -20px;
    background-color: #EBE6E6;
    color: #022318;
    display: flex;
    margin-left: -100px;
    margin-top: 710px;
}

img {
  height: 500px;
}

.box {
  height: 500px;
  width: 600px;
  margin-top: 100px;
  margin-left: -920px;
}

.box2 {
  height: 500px;
  width: 600px;
  margin-top: 100px;
  margin-left: -250px;
}

.box3 {
  height: 500px;
  width: 600px;
  margin-top: 700px;
  margin-left: -1300px;
}

.box4 {
  height: 500px;
  width: 600px;
  margin-top: 700px;
  margin-left: -650px;
}

.box5 {
  height: 500px;
  width: 600px;
  margin-top: 1300px;
  margin-left: -1340px;
  z-index: 100;
}

.box6 {
  height: 500px;
  width: 600px;
  margin-top: 1300px;
  margin-left: -640px;
  z-index: 100;
}

.box:hover, .box2:hover, .box3:hover, .box4:hover, .box5:hover, .box6:hover {
        opacity: 0.3;
        display: inline-block;
        vertical-align: middle;
        -webkit-transform: perspective(1px) translateZ(0);
        transform: perspective(1px) translateZ(0);
        box-shadow: 0 0 1px rgba(0, 0, 0, 0);
        -webkit-transition-duration: 0.3s;
        transition-duration: 0.3s;
        -webkit-transition-property: transform;
        transition-property: transform;
        -webkit-transform: scale(1.1);
        transform: scale(1.02);
}


footer {
  height: 920px;
  background-color: #022318;
  margin-top: 1500px;
  margin-left: -1500px;
  padding-top: 40px;
}

.flower {
  background-image: url(../assets/baggrund/flower555.png);
  background-size: contain;
  height: 400px;
  width: 400px;
  margin-top: 480px;
  margin-left: 70px;
}

.flower2 {
  background-image: url(../assets/baggrund/flower.png);
  background-size: contain;
  height: 450px;
  width: 400px;
  margin-top: -450px;
  margin-left: 1190px;
  margin-right: 30px;
}

p {
  color: white;
  font-size: 55px;
  margin-top: -450px;
  margin-left: 560px;
  font-family: 'Dancing Script', cursive;
  width: 500px;
}




/* responsive styles iphone */

@media screen and (max-width: 700px) {
  
.top {
  background-size: contain;
  width: 100%;
}

 .name {
  font-size: 67px;
  margin-left: 80px;
}

img {
  height: 200px;
}

.main {
  width: 100%;
  margin-left: 0px;
}

.box {
  height: 300px;
  width: 320px;
  margin-top: 100px;
  margin-left: -235px;
  z-index: 100;
}

.box2 {
  height: 320px;
  width: 340px;
  margin-top: 400px;
  margin-left: -530px;
  z-index: 100;
}

.box3 {
  height: 320px;
  width: 340px;
  margin-top: 700px;
  margin-left: -710px;
}

.box4 {
  height: 320px;
  width: 340px;
  margin-top: 1000px;
  margin-left: -910px;
  z-index: 100;
}

.box5 {
  height: 320px;
  width: 340px;
  margin-top: 1290px;
  margin-left: -1100px;
  z-index: 100;
}

.box6 {
  height: 320px;
  width: 340px;
  margin-top: 1600px;
  margin-left: -1260px;
  z-index: 100;
}


footer {
  height: 500px;
  margin-top: 1700px;
  margin-left: -1500px;
  width: 100%;
}

.flower {
  height: 150px;
  width: 200px;
  margin-top: 310px;
  margin-left: 10px;
}

.flower2 {
  height: 150px;
  width: 200px;
  margin-top: -150px;
  margin-left: 220px;
}

p {
  font-size: 25px;
  margin-top: -400px;
  margin-left: 80px;
  width: 200px;
  font-family: 'Dancing Script', cursive;
}

}


/* responsive styles ipad*/

@media screen and (min-width: 700px) and (max-width: 1000px) {

.top {
  background-size: contain;
  width: 100%;
}

 .name {
  font-size: 77px;
  margin-left: 260px;
}

img {
  height: 250px;
}

.main {
  width: 100%;
  height: 1200px;
  margin: 0;
  margin-top: 700px;
}

.box {
  height: 300px;
  width: 320px;
  margin-top: 100px;
  margin-left: -480px;
  z-index: 100;
}

.box2 {
  height: 320px;
  width: 340px;
  margin-top: 100px;
  margin-left: -260px;
  z-index: 100;
}

.box3 {
  height: 320px;
  width: 340px;
  margin-top: 450px;
  margin-left: -860px;
  z-index: 100;
}

.box4 {
  height: 320px;
  width: 340px;
  margin-top: 450px;
  margin-left: -650px;
  z-index: 100;
}

.box5 {
  height: 320px;
  width: 340px;
  margin-top: 800px;
  margin-left: -1165px;
  z-index: 100;
}

.box6 {
  height: 320px;
  width: 340px;
  margin-top: 800px;
  margin-left: -930px;
  z-index: 100;
}


footer {
  height: 500px;
  margin-top: 1000px;
  margin-left: -1500px;
  width: 100%;
}

.flower {
  height: 250px;
  width: 200px;
  margin-top: 260px;
  margin-left: 20px;
}

.flower2 {
  height: 250px;
  width: 200px;
  margin-left: 500px;
  margin-top: -260px;
}

p {
  font-size: 35px;
  margin-top: -390px;
  margin-left: 90px;
  width: 600px;
}

}


</style>