<template>
  <div class="footer container-fluid fixed-bottom">
    <div class="row">
      <p class="lead text-success">
        <b class="bold-text text-success">-Code by Razien Mackenzie &copy;</b>
        <span class="text-success">{{ currYear }}-</span>
      </p>
    </div>

    <div class="text text-success">
      <a href="https://github.com/CodeBroke33/" target="_blank">
        <i
          class="bi bi-github text-success"
          style="font-size: -1rem; margin-right: 1rem"
        ></i>
      </a>
      <a
        href="https://www.linkedin.com/in/razeen-mackenzie-9369932b0/"
        target="_blank"
      >
        <i
          class="bi bi-linkedin text-success"
          style="font-size: -1rem; margin-right: 1rem"
        ></i>
      </a>
      <!-- <a href="" target="_blank">
        <i
          class="bi bi-envelope-at text-white"
          style="font-size: -1rem; margin-right: 1rem"
        ></i>
      </a> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currYear: new Date().getFullYear(),
    };
  },
};
</script>

<style scoped>
.footer {
  background-color: rgba(0, 0, 0, 0.1); /* Translucent swamp green background */
  font-family: Righteous;
  border-radius: 0;
}

.bold-text {
  font-weight: bold;
  color: black;
}

span {
  color: black;
  font-weight: bold;
}

.lead {
  font-family: Righteous;
}
</style>
