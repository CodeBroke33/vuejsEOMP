<template>
  <main class="home text-white">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-6">
          <img
            class="profile-img img-fluid"
            src="https://i.ibb.co/Z2rv961/DSC-03021.jpg"
            alt="Profile Photo"
          />
        </div>
        <div class="col-md-6">
          <h1 class="text-shadow">
            <span id="typed-text" class="text-success"></span>
          </h1>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  mounted() {
    const typedTextSpan = document.getElementById('typed-text');
    const textArray = ['Hello,', "I'm Razeen Mackenzie", 'An Skilled', 'Web Developer,', 'OPS Administrator', 'and', 'Graphic Designer'];
    const typingDelay = 200;
    const erasingDelay = 100;
    const newTextDelay = 100; // Delay between current and next text
    let textArrayIndex = 0;
    let charIndex = 0;

    function type() {
      if (charIndex < textArray[textArrayIndex].length) {
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
      } else {
        setTimeout(erase, newTextDelay);
      }
    }

    function erase() {
      if (charIndex > 0) {
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
      } else {
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 1100);
      }
    }

    document.addEventListener('DOMContentLoaded', function() {
      if (textArray.length) setTimeout(type, newTextDelay + 250);
    });
  }
}
</script>

<style scoped>
main {
  padding: 8% 5%;
  position: relative;
}

.profile-img {
  max-width: 100%;
  height: 500px;
  border-radius: 10%;
  border: solid 3px grey;
}

h1 {
  font-family: Righteous;
  font-size: 3rem;
  text-transform: uppercase;
  line-height: 1;
  white-space: nowrap;
}

.text-shadow {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.we {
  font-size: x-small;
}
</style>