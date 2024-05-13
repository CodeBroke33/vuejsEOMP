<template>
  <div class="why container-fluid">
    <h1 class="about text-black mt-5 mb-4">About Me</h1>
    
    <p class="me fs-2 text-success">Hobbies & Interests</p>
    <br>
    <div class="row mb-4">
      <div class="col text-center text-success">
        <i class="bi bi-laptop text-black"></i>
        <p class="hey fs-4">Tech</p>
      </div>
      <div class="col text-center text-success">
        <i class="bi bi-person-arms-up text-black"></i>
        <p class="hey fs-4">Exercise</p>
      </div>
      <div class="col text-center text-success">
        <i class="bi bi-pencil text-black"></i>
        <p class="hey fs-4">Graphic Design</p>
      </div>
    </div>
    
    <div class="row mb-5">
      <div class="col text-center text-success">
        <i class="bi bi-controller text-black"></i>
        <p class="hey fs-4">Gaming</p>
      </div>
      <div class="col text-center text-success">
        <i class="bi bi-palette-fill text-black"></i>
        <p class="hey fs-4">Art</p>
      </div>
      <div class="col text-center text-success">
        <i class="bi bi-graph-up text-black"></i>
        <p class="hey fs-4">Day Trading</p>
      </div>
    </div>
    <br>
    <div class="info row">
      <div class="col-lg-6 me">
        <img class="profile-img img-fluid" src="https://i.ibb.co/30J6q1x/Whats-App-Image-2024-01-23-at-12-14-21.jpg" alt="Profile Photo" />
        <button class="view-cv-btn bg-success mt-3" @click="viewCV">View CV</button>
      </div>
      <div class="col-lg-6">
        <h1 class="text-black">My Story</h1>
        <p class="text-success mb-4">
          Greetings! I'm Razien Mackenzie, a tenacious individual fueled by a profound passion for computers and an unwavering commitment to personal and professional growth. Throughout my journey, I've encountered challenges that have tested my resolve, yet I've emerged stronger and more determined than ever. From my bustling days in high school, where I juggled the roles of a budding entrepreneur and a computer enthusiast, to my time at Woolworths, where I honed my skills and climbed the corporate ladder, I've embraced every opportunity to learn and evolve.
        </p>
        <p class="text-success mb-4">
          While my path hasn't always been straightforward, each setback has only fueled my determination to pursue my dreams. Now, as I stand at the threshold of a new chapter, I'm thrilled to embark on this journey with the Life Choices Coding Academy. It's a chance for me to delve deeper into the world of technology, to expand my knowledge, and to realize my fullest potential.
        </p>
        <p class="text-success">
          Join me as I navigate this exciting adventure, driven by the belief that with passion, perseverance, and a touch of resilience, anything is possible. Together, let's explore the endless possibilities that lie ahead and carve out a path to success in the ever-evolving landscape of technology. Welcome to my world—where dreams become reality, and challenges are merely stepping stones to greatness.
        </p>
      </div>
    </div>
    <br>
  </div>
</template>

<script>
export default {
  methods: {
    scrollToBottom() {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
      });
    },
    viewCV() {
      // Replace the link with your actual CV link
      window.open(
        "https://drive.google.com/file/d/1jPxwDnQC6dCmqyt_q8MT-ki_2UIGkLrn/view?usp=sharing",
        "Raziens CV"
      );
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.bi {
  font-size: 80px;
}

.why {
  padding: 4rem 2rem; /* Adjust padding as needed */
}

.hey {
  font-family: righteous;
}

.info {

  font-family: Righteous;
  
}

@media (min-width: 768px) {
  .info {
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
  }
}

.profile-img {
  border-radius: 1em;
}

.view-cv-btn {
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
}

.me {
  font-family: righteous;
}

.about {
  font-family: "Poppins", serif;
  font-size: 70px;
}
</style>
