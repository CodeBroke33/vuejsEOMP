<template>
  <main class="home text-white">
    <div>
      <div class="content">
        <img class="profile-img" src="https://lh3.googleusercontent.com/u/0/drive-viewer/AEYmBYQ0AhZThBLjgtmRYAxKtE3tGAGD0K-oTzb2Wl345WWD-2evoQWnaBp5sxaaQk0q07iAQ4ZRxtuUK4OAQh7yrPR3a1tgvg=w1242-h912" alt="Profile Photo">
 <h1><p>Hello,</p><p>Im Razeen Mackenzie</p><p>An Aspiring</p><p>Web Developer,</p><p>OPS Administrator</p><p>and</p><p>Graphic Designer</p></h1>  
      </div>
</div>
<div>
  <p></p>
</div>
  </main>
  
</template>

<!-- <script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  computed: {
    jobTitle(){
      return this.$store.state.jobTitle

    }
  }
  }
</script> -->

<style scoped>

main {
    display: flex;
    padding:46vh 45vw;
    margin: 100wh;
    position: relative;
    height: 100vh;
    width: 100vw;
    background: #000;
    overflow: hidden;
}

.content {
  display: flex;
  align-items: center;

}

.profile-img {
  width: 300px;
  /* height: ; */
  /* padding-right: rem; */
  margin-top: -8rem;
  border-radius: 50%; 
}


h1 {
    font-family: Righteous;
    color: white;
    font-size: 3rem;
    text-transform: uppercase;
    line-height: 1;
    animation: letterspacing 8s infinite alternate ease-in-out;
    display: block;
    position: absolute;
    filter: contrast(20);
    left: 70%;
    top: 50%;
    transform: translate3d(-50%, -50%, 0);
    letter-spacing: -2.2rem;
    white-space: nowrap;
}

@keyframes letterspacing {
    0% {
        letter-spacing: -2.2rem;
        filter: blur(.3rem);
    }

    50% {
        filter: blur(.4rem);
    }

    100% {
        letter-spacing: .5rem;
        filter: blur(0rem);
    }
}

</style>


 















