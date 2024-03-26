<template>
    <nav class="navbar navbar-expand-lg navbar-toggler bg-success fixed-top justify-content-end">

    <div class="container-fluid">
     <router-link to="/">
          <img class="img-fluid rounded-circle"  src="https://i.ibb.co/NsFC71t/RM-Logo.png" alt="logo">
     </router-link>
      <div id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/">
                <b class="container text-black">Home</b>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about">
                <b class="container text-black">About</b>
            </router-link>
          </li>
          <li class="nav-item">
              <router-link to="/resume">
                <b class="container text-black">Resume</b>
            </router-link>
          </li>
          <li class="nav-item">
              <router-link to="/project">
                <b class="container text-black">Projects</b>
            </router-link>
          </li>
          <li class="nav-item">
              <router-link to="/testimonial">
                <b class="container text-black">Testimonials</b>
            </router-link>
          </li>
          <li class="nav-item">
              <router-link to="/reachme">
                <b class="container text-black">Contact</b>
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