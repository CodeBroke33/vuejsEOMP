<template>
    <nav class="navbar navbar-expand-lg bg-success fixed-top ">
    <div class="container-fluid">
     <router-link to="/">
          <img class="img-fluid rounded-circle"  src="https://lh3.googleusercontent.com/u/0/drive-viewer/AEYmBYRd_KY4JPDxA86ZH1G9Uh0cWxivl3bEDI43QGsxE4K6xZzhWWflCNPgbRw7lQBsl1ubZxXyM0uEfA0TC53v9W_XMoQmrQ=w857-h892" alt="logo">
     </router-link>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/">
                <b class="container">Home</b>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about">
                <b class="container">About</b>
            </router-link>
          </li>
          <li class="nav-item">
              <router-link to="/resume">
                <b class="container">Resume</b>
            </router-link>
          </li>
          <li class="nav-item">
              <router-link to="/project">
                <b class="container">Projects</b>
            </router-link>
          </li>
          <li class="nav-item">
              <router-link to="/testimonial">
                <b class="container">Testimonials</b>
            </router-link>
          </li>
          <li class="nav-item">
              <router-link to="/reachme">
                <b class="container">Reach Me</b>
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
  
  </style>