<template>
  <main class="home text-white">
    <div class=row>
        <div class="col">
            <img class="profile-img img-fluid" src="https://i.ibb.co/Z2rv961/DSC-03021.jpg" alt="Profile Photo">
        </div>
        <div class="col">
            <h1><p>Hello,</p><p>Im Razeen Mackenzie</p><p>An Aspiring</p><p>Web Developer,</p><p>OPS Administrator</p><p>and</p><p>Graphic Designer</p></h1>  
        </div>
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


.profile-img {
  height: 500px;
  width: 500px;
  /* height: ; */
  /* padding-right: rem; */
  margin-top: -8rem;
  border-radius: 10%; 
  position: absolute;
  left: 10em;
  top: 14.6em;
}


h1 {
    font-family: Righteous;
    color: white;
    font-size: 3rem;
    text-transform: uppercase;
    line-height: 1;
    animation: letterspacing 5s infinite alternate ease-in-out;
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


 















