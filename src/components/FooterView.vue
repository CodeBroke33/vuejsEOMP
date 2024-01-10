<template>
    <div class="container-fluid bg-success fixed-bottom">
        <div class="row">
            <p class="lead">
                <b class="bold-text">-Code by Razien Mackenzie &copy;</b>
                <span>{{ currYear }}-</span>
            </p>
        </div>
        
        <div class="text text-black">
            <a href="https://github.com/yourgithubusername" target="_blank">
        <i class="bi bi-github text-black" style="font-size: -1rem; margin-right: 1rem;"></i>
      </a>
      <a href="https://github.com/yourgithubusername" target="_blank">
        <i class="bi bi-linkedin text-black" style="font-size: -1rem; margin-right: 1rem;"></i>
      </a>
      <a href="https://github.com/yourgithubusername" target="_blank">
        <i class="bi bi-slack text-black" style="font-size: -1rem; margin-right: 1rem;"></i>
      </a>
        </div>
       
    </div>
</template>

<script>
    export default {
        data() {
            return{
                currYear: new Date().getFullYear()
            }
        }
    }
</script>

<style scoped>
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