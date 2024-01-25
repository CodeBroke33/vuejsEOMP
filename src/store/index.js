import { createStore } from 'vuex'
 const dataUrl = 'https://codebroke33.github.io/vuejsEOMPdata/data/'
 export default createStore({
  state: {
    jobtitle: null,
    about: null,
    education: null,
    skills: null,
    testimonials: null,
    projects:null
  },
  getters: {
  },
  mutations: {
    setJobtitle (state, value){
      state.jobtitle = value
    },
    setAbout (state,value){
      state.about = value
    },
    setEducation (state,value){
      state.education = value
    },
    setSkills (state,value){
      state.skills = value
    },
    setTestimonials (state,value){
      state.testimonials = value
    },
    setProjects (state,value){
      state.projects = value
    },
  },
  actions: {
    // async fetchTestimonial(context){
    //   let res = await fetch(dataUrl)
    //   let {testimonials} =  res
    //   context.commit('setTestimonials',testimonials)
    // },
    async fetchData(context){
      let result = await fetch(dataUrl)
      let { 
        about,
        education,
        jobTitle,
        projects,
        skills,
        testimonials,
      } = await result.json()
      context.commit('setAbout', about)
      context.commit('setEducation', education)
      context.commit('setJobTitle', jobTitle)
      context.commit('setProjects', projects)
      context.commit('setSkills', skills)
      context.commit('setTestimonials', testimonials)
    }
  },
  modules: {
  }
})
