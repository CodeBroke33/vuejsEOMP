<template>
    <div class="container-fluid bg-success fixed-bottom">
        <div class="row">
            <p class="lead">
                <b class="bold-text">-Portfolio of Razien Mackenzie &copy;</b>
                <span>{{ currYear }}-</span>
            </p>
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
</style>