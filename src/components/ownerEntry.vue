<template>
  <div>
    <!-- <button style="" ref="modal" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
  Launch demo modal
</button> -->
    <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle" style="font-family: Bahnschrift;">Owner's Info</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form onsubmit="return false">
              <ul>
                <li>
                  <h2>Your Name :</h2>
                  <input id="own-name" type="text" name="" required placeholder="Full name of Owner">
                </li>
                <li>
                  <h2>Phone Number :</h2>
                  <input id="own-phone" type="text" name="" required placeholder="10 digit Phone number">
                </li>
                <li>
                  <h2>Email ID :</h2>
                  <input id="own-email" type="text" name="" required placeholder="Example: mymail@gmail.com">
                </li>
                <li>
                  <h2>Address :</h2>
                  <textarea id="own-address" style="width: 90%;border-radius: 5px; height: 70px; font-family: Bahnschrift; font-size: 15px;" required placeholder="Lane R4 Gandhi Nagar Dwarika Patna 821115 "></textarea>
                </li>
              </ul>
              <button type="submit" style="float:right;" class="btn btn-primary" v-on:click="saveOwner">Save changes</button>
            </form>
            </div>
              <button type="button" id="modal-close-btn" class="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>

  </div>
</template>

<script>
import db from '../firebase'
export default {
  data () {
    return {
      
    }
  },
 methods:{
  saveOwner:function(){
          let name = document.getElementById('own-name').value;
          let phone = document.getElementById('own-phone').value;
          let email = document.getElementById('own-email').value;
          let address = document.getElementById('own-address').value;
          if(name!="" && phone!="" && email!="" && address!="")
          {
           
             var today = new Date();

             db.collection('ownerProfile').doc(name+": "+today.getDate()+"-" +(today.getMonth()+1)+"-"+today.getFullYear()).set({
              address: address,
              email: email,
              name: name,
              phone: phone
             }).then((res) =>{
              console.log(res);
             document.getElementById('modal-close-btn').click();
             })

          }
      }
 }

}
</script>

<style scoped>

.modal-body ul li {
  list-style: none;
  margin-bottom: 30px; }
  .modal-body ul li h2 {
    font-size: 15px;
    font-family: Bahnschrift;
    font-weight: 400; }
  .modal-body ul li input {
    width: 90%;
    font-size: 15px;
    font-family: Bahnschrift;
    font-weight: 400;
    border-radius: 3px;
    background-color: #eee;
    color: black;
    outline: 0;
    border: 0;
    height: 30px;
    padding-left: 12px; 
  }

</style>
