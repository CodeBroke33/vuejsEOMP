<template>
  <main class="container-fluid">
    <div class="mypic">

    </div>
  <div class="about ">
    <div class="image-wrap"></div>
    <h1 class="aboutme">About Me</h1>
    <span class="scroll ">Scroll Down</span>
    <span class="line"></span>
  </div>
  <div class="info">
    <h1> </h1>
  </div>
  </main>
</template>


<script>
  
</script>

<style scoped>
* {
  padding:0;
  margin:0;
  box-sizing: border-box;
}
main {
  padding: 46vh;
  background-color: black;
  min-height: 750px;
  height: 200vh;
  width: 100%;
}

.aboutme {
position: relative;
z-index: 1;
color: white;
font-size: 12rem;
font-weight: 500;
text-align: center;
line-height: 1;
margin-top: -8%;
/* transform: translateY(1000px);  */
font-family:  Righteous;

}
.mypic {
  position: absolute;
  width: 85%;
  max-width: 1000px;
  height: 250px;
  bottom: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(50%);
  background-image: url("../assets/tumblr_59ac39c4fd07fbac0b4b5d43cc86205c_c353f219_500.webp");
  background-size: 100%;
  background-position: 50% 58%;
  background-repeat: no-repeat;
}

.scroll {
  position: absolute;
  color:white;
  font-weight: 300;
  left: 50%;
  transform: translateX(-50%);
  bottom: 100px;
  height: 50px;
  font-family:  Righteous;
}

.line {
  position: absolute;
  width: 1px;
  height: 100px;
  left: 50%;
  transform: translateX(-50%);
  bottom: 0;
  background-image: linear-gradient(to top, white, grey);

}

.info {
font-family: Righteous !important;
padding: 50% 60%;

}



/* .hide {
  opacity: 0;
} */
</style>
