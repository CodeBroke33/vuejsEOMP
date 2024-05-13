<template>
  <main class="home text-white px-50">
    <div class="container">
      <!-- Content with text and image -->
      <div class="row align-items-center">
        <div class="col-md-6">
          <div><br><br><br></div>
          <h1 class="text-shadow fw-bold text-md-center">
            <p class="pulse-text text-black">Hello, I'm</p> 
            <p class="pulse-text text-black">Razien Mackenzie</p>
            <p class="pulse-text text-black">A Skilled</p>
            <p class="pulse-text text-black">Software Engineer</p>
            <p class="pulse-text text-black">&</p>
            <p class="pulse-text text-black">Graphic Designer</p>
          </h1>
          <!-- View CV Button -->
          <div class="row justify-content-center">
            <div class="col-md-6 text-center">
              <button
                class="view-cv-btn bg-success mt-3 text-black fw-bold"
                @click="viewCV"
               style="font-family: righteous;">
                View CV
              </button>
            </div>
          </div>
          <div><br /></div>
        </div>
        <div class="col-md-6 shadow rounded-5">
          <img
            class="profile-img img-fluid"
            src="https://i.ibb.co/Z2rv961/DSC-03021.jpg"
            alt="Profile Photo"
          />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  methods: {
    viewCV() {
      window.open(
        "https://drive.google.com/file/d/1oCwzxAfnMYHEjuFRLgD2equPHcWVvdLs/view?usp=sharing",
        "_blank"
      );
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

main {
  padding: 8% 5%;
  position: relative;
}

.profile-img {
  max-width: 100%;
  height: 500px;
  border-radius: 10%;
  border: solid 3px rgb(0, 0, 0);
}

.view-cv-btn {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 1rem;
  font-family: 'Righteous', sans-serif;
}

h1 {
  font-family: 'Poppins', serif;
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

.pulse-text {
  animation: pulse 1.5s infinite; /* Apply the pulse animation */
}

@keyframes pulse {
  0% {
    transform: scale(1); /* Normal size */
  }
  50% {
    transform: scale(1.05); /* Slightly larger */
  }
  100% {
    transform: scale(1); /* Back to normal size */
  }
}

/* Responsive Styling */
@media only screen and (max-width: 768px) {
  h1 {
    font-size: 2.5rem;
  }
}

@media only screen and (max-width: 576px) {
  h1 {
    font-size: 2rem;
  }

  .profile-img {
    height: 350px;
  }

  .view-cv-btn {
    font-size: 0.9rem;
  }
}

@media only screen and (max-width: 400px) {
  h1 {
    font-size: 1.5rem;
  }

  .profile-img {
    height: 300px;
  }

  .view-cv-btn {
    font-size: 0.85rem;
  }
}


</style>
