  <template>
    <main>
      <div class="container-fluid mt-5">
        <h1 class="we mb-4 text-black fs-1">Education & Experience</h1>

        <!-- Work Experience Section -->
        <section class="we mt-5">
          <h2 class="text-success text-decoration-underline">Work Experience</h2>
          <div class="row">
            <div class="col-md-6" v-for="(work, index) in workExperience" :key="index">
              <div class="card bg-white text-white mb-4">
                <div class="card-body">
                  <h5 class="card-title text-success">{{ work.position }}</h5>
                  <p class="card-text text-success">{{ work.company }}</p>
                  <p class="card-text text-success">{{ work.date }}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Education Section -->
        <section class="we mt-5">
          <h2 class="text-success text-decoration-underline">Education</h2>
          <div class="row">
            <div class="col-md-6" v-for="(edu, index) in education" :key="index">
              <div class="card bg-white text-white mb-4">
                <div class="card-body">
                  <h5 class="card-title text-success">{{ edu.degree }}</h5>
                  <p class="card-text text-success">{{ edu.school }}</p>
                  <p class="card-text text-success">{{ edu.date }}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

          <!-- Skills Section -->
          <section class="we mt-3">
        <h2 class="text-success text-decoration-underline">Skills</h2>
        <div class="row mx-auto">
          <div class="col-md-3 mx-auto" v-for="(skill, index) in skills" :key="index">
            <div class="card bg-white text-white" style="width: 200px; height: 200px;">
              <img :src="skill.image" class="card-img-top" alt="Skill Image" style="object-fit: cover; width: 100%; height: 100%;">
            </div>
          </div>
        </div>
      </section>

      </div>
    </main>
  </template>

  <script>
  export default {
    data() {
      return {
        workExperience: [
          {
            position: "Woolworths DC",
            company: "OPS Administration",
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
            image: "https://i.ibb.co/KsMT8ZS/pngwing-com-2.png"
          },
          {
            image: "https://i.ibb.co/m5jjjZt/pngwing-com-1.png"
          },
          {
            image: "https://i.ibb.co/1MQYMjL/pngwing-com-3.png"
          },
          {
            image: "https://i.ibb.co/4MCh8gx/1-v2vdf-Kq-D4-Mtm-TSg-NP0o5cg.webp"
          },
          {
            image: "https://i.ibb.co/w4ZSZFR/pngwing-com.png"
          },
          {
            image: "https://i.ibb.co/mTcyb5M/mysql.png"
          }
        ]
      };
    }
  };
  </script>

  <style scoped>
  div {
    padding: 5vh;
  }

  .we {
    font-family: Righteous;
  }


  </style>
