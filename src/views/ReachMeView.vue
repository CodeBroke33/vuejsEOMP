<template>
  <main>
    <div class="contact">
      <div id="wrap">
        <h1 class="text-success">Reach Me</h1>
        <br /><br /><br />
        <div id="form-wrap">
          <form action="https://formspree.io/f/mzblyrzz" method="POST">
            <p><label for="name">Name:</label></p>
            <p><input type="text" id="name" name="name" required /></p>

            <p><label for="email">Email:</label></p>
            <p><input type="email" id="email" name="email" required /></p>

            <p><label for="message">Message:</label></p>
            <p> 
              <textarea
                id="message"
                name="message"
                rows="4"
                required
              ></textarea>
            </p>
            <button class="btn btn-rounded bg-success" type="submit">
              SUBMIT
            </button>
          </form>
        </div>
      </div>
      <div>
        <h4 class="details fs-1 text-success">My Contact Details</h4>
      </div>
      <br /><br /><br />
      <div class="row d-flex">
        <div class="col text-success contact-item">
          <i class="fs-1 fas fa-envelope"></i><br />
          Email: razeenmackenzie@gmail.com
        </div>
        <div class="col text-success contact-item">
          <i class="fs-1 fas fa-map-marker-alt"></i> <br />Location: Cape Town,
          Athlone
        </div>
        <div class="col text-success contact-item">
          <i class="fs-1 fas fa-phone"></i> <br />Cellphone: 068 373 5646
        </div>
      </div>
      <br /><br />
      <div class="col text-white contact-item">
        <i class="fs-1 fab fa-linkedin"></i> <br />LinkedIn:
        linkedin.com/in/yourprofile
      </div>
      <div class="col text-white contact-item">
        <i class="fs-1 fab fa-linkedin"></i> <br />LinkedIn:
        linkedin.com/in/yourprofile
      </div>
    </div>
  </main>
</template>

<script>
//import anime from 'animejs'; // Import anime.js library if not already imported

export default {};
</script>

<style scoped>
div,
form,
fieldset,
input,
textarea {
  outline: none;
  height: 51px;
}

.wrapper {
  width: 60%;
  height: 100%;
  margin: 100px auto;
}

.contact {
  padding: 8vh;
  /* background: black;   */
  color: lightgrey;
  font-family: Righteous;
  height: 100%;
  overflow: 0;
}

#wrap {
  width: 530px;
  margin: 20px auto 0;
  height: 700px;
}

h1 {
  margin-bottom: 20px;
  text-align: center;
  font-size: 80px;
}

#form-wrap {
  overflow: hidden;
  height: 447px;
  bottom: 100px;
  position: relative;
  top: 0px;
  transition: all 1s ease-in-out 0.3s;
}

#form-wrap:before {
  content: "";
  position: absolute;
  bottom: 90px;
  left: 0px;
  background: url("../assets/before-removebg-preview.png");
  width: 530px;
  height: 317px;
}

#form-wrap:after {
  content: "";
  position: absolute;
  bottom: -40px;
  left: 0;
  background: url("../assets/after-removebg-preview.png");
  width: 530px;
  height: 259px;
}

#form-wrap.hide:after,
#formwrap.hide:before {
  display: none;
}

#form-wrap:hover {
  height: 777px;
  top: -311px;
}

form {
  background: whitesmoke;
  position: relative;
  top: 200px;
  overflow: hidden;
  height: 400px;
  width: 500px;
  margin: 0 auto;
  padding: 20px;
  border: 3px solid grey;
  /* border-right: 3px; */
  transition: all 1s ease-in-out 0.3;
}

/* #form-wrap:hover form {
    margin: 530px;
}  */

label {
  /* margin: auto; */
  color: black;
  font-size: em;
}

.cntct {
  margin: 4%;
  font-size: 3rem;
  position: absolute;
}

.other {
  margin: 4%;
  font-size: 1rem;
  position: absolute;
}

.submit {
  border-radius: 20%;
  max-width: 200px;
  position: absolute;
  top: 326px;
  left: 230px;
}

.submit:hover {
  background-color: rgb(51, 183, 139);
  transition: all;
}

.details {
  font-size: 2em;
}

/* Responsive Styling */
@media only screen and (max-width: 768px) {
  .contact-form,
  .words {
    text-align: center;
  }
  #wrap {
    width: 90%;
  }
  form {
    width: 90%;
  }
}

@media only screen and (max-width: 576px) {
  #wrap {
    padding-top: 50px;
  }
  .submit {
    top: 280px;
    left: 150px;
  }
}

/* Responsive Styling */
@media only screen and (max-width: 768px) {
  /* Adjust the size of the before and after images */
  #form-wrap:before,
  #form-wrap:after {
    width: 90%;
    height: auto;
  }
}

@media only screen and (max-width: 576px) {
  /* Further adjustments for smaller screens */
  #form-wrap:before {
    bottom: 70px;
  }
  #form-wrap:after {
    bottom: -20px;
  }
}
</style>
