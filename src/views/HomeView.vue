<template>
  <main class="home text-white">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-6">
          <img
            class="profile-img img-fluid"
            src="https://i.ibb.co/Z2rv961/DSC-03021.jpg"
            alt="Profile Photo"
          />
        </div>
        <div class="col-md-6">
          <h1 class="text-shadow">
            <p class="text-success">Hello,</p>
            <p class="text-success">I'm Razeen Mackenzie</p>
            <p class="text-success">An Skilled</p>
            <p class="text-success">Web Developer,</p>
            <p class="text-success">OPS Administrator</p>
            <p class="text-success">and</p>
            <p class="text-success">Graphic Designer</p>
            <h1 class="we">Graphic Designer</h1>
          </h1>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  
}
</script>

<style scoped>
main {
  padding: 8% 5%;
  position: relative;
}

.profile-img {
  max-width: 100%;
  height: 500px;
  border-radius: 10%;
  border: solid 3px grey;
}

h1 {
  font-family: Righteous;
  font-size: 3rem;
  text-transform: uppercase;
  line-height: 1;
  white-space: nowrap;
}

.text-shadow {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.we {
  font-size: x-small;
}



</style>
