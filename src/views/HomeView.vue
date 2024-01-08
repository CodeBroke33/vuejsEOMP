<template>
  <div class="home">
  </div>
  <div>
    <p></p>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  computed: {
    jobTitle(){
      return this.$store.state.jobTitle

    }
  }
  }
</script>


















