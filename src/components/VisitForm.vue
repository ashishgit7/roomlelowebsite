<template>
    <div class="px-8 py-4 bg-gray-300" style="border: 3px green solid">
        Property ID = {{ propertyId }}
        <br>
        <label>Name </label>
        <input v-model="formData.name" type="text">
        <br>
        <label>Phone number </label>
        <input v-model="formData.phone" type="text">
        <button @click="getOTP()">Get OTP</button>
        <br>
        <template v-if="otpSent && !phoneNumberValidated">
        <label >Enter OTP </label>
        <input  v-model="formData.otp" type="text">
        <button  @click="submitOTP()">Submit</button>
        <br>
        </template>
        <label>When would you like to visit? </label>
        <input v-model="formData.date" type="text">
        
        <button @click="submitForm">Submit</button>
        <br>
        <p @click="phoneNumberValidated=!phoneNumberValidated" >{{ phoneNumberValidated }}</p>
        <p>{{ otpSent }}</p>
        <p>{{ user }}</p>
        
        <div v-if='!otpSent' id="recaptcha-container">
        </div>
    </div>
</template>

<script>
import db from '../firebase'

import firebase from 'firebase'


export default {
    name: 'VisitForm',
    data () {
        return {
            formData: {},
            phoneNumberValidated: false,
            otpSent: false,
            recaptchaVerifier: {},
            confirmationResult: {},
            user: {},
        }
    },
    props: [
        'propertyId'
    ],
    methods: {
        submitForm () {
            if(!this.phoneNumberValidated){
                alert("Phone number not verified");
                return '';
            }
            console.log("Chala");
            var visitData = {
                propertyId: this.propertyId,
                name: this.formData.name,
                phone: this.formData.phone,
                date: this.formData.date,
                bookingDateTime: this.getCurrentDateTime()
            }
            
            db.collection('visits').add(visitData).then(
                (response) => {
                    console.log(response);
                    this.formData = {};
                    alert('Success');
                }
            ).catch(
                (err) => {
                    console.log(err);
                }
            )
            

        },
        getOTP(){
            if(this.formData.phone.length != 10){
                alert("Phone number not correct");
                return '';
            }
            let phoneNumber = "+91"+this.formData.phone;
            
            firebase.auth().signInWithPhoneNumber(phoneNumber, this.recaptchaVerifier)
                .then((confirmationResult) => {
                    // SMS sent. Prompt user to type the code from the message, then sign the
                    // user in with confirmationResult.confirm(code).
                    this.otpSent = true;
                    console.log("Success");
                    this.confirmationResult = confirmationResult;
                    console.log(confirmationResult);
                }).catch(function (error) {
                    // Error; SMS not sent
                    // ...
                    console.log("Error");
                    console.log(error);
                    this.recaptchaVerifier("recaptcha-container");

                });

        },
        submitOTP(){
            var code = this.formData.otp;
            this.confirmationResult.confirm(code).then((result)=>{
                // User signed in successfully.
                this.user = result.user;
                console.log(this.user);
                this.phoneNumberValidated = true;
                // ...
            }).catch(function (error) {
                // User couldn't sign in (bad verification code?)
                // ...
                console.log(error);
            });

        }
        ,
        getCurrentDateTime () {
            var today = new Date();
            var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
            var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
            return date+' '+time;
        },
    },
    mounted(){
        firebase.auth().useDeviceLanguage();
        this.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
    }
}
</script>

<style scoped>
button {
    background-color: red;
}
</style>