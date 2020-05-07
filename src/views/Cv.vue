<template>


<div class="top">

  <h1 class="name">CV</h1>

  
<div class="body">


<div class="timeline">
  
<v-timeline :dense="$vuetify.breakpoint.smAndDown">
    <v-timeline-item
      color="#86ae79"
      fill-dot
      right
    >
      <v-card color="#022318">
        <v-card-title>
          <h2>Erhvervsakademiet Sydvest (2019-2021)</h2>
        </v-card-title>
            <v-col cols="12" md="13">
             <h4>Multimediedesign studerende: Færdigheder indenfor Content Creation, User Experience, Business og Design og Development</h4>
            </v-col>
      </v-card>
    </v-timeline-item>



    <v-timeline-item
      color="#f0a260"
      fill-dot
      left
      small
    >
      <v-card color="#022318">
        <v-card-title>
          <h2>Superbrugsen Skærbæk (2017-2019)</h2>
        </v-card-title>
            <v-col cols="12" md="13">
              <h4>Pakker: Mit arbejde i SuperBrugsen bestod af at pakke/levere varer til Renbæk fængsel.</h4>
            </v-col>
      </v-card>
    </v-timeline-item>



    <v-timeline-item
      color="#86ae79"
      fill-dot
      right
    >
      <v-card color="#022318">
        <v-card-title>
          <h2>Værnepligtig (2018)</h2>
        </v-card-title>
            <v-col
              v-for="n in 1"
              :key="n"
              cols="12"
              md="13"
            >
              <h4>Som værnepligtig hos Uddannelseskompagniet i Varde bestod hverdagens tjeneste primært af hård fysisk træning, undervisning og prøvelse i pressede situationer.</h4> 
            </v-col>
      </v-card>
    </v-timeline-item>


    <v-timeline-item
      color="#d9e168"
      fill-dot
      left
      small
    >
      <v-card color="#022318">
        <v-card-title>
          <h2>TMR Hjælpeinstruktur (2017)</h2>
        </v-card-title>
            <v-col cols="12" md="13">
              <h4>Som hjælpeinstruktur i Ribe fritidscenter bestod mine primære arbejdsopgaver af at kontrollere kundernes medlemskab, rengøring af træningsmateriale og assistere kunderne.</h4> 
            </v-col>
      </v-card>
    </v-timeline-item>


    <v-timeline-item
      color="#86ae79"
      fill-dot="white"
      right
    >
      <v-card color="#022318">
        <v-card-title>
          <h2>Røde Kors (2016-2017)</h2>
        </v-card-title>
            <v-col cols="12" md="13">
             <h4>Frivilligarbejder: Mit arbejde i Røde kors bestod af, at assitere kunder og oprydning/sortering i butikken.</h4> 
            </v-col>
      </v-card>
    </v-timeline-item>
  

     <v-timeline-item
      color="#f0a260"
      fill-dot="white"
      left
      small
    >
      <v-card color="#022318">
        <v-card-title>
          <h2>Handelsgymnasiet (2014-2017)</h2>
        </v-card-title>
            <v-col cols="12" md="13">
              <h4>HHX: Marketing med psykologilinjen.</h4>
            </v-col>
      </v-card>
    </v-timeline-item>
  </v-timeline>
  </div>

<h3>Video CV</h3>

  <div class="videobox">

<div class="video">
<iframe width="100%" height="500"
  src="https://www.youtube.com/embed/o9GDZgrR9Ow">
</iframe>
</div>
</div>

<footer>
  <div class="flower"></div>
  <div class="flower2"></div>

  
  <a href="https://firebasestorage.googleapis.com/v0/b/cv-pdf.appspot.com/o/cv.pdf?alt=media&token=3bb3fb1c-d4fd-4ed5-b8a6-0d7a7a38ba12" target="_blank">CV dokument - PDF</a>


</footer>

</div>
</div>
</template>


<script>

</script>


<style scoped>

.top {
   background-image: url(../assets/baggrund/plant2.jpg);
   background-repeat: no-repeat;
   background-size: cover;
   background-attachment: fixed;
   margin-right: -20px;
   padding-top: 310px;
   margin-top: -390px;
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

.body {
  background-color: #EBE6E6;
  margin-right: -20px;
  margin-top: 400px;
  color: #022318;
}


.timeline {
  margin-top: 150px;
  padding-top: 70px;
  margin-right: 150px;
  margin-left: 100px;
}

h2 {
  color: white;
}

h3 {
  margin-top: 100px;
  margin-left: -50px;
  font-size: 90px;
  font-family: 'Dancing Script', cursive;
}

h4 {
  color: white;
  text-align: start;
  display: flex;
}

.videobox {
  height: 560px;
  width: 800px;
  margin-left: 350px;
  margin-top: 50px;
}

iframe {
  border: white solid 10px;
}


footer {
  height: 700px;
  margin-right: -20px;
  background-color: #022318;
  margin-top: -250px;
  padding-top: 385px;
}

.flower {
  background-image: url(../assets/baggrund/flower6.png);
  background-size: contain;
  background-repeat: no-repeat;
  height: 350px;
  width: 700px;
  margin-top: -35px;
  margin-left: 1070px;
}

.flower2 {
  background-image: url(../assets/baggrund/flower3.png);
  background-size: contain;
  background-repeat: no-repeat;
  height: 400px;
  width: 700px;
  margin-top: -400px;
  margin-left: 70px;
}

a {
  color: white;
  margin-top: -320px;
  margin-left: 510px;
  font-family: 'Dancing Script', cursive;
  font-size: 57px;
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


/* responsive styles iphone */

@media screen and (max-width: 700px) {

.top {
  background-size: contain;
  width: 100%;
}

 .name {
  font-size: 67px;
  margin-left: 10px;
}

.body {
  background-color: #EBE6E6;
  margin-top: 300px;
  width: 100%;
}

.timeline {
  margin-top: 150px;
  padding-top: 70px;
  margin-right: 150px;
  margin-left: 12px;
  width: 350px;
  font-size: 20px;
}

h2 {
  color: white;
  font-size: 15px;
  font-family: 'Oswald', sans-serif;
}

h4 {
  color: white;
  font-size: 14px;
  font-family: 'Oswald', sans-serif;
}

h3 {
  margin-top: 100px;
  margin-left: -20px;
  font-size: 50px;
  font-family: 'Dancing Script', cursive;
}

iframe {
  width: 335px;
  height: 200px;
  border: white solid 2px;
  margin-left: 25px;
}

.videobox {
  height: 260px;
  width: 300px;
  margin-left: -10px;
  margin-top: 50px;
}


footer {
  height: 600px;
  width: 1550px;
  margin-top: -150px;
  padding-top: 385px;
  width: 100%;
}

.flower {
  height: 150px;
  width: 300px;
  margin-top: 64px;
  margin-left: 180px;
}

.flower2 {
  height: 160px;
  width: 300px;
  margin-top: -160px;
  margin-left: 20px;
}

a {
  color: white;
  margin-top: -330px;
  margin-left: 30px;
  font-size: 40px;
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
  display: flex;
  justify-content: center;
  margin-left: 10px;
}

.body {
  background-color: #EBE6E6;
  margin-top: 300px;
  width: 100%;
}

.timeline {
  margin-top: 150px;
  padding-top: 70px;
  display: flex;
  justify-content: center;
  width: 600px;
  font-family: 'Oswald', sans-serif;
}

h2 {
  color: white;
  font-size: 20px;
  font-family: 'Oswald', sans-serif;
}

h4 {
  color: white;
  font-size: 16px;
  font-family: 'Oswald', sans-serif;
}

h3 {
  margin-top: 100px;
  margin-left: -40px;
  font-size: 70px;
  font-family: 'Dancing Script', cursive;
}

iframe {
  width: 609px;
  height: 436px;
  border: white solid 2px;
  margin-left: 100px;
}

.videobox {
  height: 260px;
  width: 300px;
  margin-left: -10px;
  margin-top: 50px;
}


footer {
  height: 600px;
  width: 1550px;
  margin-top: -150px;
  padding-top: 385px;
  width: 100%;
}

.flower {
  height: 150px;
  width: 300px;
  margin-top: 65px;
  margin-left: 530px;
}

.flower2 {
  height: 160px;
  width: 300px;
  margin-top: -160px;
  margin-left: 20px;
}

a {
  color: white;
  margin-top: -240px;
  margin-left: 170px;
  font-size: 40px;
  font-family: 'Dancing Script', cursive;
}

}


</style>