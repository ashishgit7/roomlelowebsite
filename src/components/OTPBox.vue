<template>
  <div>
    <div class="container" v-show="!validation">
      <form class="form-inline">
        <div class="form-group mb-2">
          <label for="OTP" class="sr-only">Enter OTP</label>
          <input type="text" readonly class="form-control-plaintext" id="OTP" value="Enter OTP" />
        </div>
        <div class="form-group mx-sm-3 mb-2">
          <label for="inputPassword2" class="sr-only">OTP</label>
          <input
            type="password"
            class="form-control"
            id="inputPassword2"
            v-model="otp"
            placeholder="OTP"
          />
        </div>
        <button type="button" class="btn btn-primary mb-2" @click="submitOTP()">Submit OTP</button>
        <button
          type="button"
          style="margin-left:2px"
          class="btn btn-secondary mb-2"
          @click="resendOTP()"
        >Resend OTP</button>
        <div id="recaptcha-container" style="margin-left:5px"></div>
      </form>
    </div>
    <div v-show="validation"> 
      <div class="jumbotron">
      <h1 class="display-4">Congratulation</h1>
      <p class="lead">Your Visit for the property has been booked.</p>
      <hr class="my-4">
      <p>Our Agent will Contact you soon</p>
      <p class="lead">
        <router-link class="btn btn-primary btn-lg" to="/" role="button">Visit more</router-link>
      </p>
</div>
    </div>
  </div>
</template>

<script>
// import db from "../firebase";
import firebase from "firebase";

export default {
  data() {
    return {
      title: "my vue file",
      otp: "",
      confirmationResult: {},
      recaptchaVerifier: {},
      form: {},
      validation: false
    };
  },
  methods: {
    resendOTP: function() {
      console.log(this.form.phone);
      if (this.form.phone.length != 10) {
        alert("Phone number not correct");
        return "";
      }
      let phoneNumber = "+91" + this.form.phone;
      firebase
        .auth()
        .signInWithPhoneNumber(phoneNumber, this.recaptchaVerifier)
        .then(confirmationResult => {
          // SMS sent. Prompt user to type the code from the message, then sign the
          // user in with confirmationResult.confirm(code).
          // let otpSent = true;
          console.log("Success");
          console.log(confirmationResult);
        })
        .catch(function(error) {
          // Error; SMS not sent
          // ...
          console.log("Error");
          console.log(error);
          this.recaptchaVerifier("recaptcha-container");
        });
    },
    submitOTP: function() {
      var code = this.otp;
      this.confirmationResult.confirm(code)
        .then(result => {
          // User signed in successfully.
          console.log(result);
          this.validation = true;
          // ...
        })
        .catch(function(error) {
          // User couldn't sign in (bad verification code?)
          // ...
          console.log(error);
        });
    }
  },
  created() {
    console.log(this.$route.query);
    this.form = this.$route.query.queryObject;
  },
  mounted() {
    firebase.auth().useDeviceLanguage();
    this.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      "recaptcha-container"
    );

    ////////////////////////////
    let phoneNumber = "+91" + this.form.phone;
    firebase.auth().signInWithPhoneNumber(phoneNumber, this.recaptchaVerifier).then(confirmationResult => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        // let otpSent = true;
        console.log("Success");
        this.confirmationResult = confirmationResult;
        console.log(confirmationResult);
      })
      .catch(function(error) {
        // Error; SMS not sent
        // ...
        console.log("Error");
        console.log(error);
        this.recaptchaVerifier("recaptcha-container");
      });
  }
};
</script>

<style>
</style>
