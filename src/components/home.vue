<template>
  <div>
    <content-page></content-page>
    <!-- <Filterr></Filterr>
    <service></service>
    <ownerEntry></ownerEntry>
    <property></property>
    <footeR></footeR> -->
  <!-- ////////offer-box//////////// -->
  <h3 style="font-weight:bold" class="ml-3">Exclusive offer</h3>
  <div style="display:flow-root;box-shadow:7px 9px 40px -12px rgb(0, 0, 0);border-radius: 23px;" class="p-2 m-2 mb-5">
    <h5 style="font-weight:380;font-size:1.1rem">We value your personal space and hygein</h5>
    <h6 class="text-muted"> Stay in sanitised and Private rooms</h6>
    <div class="d-flex" data-aos="zoom-in">
    
    <img src="../assets/rupees.png" alt="" class="d-inline" style="width: 30px;
    height: 35%;
    position: relative;
    top: 15px;;">
    
    <span class="d-inline" style="font-size:3.0rem;font-weight:bold;color:rgb(60,183,198);">4000</span><span style="font-size:2.2rem;color:rgb(60,183,198);">only</span>
    
    </div>
    <button class=" btn btn-danger" style="float:right"> book now</button>
  </div>

  <!-- //////////offer-box-end///////// -->
  <!-- //////////high demand property//////////// -->
    <h3 class="ml-3">High in demand</h3>
    <carousel :scrollPerPage="false" :autoplay="true" :navigationEnabled="true" paginationActiveColor="yellow" paginationColor="blue" :paginationEnabled="false">
      <slide v-for="(place,index) in propertyInDemand" v-bind:key="index" >
        <span class="bg-info text-white p-1 ml-2" >new</span>
         <div class="card m-2" style="box-shadow:7px 9px 40px -12px rgb(0, 0, 0)"  >
          <img :src="place.photos[0]" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">{{place.location}}</h5>
            <p class="card-text">{{place.shortDescription}}</p>
            <img src="../assets/rupees.png" alt="" style="width:10px;display:inline">
            <p class="d-inline">{{place.priceArray[0]}}</p><br>
           <router-link v-bind:to="'/detail'+ place.id" class="btn" style="border:solid black">View detail</router-link>
          </div>
        </div>
       </slide>
      </carousel>
  <!-- //////////high demand property end//////////// -->
  <!-- ///Refer box//// -->
  <div class="mx-2"  data-aos="zoom-in" data-aos-duration="3000" style="box-shadow:7px 9px 40px -12px rgb(0, 0, 0);display:flow-root">
    <h2 class="m-2 mx-3">Exciting Offer</h2>
  <img src="../assets/img 1.png" alt="" class="m-2" style="width:96%;border-radius:10px">
  
  </div>
  <!-- ///Refer box//// -->

  <!-- ////////Our-collection/////////// -->
     <h2 class="m-3 mt-5">Our Collection</h2>
     <div class="row m-1 justify-content-around">
       <div class="col-3 p-1"  data-aos="fade-up" data-aos-duration="3000" style="box-shadow:7px 9px 40px -12px rgb(0, 0, 0);text-align: -webkit-center;">
     <img src="../assets/img 2.png" class="rounded ml-2" alt="..." style="width:90%">
     <span style="font-weight:bold" class="ml-2">Private room</span>
     </div>
     <div class="col-3 p-1" data-aos="fade-down" data-aos-duration="3000" style="box-shadow:7px 9px 40px -12px rgb(0, 0, 0);text-align: -webkit-center;">
     <img src="../assets/img 3.png" class="rounded" alt="..." style="width:90%">
     <span style="font-weight:bold">Shared room</span>
     </div>
     <div class="col-3 p-1" data-aos="fade-up" data-aos-duration="3000" style="box-shadow:7px 9px 40px -12px rgb(0, 0, 0);text-align: -webkit-center;">
     <img src="https://i.pinimg.com/originals/87/7c/26/877c2677329231608d6747e19d0aae1f.png" class="rounded mr-2" alt="..." style="width:90%">
     <span style="font-weight:bold">Entire house</span>
     </div>
     </div>
  <!-- ////////Our-collection-end/////////// -->
  <!-- //////partner with us/////////// -->
  <h2 class="ml-3 mt-5">Partner With us</h2>
  <div class="row m-3" style="box-shadow:7px 9px 40px -12px rgb(0, 0, 0)" data-aos="flip-left" data-aos-duration="5000">
    <div class="col-6">
    <img src="../assets/homeOwner.png" alt="" class="mt-2">
    <button class=" mt-10" style="font-size:medium;padding:6px;width: 100%;border:solid black;border-width: medium;">List your Property</button>
     </div>
     <div class="col-6">
      <p style="text-align:right;font-size: 4vw;"> RoomLelo is a
        professional property
        management team
        helps landlords
        with leasing
        services, maintenance
        and more.</p>
     </div>
  
  </div>
  <!-- //////partner with us end/////////// -->
  <!-- ///service/// -->
  <div class="row m-1 mt-2">
    <div class="col-4" data-aos="fade-right">
    <img src="../assets/img4.png" alt="">
    <span style="font-weight:bold">Rent on time</span>
    </div>
    <div class="col-4" data-aos="fade-up">
      <img src="../assets/img5.png" alt="">
      <span style="font-weight:bold">Verified tenants</span>
    </div>
    <div class="col-4" data-aos="fade-left">
      <img src="../assets/img6.png" alt="">
      <span style="font-weight:bold">Maintenance</span>
    </div>
  </div>
  <!-- ///service-end/// -->
  <!-- ///city-pic// -->
  <div  data-aos="zoom-in" data-aos-duration="6000" class="mx-3 mt-4">
  <div  style="
  position: relative;
    background-color: white ;
    padding: 4px;
    width: fit-content;
    top: 23px;
    left: 28px;
    border: solid rgb(60, 183, 198);">
    <span style="font-weight:bold">New in</span> <br> <span class="text-danger" style="font-size:xx-large;font-weight:bold">city ...</span>
  </div>
  <img src="../assets/cityPic.jpg" alt="" >
  </div>
  <!-- ///city-pic-end// -->

  <!-- ////near-places/// -->
  <div class="row mt-5 m-2 mb-4 pt-3 pb-1" style="box-shadow:7px 9px 40px -12px rgb(0, 0, 0);border-radius:25px" >
    <div class="col-6">
      <img src="../assets/img 7.png" alt="">
      <img src="../../public/img/BHU.png" alt="" class="mt-2" style="width:20px">
      About BHU
    </div>
    <div class="col-6">
      <img src="../assets/img 8.png" alt="">
      <img src="data:image/jpeg;base64,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" alt="" class="mt-2" style="width:20px">
      Near places
    </div>
  </div>
  <!-- ////near-placesend/// -->
  <!-- ////footer/// -->
  <footer style="background-color:#c8c6c6;" class="pt-4 pb-8">
    <p style="border:solid black;display:inline" class="m-2 ml-3 p-2" > know more</p>
     <div class="row m-2">
       <div class="col-6 ">
         <p style="font-weight:bold">Roomlelo</p>
        <ul>
          <li>About us</li>
          <li>Behind Our new looks</li>
          <li>Work with us</li>
          <li>Press</li>
          <li>Contact</li>
          <li>Blog</li>
        </ul>
       </div>
       <div class="col-6">
         <p style="font-weight:bold">Partner with us</p>
         <ul>
           <li>For house Owner</li>
           <li>For large corporation</li>
         </ul>
         <p style="font-weight:bold">Refer & Earn</p>
       </div>
     </div>
     <p class="mx-4">Connect with us</p>
     <div class="ml-3">
     <img src="../assets/fb.png" alt="" style="display:inline;width:25px" class="mx-2">
     <img src="../assets/whatsapp.png" alt="" style="display:inline;width:25px" class="mx-2">
     <img src="../assets/twittee.png" alt="" style="display:inline;width:50px" class="mx-2">
     <img src="../assets/instagram.jpg" alt="" style="display:inline;width:50px" class="mx-2">
     </div>
    <p style="font-weight:bold" class="ml-4 mt-4">More Information</p>
    <span  class="ml-4">FAQ</span><br>
    <span  class="ml-4">House shifting service</span>
    
  </footer>
  <!-- ////footer=end/// -->
  <div class="text-center">
    Roomlelo.in
  </div>

  </div>
</template>

<script>
import db from '../firebase'
import { Carousel, Slide } from 'vue-carousel';

export default {
  components: {
    Carousel,
    Slide
  },
  data () {
    return {
      title:"my vue file",
      propertyInDemand:[],
    }
  },
  created(){
    db.collection('properties').get().then((res) =>{
        
        res.docs.forEach( (doc)=> {
          this.propertyInDemand.push(doc.data());
             
        })
        })
  }
}
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@1,200&display=swap');
div {
  font-family: "Montserrat", sans-serif;
}
</style>
