<template>
    <div class="contact">
        <div id="wrap">
        <h1>Reach Me</h1>
        <br><br><br>
        <div id="form-wrap">
        <form>
           <p> <label for="name">Name:</label></p>
            <p><input type="text" id="name" name="name" required></p>

            <p><label for="email">Email:</label></p>
            <p><input type="email" id="email" name="email" required></p>

            <p><label for="message">Message:</label></p>
            <p><textarea id="message" name="message" rows="4" required></textarea></p>

                <a href="https://formspree.io/f/mzblyrzz" method="POST" target="_blank" ><button type="button">SUBMIT</button></a>
           
        </form>
        </div>
        <div class="words">
            <div><h4 class="details">My Contact Details</h4></div>
            <div></div>
            <p class="details">Phone num:021 637 6410/068 373 5646</p>
            <p class="details">Email:razeenmackenzie@gmail.com</p>
            <p class="details">Slack:Razeen Mackenzie</p>
            <p class="details">Whatsapp:068 373 5646</p>

        </div>

        </div>
        
        
    </div>

</template>

<script>
    export default {
        name: "ReachMePage"
    }
</script>

<style scoped>

 div, form, fieldset, input, textarea {
    outline: none;
    height: 51px;
 }


.contact {
    padding: 8vh;
    background: black;
    color: white;
    font-family: Righteous;
    height: 100%;
    overflow:0 ;
}

#wrap {
    width: 530px;
    margin: 20px auto 0;
    height: 1000px;
} 

h1 {
    margin-bottom: 20px;
    text-align: center;
    font-size: 80px;
}

#form-wrap{
    overflow: hidden;
    height: 447px;
    bottom: 100px;
    position: relative;
    top: 0px;
    transition: all 1s ease-in-out .3s;
}

#form-wrap:before{
    content: "";
    position: absolute;
    bottom: 90px;
    left: 0px;
    background: url('../assets/before-removebg-preview.png');
    width: 530px;
    height: 317px;
}

#form-wrap:after{
    content: "";
    position: absolute;
    bottom: -40px;
    left: 0;
    background: url('../assets/after-removebg-preview.png');
    width: 530px;
    height: 259px;
}

#form-wrap.hide:after,
#formwrap.hide:before{
    display: none;
}

#form-wrap:hover{
    height: 777px;
    top: -311px;
}

form{
    background: whitesmoke;
    position: relative;
    top: 200px;
    overflow: hidden;
    height: 400px;
    width: 500px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid whitesmoke;
    border-right: 3px;
    transition: all 1s ease-in-out .3;
}

/* #form-wrap:hover form {
    margin: 530px;
}  */

label{
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
    max-width:200px;
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
</style>
