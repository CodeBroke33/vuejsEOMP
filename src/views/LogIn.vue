<template>
    <div class="login-container">
      <h2 class="title">Login</h2>
      <form class="login-form" @submit.prevent="login">
        <div class="form-group">
          <label for="username">Username</label>
          <input type="text" id="username" v-model="username" required>
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" id="password" v-model="password" required>
        </div>
        <button type="submit" class="login-button">Login</button>
      </form>
      <p>Forgot Password?</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        password: ''
      };
    },
    methods: {
      login() {
        // Add your login logic here
        console.log('Logging in...');
      }
    }
  }
  </script>
  
  <style scoped>



  .login-container {
    background-color: white !important;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    max-width: 400px;
    margin: auto;
  }
  
  .title {
    color: #4CAF50; /* Swamp green color */
    text-align: center;
    margin-bottom: 20px;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  label {
    color: black;
    font-weight: bold;
  }
  
  input[type="text"],
  input[type="password"] {
    width: 100%;
    padding: 10px;
    border: 4px solid #ccc;
    border-radius: 5px;
  }
  
  .login-button {
    background-color: #4CAF50; /* Swamp green color */
    color: white;
    padding: 10px 20px;
    border: solid black 4px;
    border-radius: 5px;
    cursor: pointer;
    width: 100%;
  }
  
  .login-button:hover {
    background-color: #45a049; /* Darker shade of swamp green */
  }
  
  h2, form{
    margin-top: 21vh;
  }
  </style>