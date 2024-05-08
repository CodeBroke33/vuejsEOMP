<template>
  <main class="home text-white px-50">
    <div class="container">
      <!-- Content with text and image -->
      <div class="row align-items-center">
        <div class="col-md-6">
          <div><br><br><br></div>
          <h1 class="text-shadow fw-bold text-md-center">
            <p class="text-black">Hello, I'm</p>
            <p class="text-black">Razeen Mackenzie</p>
            <p class="text-black">An Skilled</p>
            <p class="text-black">Software Engineer</p>
            <p class="text-black">&</p>
            <p class="text-black">Graphic Designer</p>
          </h1>
          <!-- View CV Button -->
          <div class="row justify-content-center">
            <div class="col-md-6 text-center">
              <button
                class="view-cv-btn bg-success mt-3 text-black fw-bold"
                @click="viewCV"
              >
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
      // Replace with your actual CV link
      window.open(
        "https://drive.google.com/file/d/1Chle8-8UZhykq7UKKW7drthbJPLagMTk/view?usp=sharing",
        "Raziens CV"
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
  font-family: righteous;
}

h1 {
  font-family: "Poppins", serif; /* Apply the Jersey 25 Charted font to h1 */
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
    height: 350px; /* Adjust the image height for smaller screens */
  }

  .view-cv-btn {
    font-size: 0.9rem; /* Adjust the button size for smaller screens */
  }
}

@media only screen and (max-width: 400px) {
  h1 {
    font-size: 1.5rem;
  }

  .profile-img {
    height: 300px; /* Adjust the image height for very small screens */
  }

  .view-cv-btn {
    font-size: 0.85rem; /* Adjust the button size for very small screens */
  }
}
</style>
