<template>

<body>
  <div id="app">

    <router-link to="/">
    <img :src="image" /> 
    </router-link>
  

    <div id="nav">
      <div id="nav-container">
        <router-link to="/Projekter"> Projekter </router-link> 
        <router-link to="/Cv"> CV </router-link> 
        <router-link to="/Kontakt"> Kontakt </router-link>
      </div>
    </div>
    
    <router-view/>

  </div>

</body>

</template>



<script>
import image from "./assets/logo.png"

export default {
    data: function () {
        return {
            image: image
        }
    }
}

</script>

<style lang="scss">

#app {
  font-family: 'Oswald', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-size: x-large;
  color: rgb(255, 255, 255);
  padding-top: 50px;
}

img {
  height: 50px;
  padding-right: 1300px;
  margin-left: 50px;
  margin-top: -10px;
}

#nav-container {
  width: 40vw;
  flex-direction: row;
  display: flex;
  margin-top: -10px;
   position: relative;
  z-index: 9999999999999;
}

#nav {
  width: 100vw;
  height: 0px;
  justify-content: flex-end;
  margin-top: -40px;
  display: flex;
   position: relative;
  z-index: 9999999999999;
}

  a {
    color: #ffffff;
    text-decoration: none;
    font-size: 37px;
    flex-grow: 2;
    display: flex;

    &.router-link-exact-active {
      color: white; 
    }
  }


// responsive styles iphone

@media screen and (max-width: 700px) {

  #app {
    font-family: 'Oswald', sans-serif;
  }

  #nav-container {
  width: 40vw;
  flex-direction: row;
  display: flex;
  flex-grow: 1;
}

  #nav {
    display: flex;
    margin-top: 20px;
    margin-left: 25px;
  }

  a {
    font-size: 35px;
    display: flex;
  }

  
  img {
  height: 40px;
  margin-left: 10px;
  margin-top: -40px;
  }

}


/* responsive styles ipad*/

@media screen and (min-width: 700px) and (max-width: 1000px) {

  #app {
    font-family: 'Oswald', sans-serif;
  }


  #nav-container {
  width: 40vw;
  flex-direction: row;
  display: flex;
}

  #nav {
    display: flex;
    margin-top: -10px;
    margin-left: -15px;
  }

  a {
    font-size: 35px;
    display: flex;
  }

  
  img {
  height: 40px;
  margin-left: 10px;
  margin-top: -40px;
  }

}


</style>
