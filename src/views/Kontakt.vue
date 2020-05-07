<template>
  
  <div>

    <div class="top">
    
    <h1 class="name">Kontakt</h1>


   </div>

    <footer>
       <p>Tinefreudendahl@hotmail.com</p> 
       <div><a href="mailto:tinefreudendahl@hotmail.com" target="_blank"><div class="mailicon"></div></a></div>

        <p>https://www.linkedin.com/in/tine-freudendahl/</p> 
       <div><a href="https://www.linkedin.com/in/tine-freudendahl/" target="_blank"> <div class="in"></div></a></div>

        <p>30 44 27 01</p>
        <div class="tele"></div>
      
       <div class="flower"></div>
       <div class="flower2"></div>
    </footer>

  </div>

</template>


<script>
export default {
  name: 'About' //this is the name of the component
}
</script>




<style scoped>

.top {
   background-image: url(../assets/baggrund/plant4.jpg);
   background-repeat: no-repeat;
   background-size: cover;
   background-attachment: fixed;
   margin-right: -20px;
   margin-top: -90px;
   height: 800px;
}

.name {
  font-size: 130px;
  margin-left: -50px;
  padding-top: 340px;
  font-family: 'Dancing Script', cursive;
  color: white;
  -webkit-animation:fade-in 2s cubic-bezier(.39,.575,.565,1.000) both;animation:fade-in 2s cubic-bezier(.39,.575,.565,1.000) both
}

@-webkit-keyframes fade-in{0%{opacity:0}100%{opacity:1}}@keyframes fade-in{0%{opacity:0}100%{opacity:1}}


footer {
  margin-right: -20px;
  background-color: #85415d;
}


p {
  color: white;
  display: flex;
  justify-content: flex-start;
  padding-top: 70px;
  padding-left: 380px;
  height: 170px;
  font-size: 65px;
  font-family: 'Oswald', sans-serif;
}

.mailicon {
  background-image: url(../assets/baggrund/mail.png);
  background-size: contain;
  height: 50px;
  width: 200px;
  margin-left: 250px;
  margin-top: -70px;
   -webkit-animation:shake-vertical 7s cubic-bezier(.455,.03,.515,.955) infinite both;animation:shake-vertical 7s cubic-bezier(.455,.03,.515,.955) infinite both
}

.in {
  background-image: url(../assets/baggrund/in.png);
  background-size: contain;
  height: 80px;
  width: 200px;
  margin-top: -80px;
  margin-left: 250px;
   -webkit-animation:shake-vertical 7s cubic-bezier(.455,.03,.515,.955) infinite both;animation:shake-vertical 7s cubic-bezier(.455,.03,.515,.955) infinite both
}

@-webkit-keyframes shake-vertical {
  0%,
  100% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
  }
  10%,
  30%,
  50%,
  70% {
    -webkit-transform: translateY(-8px);
            transform: translateY(-8px);
  }
  20%,
  40%,
  60% {
    -webkit-transform: translateY(8px);
            transform: translateY(8px);
  }
  80% {
    -webkit-transform: translateY(6.4px);
            transform: translateY(6.4px);
  }
  90% {
    -webkit-transform: translateY(-6.4px);
            transform: translateY(-6.4px);
  }
}
@keyframes shake-vertical {
  0%,
  100% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
  }
  10%,
  30%,
  50%,
  70% {
    -webkit-transform: translateY(-8px);
            transform: translateY(-8px);
  }
  20%,
  40%,
  60% {
    -webkit-transform: translateY(8px);
            transform: translateY(8px);
  }
  80% {
    -webkit-transform: translateY(6.4px);
            transform: translateY(6.4px);
  }
  90% {
    -webkit-transform: translateY(-6.4px);
            transform: translateY(-6.4px);
  }
}


.tele {
  background-image: url(../assets/baggrund/tele.png);
  background-size: contain;
  height: 70px;
  width: 200px;
  margin-top: -80px;
  margin-left: 250px;
}


.flower {
  background-image: url(../assets/baggrund/flower7.png);
  background-size: contain;
  height: 350px;
  margin-left: 80px;
  margin-top: 40px;
}

.flower2 {
  background-image: url(../assets/baggrund/flower8.png);
  background-size: contain;
  height: 450px;
  margin-left: 950px;
  margin-top: -450px;
}


/* responsive styles iphone */

@media screen and (max-width: 700px) {
  
.top {
  background-size: contain;
  width: 100%;
}

 .name {
  font-size: 67px;
  margin-right: -50px;
}

footer {
  width: 100%;
}


p {
  color: white;
  display: flex;
  justify-content: flex-start;
  padding-top: 70px;
  padding-left: 60px;
  height: 170px;
  font-size: 20px;
  font-family: 'Oswald', sans-serif;
   text-align: start;
}

.mailicon {
  height: 20px;
  width: 100px;
  margin-left: 10px;
  margin-top: -97px;
}

.in {
  height: 40px;
  width: 200px;
  margin-top: -97px;
  margin-left: 10px;
}


.tele {
  height: 30px;
  width: 200px;
  margin-top: -100px;
  margin-left: 10px;
}


.flower {
  height: 150px;
  margin-left: 30px;
  margin-top: 65px;
}

.flower2 {
  height: 150px;
  margin-left: 190px;
  margin-top: -150px;
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
  display: flex;
  justify-content: center;
  margin-left: 15px;
  margin-top: 20px;
}

footer {
  width: 100%;
}


p {
  color: white;
  display: flex;
  justify-content: flex-start;
  padding-top: 70px;
  padding-left: 110px;
  height: 170px;
  font-size: 40px;
  font-family: 'Oswald', sans-serif;
   text-align: start;
}

.mailicon {
  height: 30px;
  width: 100px;
  margin-left: 10px;
  margin-top: -90px;
}

.in {
  height: 50px;
  width: 200px;
  margin-top: -90px;
  margin-left: 10px;
}


.tele {
  height: 40px;
  width: 200px;
  margin-top: -100px;
  margin-left: 10px;
}


.flower {
  height: 150px;
  margin-left: 30px;
  margin-top: 65px;
}

.flower2 {
  height: 150px;
  margin-left: 560px;
  margin-top: -150px;
}


}



</style>
