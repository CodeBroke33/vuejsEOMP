<template>
  <main class="container-fluid">
    <div class="home text-white">
 <h1>Hello, Im Razeen Mackenzie</h1>  
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
    height: 100%;
    width: 100%;
    filter: contrast(20);
    background: #000;
    overflow: hidden;
}

h1 {
    font-family: Righteous;
    color: white;
    font-size: 4rem;
    text-transform: uppercase;
    line-height: 1;
    animation: letterspacing 5s infinite alternate ease-in-out;
    display: block;
    position: absolute;
    left: 50%;
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


 















