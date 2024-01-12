<template>
  <main class="container-fluid">
    <div class="mypic">

    </div>
  <div class="about ">
    <div class="image-wrap"></div>
    <h1 class="aboutme">About Me</h1>
    <span class="scroll ">Scroll Down</span>
    <span class="line"></span>
  </div>
  <div class="info">
    <h1>My Story</h1>
    <div></div>
    <div></div>
    <div></div>
   <p> Once upon a time, in the bustling world of high school, I was the merchant with pockets full of cash and dreams set on computers. Life was good until the day reality hit hard.It all began with a seemingly innocent suggestion from the principal: skip school on certain days for exams. Little did I know, those missed days would shatter my dream. When the results came in, those two missing subjects left my matric certificate incomplete, a haunting reminder of missed opportunities.Determined to pursue my passion for computers, I applied to the Life Choices Coding Academy. But my incomplete certificate was a barrier.</p> <p>Honesty led me to disclose the truth, leaving me disappointed and facing the daunting task of completing my certificate, a year-long process.Desperate to make ends meet, unemployed and disheartened, my grandmothers persistent nagging pushed me to seek employment. Months passed with no luck until a mysterious message led me to an agency that found me a job at Woolworths. It wasnt my dream, but it kept me afloat.As an OPS assistant, I observed those working with computers in the office, sparking a desire to move up. I seized the chance for promotion, climbing slowly, learning, and adapting. Attempts to study ICT were thwarted by COVID, and my savings vanished, yet I persisted, continuously learning new skills during my night shifts.Persistence paid off when my extra efforts caught managements attention. The question that changed everything: Would you be interested in working in the office? I leaped at the chance, becoming the youngest and least experienced to hold that position in Woolworths history.But the glamour faded. The office felt like a scapegoat hub, a place to dump blame. Despite success, dissatisfaction brewed. I loved my job but detested the environment and the paycheck.</p> <p>Thats when I decided to reapply to the Life Choices Coding Academy, seeking a path back to my true passion.Now, despite the discontent, I'm still at Woolworths, surrounded by unbearable colleagues and insufficient pay. But being accepted into the coding academy again promises a new chapter, a chance to fulfill my dreams. The certainty of a clearer future keeps me going, knowing that soon, Ill be immersed in what Ive always yearned for, a life with computers.Its been a journey of setbacks, resilience, and unyielding determination. And now, as I step into this new chapter, the hope of finally merging passion and profession lights the way for.</p>
  </div>
  </main>
</template>


<script>
  
</script>

<style scoped>
* {
  padding:0;
  margin:0;
  box-sizing: border-box;
}
main {
  padding: 46vh;
  background-color: black;
  min-height: 750px;
  height: 200vh;
  width: 100%;
}

.aboutme {
position: relative;
z-index: 1;
color: white;
font-size: 12rem;
font-weight: 500;
text-align: center;
line-height: 1;
margin-top: -8%;
/* transform: translateY(1000px);  */
font-family:  Righteous;

}
.mypic {
  position: absolute;
  width: 85%;
  max-width: 1000px;
  height: 250px;
  bottom: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(50%);
  background-image: url("../assets/tumblr_59ac39c4fd07fbac0b4b5d43cc86205c_c353f219_500.webp");
  background-size: 100%;
  background-position: 50% 58%;
  background-repeat: no-repeat;
}

.scroll {
  position: absolute;
  color:white;
  font-weight: 300;
  left: 50%;
  transform: translateX(-50%);
  bottom: 100px;
  height: 50px;
  font-family:  Righteous;
}

.line {
  position: absolute;
  width: 1px;
  height: 100px;
  left: 50%;
  transform: translateX(-50%);
  bottom: 0;
  background-image: linear-gradient(to top, white, grey);

}

.info {
font-family: Righteous !important;
position: absolute;
top: 55em;
right: 2em;
margin: 2em;
color: white;

}



/* .hide {
  opacity: 0;
} */
</style>
