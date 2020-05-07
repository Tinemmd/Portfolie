<template>
  
  <body>
    <div class="topbox"></div>
    <div class="main"></div>

    <h1 class="name">Fotografi - Radio Memphis</h1>

    <div class="box"></div>
    <p> <b> Denne fotografi er taget i forbindelse med en konkurrence på Erhvervsakademiet Sydvest. 
        Billedet hedder Radio Memphis, og vandt en tredje plads.</b>
    </p>
      
  </body>
</template>


<script>

</script>


<style scoped>


.topbox {
    margin-right: -20px;
    height: 170px;
    background-color: #022318;
    margin-top: -90px;
}

.main {
    background-image: url(../assets/projekter/Radio.jpg) !important;
    background-size: cover;
    background-attachment: fixed;
    margin-right: -20px;
    height: 1300px;
    margin-top: 0px;
    opacity: 50%;
    z-index: 100;
}


.name {
  font-size: 90px;
  margin-left: 20px;
  margin-top: -1200px;
  font-family: 'Dancing Script', cursive;
  color: #022318;
  -webkit-animation:fade-in 2s cubic-bezier(.39,.575,.565,1.000) both;animation:fade-in 2s cubic-bezier(.39,.575,.565,1.000) both 
}

@-webkit-keyframes fade-in{0%{opacity:0}100%{opacity:1}}@keyframes fade-in{0%{opacity:0}100%{opacity:1}} 

.box {
  background-image: url(../assets/projekter/Radio.jpg);
  background-size: contain;
  border: #022318 solid 4px;
  height: 452px;
  width: 600px;
  margin-top: 100px;
  margin-left: 100px;
  z-index: 100;
  position: absolute;
}

p {
    color: #022318;
    font-size: 35px;
    margin-left: 750px;
    margin-top: 120px;
    width: 500px;
    text-align: start;
    z-index: 100;
    position: absolute;
    font-family: 'Oswald', sans-serif;
}

/* responsive styles iphone */

@media screen and (max-width: 700px) {
  
.topbox {
    margin-right: -20px;
    height: 130px;
    margin-top: -90px;
}

 .name {
  font-size: 40px;
  margin-left: -10px;
}


.box {
  height: 245px;
  width: 325px;
  margin-top: 80px;
  margin-left: 20px;
}

p {
    font-size: 26px;
    margin-left: 30px;
    margin-top: 450px;
    width: 300px;
    font-family: 'Oswald', sans-serif;
}

}


/* responsive styles ipad*/

@media screen and (min-width: 700px) and (max-width: 1000px) {

.topbox {
    margin-right: -20px;
    height: 130px;
    margin-top: -90px;
}

.name {
  font-size: 50px;
  margin-left: -20px;
}


.box {
  height: 375px;
  width: 496px;
  margin-top: 80px;
  margin-left: 130px;
}

p {
    font-size: 30px;
    margin-left: 160px;
    margin-top: 490px;
    width: 400px;
    font-family: 'Oswald', sans-serif;
}

}


</style>
