<template>
  <div class="we">
    <div class="container">
      <!-- Education & Experience Heading -->
      <div class="row justify-content-center text-center mt-5">
        <h1 class="mb-4 text-black fs-1">Education & Experience</h1>
      </div>

      <!-- Work Experience Section -->
      <div class="row justify-content-center text-center mt-4">
        <h2 class="text-success text-decoration-underline">Work Experience</h2>
        <div class="col-md-4" v-for="(work, index) in workExperience" :key="index">
          <div class="card" style="width: 100%;">
            <div class="card-body">
              <h5 class="card-title text-black">{{ work.position }}</h5>
              <p class="card-text text-success">{{ work.company }}</p>
              <p class="card-text text-success">{{ work.date }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Education Section -->
      <div class="row justify-content-center text-center mt-4">
        <h2 class="text-success text-decoration-underline">Education</h2>
        <div class="col-md-4" v-for="(edu, index) in education" :key="index">
          <div class="card mb-1" style="width: 100%;">
            <div class="card-body">
              <h5 class="card-title text-black">{{ edu.degree }}</h5>
              <p class="card-text text-success">{{ edu.school }}</p>
              <p class="card-text text-success">{{ edu.date }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Skills Section -->
      <div class="row justify-content-center text-center mt-4">
        <h2 class="text-success text-decoration-underline">Skills</h2>
        <div class="row justify-content-center">
          <div class="col-md-3" v-for="(skill, index) in skills" :key="index">
            <div class="card mb-3 mx-auto" style="width: 200px; height: 200p;">
              <img :src="skill.image" class="card-img-top" alt="Skill Image" style="object-fit: cover; width: 100%; height: 100%;">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
</template>

<script>
export default {
  data() {
    return {
      workExperience: [
        {
          position: "Woolworths DC",
          company: "Operations Administration",
          date: "January 2019 - Present"
        },
        {
          position: "LC Studios",
          company: "Software Development Intern",
          date: "January 2019 - Present"
        }
      ],
      education: [
        {
          degree: "Bridge Town High",
          school: "Matriculated",
          date: "2012 - 2018"
        },
        {
          degree: "Life Choices Coding Academy",
          school: "Full Stack Course",
          date: "2023 - 2024"
        }
      ],
      skills: [
        {
          image: "https://i.ibb.co/7XPqbkH/1-v2vdf-Kq-D4-Mtm-TSg-NP0o5cg.webp"
        },
        {
          image: "https://i.ibb.co/g3tYMnR/javascript-logo-removebg-preview.png"
        },
        {
          image: "https://i.ibb.co/dbCMpD0/pngwing-com.png"
        },
        {
          image: "https://i.ibb.co/nLTNX5Q/pngwing-com-2.png"
        },
        {
          image: "https://i.ibb.co/jhtsk2f/mysql.png"
        },
        {
          image: "https://i.ibb.co/zRccktm/download-removebg-preview.png"
        },
        {
          image: "https://i.ibb.co/hZqMn8M/Bootstrap.png"
        },
        {
          image: "https://i.ibb.co/QH7P6ZJ/CSS.png"
        }
      ]
    };
  },
};
</script>

<style scoped>
.we {
  font-family: Righteous;
}
</style>
