<template>
    <div class="contact">
        <div id="wrap">
        <h1>Reach Me</h1>
        <br><br><br>
        <div id="form-wrap">
            <form>
                <label for="email">Your Message:</label>
                <textarea name="message" id="message" value="Your Message"></textarea>

                <label for="name">Name:</label>
                <input type="text" name="name" value="" id="name">

                <label for="email">Email:</label>
                <input type="text" name="email" value="" id="email">

                <input type="submit" name="submit" id="" value="Submit">
            </form>
        </div>
        <div>
           <div><div><p class="cntct">Contact Info</p></div></div>
          
          <div> <p class="other">Contact: 068 373 5646</p>
                <p class="other"></p>
                <p class="other"></p>
        </div>

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
    height: 50px;
 }


.contact {
    padding: 8vh;
    background: black;
    color: white;
    font-family: Righteous;
    height: 100%;
    overflow: ;
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
    bottom: 128px;
    left: 0px;
    background: url('../assets/before-removebg-preview.png');
    width: 530px;
    height: 317px;
}

#form-wrap:after{
    content: "";
    position: absolute;
    bottom: 0px;
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
    height: 700px;
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
    margin: ;
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
</style>
