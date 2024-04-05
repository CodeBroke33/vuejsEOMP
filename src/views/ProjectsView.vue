<!-- ProjectPage.vue -->
<template>
    <main>
      <div class="projects  mt-5">
      <h2 class="me text-success mb-4 text-succcess">Projects</h2>
      <div class="row">
        <div v-for="(project, index) in projects" :key="index" class="col-md-4">
          <div class="card mb-4">
            <img :src="project.image" class="card-img-top" alt="Project Image">
            <div class="card-body bg-white">
              <h5 class="card-title text-black">{{ project.name }}</h5>
              <p class="card-text text-success">{{ project.description }}</p>
              <a :href="project.siteUrl" class="btn btn-success" target="_blank">Visit Site</a>
              <a :href="project.githubUrl" class="btn btn-secondary" target="_blank">GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </main>
  </template>
  
  <script>
  export default {
    // data() {
    //   return {
    //     projects: [
    //       {
    //         title: 'Project 1',
    //         image: 'https://placekitten.com/300/200', // Replace with your image URL
    //         description: 'Description for Project 1.',
    //         siteUrl: 'https://example.com/project1',
    //         githubUrl: 'https://github.com/example/project1',
    //       },
    //       {
    //         title: 'Project 2',
    //         image: 'https://placekitten.com/300/200', // Replace with your image URL
    //         description: 'Description for Project 2.',
    //         siteUrl: 'https://example.com/project2',
    //         githubUrl: 'https://github.com/example/project2',
    //       },
    //       {
    //         title: 'Project 2',
    //         image: 'https://placekitten.com/300/200', // Replace with your image URL
    //         description: 'Description for Project 2.',
    //         siteUrl: 'https://example.com/project2',
    //         githubUrl: 'https://github.com/example/project2',
    //       },
    //       {
    //         title: 'Project 2',
    //         image: 'https://placekitten.com/300/200', // Replace with your image URL
    //         description: 'Description for Project 2.',
    //         siteUrl: 'https://example.com/project2',
    //         githubUrl: 'https://github.com/example/project2',
    //       },
    //       {
    //         title: 'Project 2',
    //         image: 'https://placekitten.com/300/200', // Replace with your image URL
    //         description: 'Description for Project 2.',
    //         siteUrl: 'https://example.com/project2',
    //         githubUrl: 'https://github.com/example/project2',
    //       },
    //       {
    //         title: 'Project 2',
    //         image: 'https://placekitten.com/300/200', // Replace with your image URL
    //         description: 'Description for Project 2.',
    //         siteUrl: 'https://example.com/project2',
    //         githubUrl: 'https://github.com/example/project2',
    //       },
    //     ],
    //   };
    // },
    computed: {

//  jobTitile(){
//     return this.$store.state.jobTitile
//   },
  projects(){
    return this.$store.state.projects
  }
}
};
  
  </script>
  
  <style scoped>
  .projects {
    padding: 6vh;
    font-family: righteous;
  }

  .me {
    font-size: 80px;
  }
  </style>
  