<template>
  <main class="container-fluid">
    <div class="mypic"></div>
    <div class="about">
      <div class="image-wrap"></div>
      <h1 class="aboutme">About Me</h1>
      <span class="scroll text-success" @click="scrollToBottom">See More</span>
      <span class="line"></span>
    </div>
    <section>
      <div class="row info">
        <div class="col me">
          <img
            class="profile-img"
            src="https://i.ibb.co/30J6q1x/Whats-App-Image-2024-01-23-at-12-14-21.jpg"
            alt="Profile Photo"
          /><br>
          <button class="view-cv-btn bg-success" @click="viewCV">View CV</button>
        </div>
        <div class="col">
          <h1 class="text-black" >My Story</h1>
          <br/>
          <p class="text-success">
            Greetings! I'm Razien Mackenzie, a tenacious individual fueled by a
            profound passion for computers and an unwavering commitment to
            personal and professional growth. Throughout my journey, I've
            encountered challenges that have tested my resolve, yet I've emerged
            stronger and more determined than ever. From my bustling days in
            high school, where I juggled the roles of a budding entrepreneur and
            a computer enthusiast, to my time at Woolworths, where I honed my
            skills and climbed the corporate ladder, I've embraced every
            opportunity to learn and evolve.
          </p>
          <br />

          <p class="text-success">
            While my path hasn't always been straightforward, each setback has
            only fueled my determination to pursue my dreams. Now, as I stand at
            the threshold of a new chapter, I'm thrilled to embark on this
            journey with the Life Choices Coding Academy. It's a chance for me
            to delve deeper into the world of technology, to expand my
            knowledge, and to realize my fullest potential.
          </p>
          <br />

          <p class="text-success">
            Join me as I navigate this exciting adventure, driven by the belief
            that with passion, perseverance, and a touch of resilience, anything
            is possible. Together, let's explore the endless possibilities that
            lie ahead and carve out a path to success in the ever-evolving
            landscape of technology. Welcome to my world—where dreams become
            reality, and challenges are merely stepping stones to greatness.
          </p>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  methods: {
    scrollToBottom() {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
      });
    },
    viewCV() {
      // Replace the link with your actual CV link
      window.open('https://drive.google.com/file/d/1Chle8-8UZhykq7UKKW7drthbJPLagMTk/view?usp=sharing', 'Raziens CV');
    }
  }
}

</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
main {
  padding: 46vh;
  /* background-color: black; */
  min-height: 750px;
  height: 200vh;
  width: 100%;
}

.aboutme {
  position: relative;
  z-index: 1;
  color: white;
  font-size: 12rem;
  font-weight: 500;
  text-align: center;
  line-height: 1;
  margin-top: -8%;
  font-family: Righteous;
}
.mypic {
  position: absolute;
  width: 85%;
  border: solid 3px grey;
  max-width: 1000px;
  height: 250px;
  bottom: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(50%);
  background-image: url("../assets/tumblr_59ac39c4fd07fbac0b4b5d43cc86205c_c353f219_500.webp");
  background-size: 100%;
  background-position: 50% 58%;
  background-repeat: no-repeat;
}

.scroll {
  font-size: 2em;
  position: absolute;
  color: white;
  font-weight: 300;
  left: 50%;
  transform: translateX(-50%);
  bottom: 100px;
  height: 50px;
  font-family: Righteous;
  cursor: pointer;
}

.line {
  position: absolute;
  width: 1px;
  height: 100px;
  left: 50%;
  transform: translateX(-50%);
  bottom: 0;
  background-image: linear-gradient(to top, white, grey);
}

.info {
  display: flex;
  flex-direction: row;
  align-items: center;
  font-family: Righteous;
  color: white;
  position: absolute;
  left: 1em;
  top: 53em;
}

@media (min-width: 768px) {
  .info {
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
  }
}

.profile-img {
  width: auto; /* Adjust the max-width as needed */
  height: 400px;
  border-radius: 1em;
}

.view-cv-btn {
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin-top: 20px;
  cursor: pointer;
  border-radius: 5px;
}

.info div {
  flex: 1;
}

/* .hide {
  opacity: 0;
} */

.profile-img {
  border: solid 3px grey;
}
</style>
