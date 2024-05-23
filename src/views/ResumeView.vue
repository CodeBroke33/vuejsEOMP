<template>
  <div class="we">
    <div class="container">
      <!-- Education & Experience Heading -->

      <!-- Work Experience Section -->
      <div class="row justify-content-center text-center mt-4">
        <div class="row justify-content-center text-center mt-5">
          <div>
            <br><br>
          </div>
          <h1 class="he mb-4 text-black fw-bold fs-1">Education & Experience</h1>
        </div>
        <h2 class="text-success text-decoration-underline">Work Experience</h2>
        <div class="col-md-4" v-for="(work, index) in workExperience" :key="index">
          <div class="card shadow">
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
          <div class="card shadow mb-1">
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
            <div class="card shadow mb-3 mx-auto" style="width: 200px; height: 200px;">
              <img :src="skill.image" class="card-img-top" alt="Skill Image" style="object-fit: cover; width: 100%; height: 100%;">
            </div>
          </div>
        </div>
      </div>
      <h2 class="text-success text-decoration-underline">Badges</h2>
      <div class="row mb-4">
  <div class="col text-center text-black">
    <p class="hey fs-4">SCRUM Methodology</p>
    <img
      src="https://i.ibb.co/kxx0xBp/LCStudio-SCRUM-Badge.png"
      class="img-fluid rounded"
      alt="Sample Image"
    />
    <div class="mt-3">
      <a
        href="https://drive.google.com/file/d/1c7nTnJrJNoxhSEGdughylDv58yzRAHaM/view?usp=sharing"
        class="btn btn-success"
        target="_blank"
      >See More</a>
    </div>
  </div>

  <div class="col text-center text-black">
    <p class="hey fs-4">Cisco Python Essentials 1</p>
    <img
      src="https://i.ibb.co/M52VVY4/python-essentials-1-50.png"
      class="img-fluid rounded"
      alt="Sample Image"
    />
    <div class="mt-3">
      <a
        href="https://drive.google.com/file/d/1c7nTnJrJNoxhSEGdughylDv58yzRAHaM/view?usp=sharing"
        class="btn btn-success"
        target="_blank"
      >See More</a>
    </div>
  </div>
</div>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      workExperience: [
        {
          position: "Operations Administration",
          company: "Woolworths DC",
          date: "January 2019 - Present"
        },
        {
          position: "Software Development Intern",
          company: "LC Studios",
          date: "January 2019 - Present"
        }
      ],
      education: [
        {
          degree: "Matriculated",
          school: "Bridge Town High",
          date: "2012 - 2018"
        },
        {
          degree: "Full Stack Course",
          school: "Life Choices Coding Academy",
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
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

.we {
  font-family: Righteous;
}

h1 {
  font-family: 'Poppins', serif;
  font-size: 70px;
}

.card {
  transition: all 0.3s ease; /* Smooth transition for the hover effect */
}

.card:hover {
  transform: translateY(-10px); /* Lift the card on hover */
  box-shadow: 0 12px 24px 0 rgba(0, 0, 0, 0.2); /* Increase shadow on hover */
}
</style>
