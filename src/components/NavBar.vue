<template>
  <nav class="navbar navbar-expand-lg navbar-toggler bg-success fixed-top justify-content-end">
    <div class="container-fluid">
      <router-link to="/">
        <img class="img-fluid rounded-circle" src="https://i.ibb.co/NsFC71t/RM-Logo.png" alt="logo">
      </router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="container-fluid collapse navbar-collapse d-flex-end" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link to="/">
              <b class="container text-white">Home</b>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about">
              <b class="container text-white">About</b>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/resume">
              <b class="container text-white">Resume</b>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/project">
              <b class="container text-white">Projects</b>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/testimonial">
              <b class="container text-white">Testimonials</b>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/reachme">
              <b class="container text-white">Contact</b>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
  
  <script>
      export default {
          data(){
              return
          }
      }
  </script>
  
  <style scoped>
  .navbar {
 display: auto;
 justify-content: end;
 align-items: end;  
 font-family:  Righteous;
 border-radius: 0%;
  }
  </style>