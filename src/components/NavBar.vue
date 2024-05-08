<template>
  <nav class="navbar navbar-expand-lg navbar-toggler fixed-top shadow">
    <div class="container-fluid">
      <router-link to="/">
        <img class="img-fluid rounded-circle shadow" src="https://i.ibb.co/NsFC71t/RM-Logo.png" alt="logo">
      </router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="container-fluid collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link to="/">
              <b class="container text-success">Home</b>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about">
              <b class="container text-success">About</b>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/resume">
              <b class="container text-success">Resume</b>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/project">
              <b class="container text-success">Projects</b>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/testimonial">
              <b class="container text-success">Reviews</b>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/reachme">
              <b class="container text-success">Contact</b>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

  <style scoped>
  .navbar {
  background-color: rgba(190, 190, 190, 0.1); 
  font-family: Righteous;
  border-radius: 0;
}
</style>
