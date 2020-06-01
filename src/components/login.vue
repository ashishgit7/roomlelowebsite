<template>
  <div>
    <a href="#" onclick="signOut();">Sign out</a>
    <!-- Large modal -->
    <button
      type="button"
      class="btn btn-primary"
      data-toggle="modal"
      data-target=".bs-example-modal-lg"
    >Large modal</button>
    <div
      class="modal fade bs-example-modal-lg"
      tabindex="-1"
      role="dialog"
      aria-labelledby="myLargeModalLabel"
    >
      <div id="modal-box" class="modal-dialog modal-lg" role="document" style="max-width: 700px;">
        <div class="modal-content">
          <div
            class="modal-header"
            style="background-color:rgba(0,255,127,0.1); text-align: center;"
          >
            <button type="button" class="close" data-dismiss="modal" style="outline: 0;">&times;</button>
            <h5
              class="modal-title"
              style="font-family: Bahnschrift; font-weight: 600; color:	rgb(46,139,87); "
            >Renting the room was never this much easy, let's rent a room. Sign up now.</h5>
          </div>
          <div class="modal-body" id="m-body">
            <div class="m-box1">
              <ul>
                <li>
                  <input
                    id="f-name"
                    style="width: 50%;border-bottom:0px;"
                    type="text"
                    name
                    placeholder="First Name"
                  />
                  <input
                    id="l-name"
                    style="width: 50%;border-bottom:0px;border-left:0px;"
                    type="text"
                    name
                    placeholder="Last Name"
                  />
                </li>
                <li>
                  <input type="text" id="user_email" name placeholder="Email" />
                </li>
                <li>
                  <input
                    id="pass"
                    type="text"
                    name
                    placeholder="Phone Number"
                    style="border-top: 0px;"
                  />
                </li>
                <li>
                  <input
                    id="c-pass"
                    type="password"
                    name
                    style="border-top:0px;"
                    placeholder="Password"
                  />
                </li>
                <li>
                  <button id="m-signIn" onclick="registration()">Sign In</button>
                  <span
                    id="logorsin"
                    style="float: right; display: none;"
                    onclick="SignUp(-1)"
                  >or, Sign Up</span>
                </li>
                <li id="or" style="text-align: center;">or</li>
                <li
                  id="google-btn"
                  style="margin-left: 100px !important; margin-top: 20px; text-align: center !important; width: 100%;"
                >
                  <div class="g-signin2" data-onsuccess="onSignIn" style="width: 100%;"></div>
                </li>
                <li id="forgetP">
                  <h5 id="f-pass">Forgot Password?</h5>
                </li>
                <li>
                  <h6
                    id="agree-line"
                    style="font-size: 15px; font-family:Bahnschrift;text-align: center;"
                  >
                    <a href style="float: right;">
                      <sup style="color:red;">*</sup> By signing up, you agree our Terms, conditions & policy
                    </a>
                  </h6>
                </li>
              </ul>
            </div>
            <div class="m-box2">
              <img src="../assets/log.png" alt="image">
              <h6
                id="terms"
                style="font-size: 12px; font-family: Helvetica;position: absolute;bottom:17px; float: left;"
              >
                <input type="checkbox" checked disabled />
                <a href title>By signing up, you agree our Terms, conditions & policy</a>
              </h6>
            </div>
            <div class="m-box3" style="font-family: Bahnschrift; font-weight: 600;">
              <h2 id="m-head">Sign In</h2>
            </div>
            <div class="m-box4">
              <h5 id="que">
                Don't have account yet?
                <span style="color:#0000ff;">Create new for free!</span>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import db from '../firebase'
// import firebase from 'firebase'

export default {
  data() {
    return {
      title: "my vue file"
    };
  },
  mounted() {
    let externalScript = document.createElement('script')
    externalScript.setAttribute('src', '../login.js')
    document.body.appendChild(externalScript);
  }
};
</script>


<style scoped>
@import url("https://fonts.googleapis.com/css?family=Open+Sans&display=swap");
body {
  margin: 0;
  padding: 0; }

html {
  margin: 0;
  padding: 0; 
}
button:active{
  transition: all ease 0.2s;
  transform:scale(0.95);

}
#agree-line{
  display: none;
}


#m-body {
  display: grid;
  grid-template-rows: 70px auto;
  grid-template-columns: 1fr 1fr;
  margin-left: 40px;
  margin-right: 0px;
  margin-top: 0px;
  grid-column-gap: 20px; }

.m-box2 {
  grid-row: 2/3;
  grid-column: 2/3;
  width: 100%; }

.m-box3 {
  grid-row: 1/2;
  grid-column: 1/2;
  width: 100%;
  float: left;
  font-family: Bahnschrift; }

.m-box4 {
  grid-row: 1/2;
  grid-column: 2/3;
  width: 100%;
  float: right;
  font-family: Bahnschrift;
  align-items: center;
  margin: auto 0; }

.m-box1 {
  grid-row: 2/3;
  grid-column: 1/2;
  width: 100%;
  font-family: Bahnschrift;
   }
  
.m-box1 ul {
    margin: 0;
    padding: 0; 
  }
    .m-box1 ul li {
      list-style: none; 
    }
      .m-box1 ul li input {
        height: 45px;
        padding-left: 20px;
        background-color: rgba(220, 220, 220, 0.2);
        outline: 0px;
        border: 1px solid #ddd;
        width: 100%;
      }
      .m-box1 ul li input[type="password"] {
        background-repeat: no-repeat;
        background-position: 100% 12px; 
      }
      .m-box1 ul li h5 {
        margin-top: 40px;
        text-align: center;
         }

#m-signIn {
  margin-top: 20px;
  width: 100%;
  height: 40px;
  border-radius: 20px;
  outline: 0;
  border: 0;
  background-color: royalblue;
  color: white;
  margin-bottom: 20px; 
}




 
@media (max-width: 480px) {
  #m-body {
    display: grid;
    grid-template-rows: 70px auto;
    grid-template-columns: 1fr;
    margin: 0px !important; }

  .m-box1 {
    grid-column: 1/-1; }

  .m-box3 {
    grid-column: 1/-1; }

  .m-box2 {
    display: none; }

  .m-box4 {
    display: none; }

  #modal-box {
   position: absolute;
   top:50%;
   left:0%;
   transform: translate(0%,-50%);
    }

  #logorsin {
    display: block !important;
    padding-top: 30px;
    text-decoration: underline; }

  #m-signIn {
    width: 50%;
    float: left;
     }

  #google-btn{
   margin-top:20px !important; 
    float: left;
    margin-bottom: 10px !important;
    text-align: center !important;
  }
  #or{
    margin: 90px auto !important;
    text-align: center !important;
    margin-bottom: 0px !important;
    float: left;

  }
  #forgetP{
     margin: 190px auto !important;
     margin-bottom: 0px;
    text-align: center;
  }
  
  .m-box1{
    max-height: 425px;
  }

  #agree-line{
     display: block;
    position: absolute;
    bottom:0;
  }

 }
</style>
