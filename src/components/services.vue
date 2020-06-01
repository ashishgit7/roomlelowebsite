<template>
  <div>
    <h4 class="text-center pt-1" style="font-weight: 600;font-family: Bahnschrift;">
            Services
        </h4>
          <hr>

        <div id="flex-card" class="scrolling-wrapper-flexbox">
          <div class="cards">
            <div class="card" style="width: 18rem; margin-left: 15px;"  data-aos="fade-up">
                  <img class="card-img-top" src="../assets/house-owner.png" alt="Card image cap" style="width: 286px;height: 208px;">
                  <div class="card-body">
                    <hr>
                    <p style="font-weight: 600; font-size: 16px;font-family: Bahnschrift">We provide instant accommodation</p>
                  </div>
                </div>
            </div>
          <div class="cards">
            <div class="card" style="width: 18rem; margin-left: 15px;" data-aos="fade-down">
                  <img class="card-img-top" src="../assets/served-client.png" alt="Card image cap" style="width: 286px;height: 208px;">
                  <div class="card-body">
                    <hr>
                    <p style="font-weight: 600; font-size: 16px;font-family: Bahnschrift">We accept bulk booking of beds anytime</p>
                  </div>
                </div>
          </div>
          <div class="cards">
            <div class="card" style="width: 18rem;margin-left: 15px;" data-aos="fade-up">
                  <img class="card-img-top" src="../assets/support.png" alt="Card image cap" style="width: 286px;height: 208px;">
                  <div class="card-body">
                    <hr>
                    <p style="font-weight: 600; font-size: 16px;font-family: Bahnschrift">We provide 24x7 client-owner support forum</p>
                  </div>
              </div>
          </div>
        </div>

       
        <div id="card-view">
          <ul>
            <li>
               <div class="card" style="width: 18rem;"  data-aos="fade-up">
                  <img class="card-img-top" src="../assets/house-owner.png" alt="Card image cap" style="width: 286px;height: 208px;">
                  <div class="card-body">
                    <hr>
                    <p style="font-weight: 600; font-size: 16px;font-family: Bahnschrift">We provide instant accommodation</p>
                  </div>
                </div>
            </li>
            <li >
               <div class="card" style="width: 18rem;" data-aos="fade-down">
                  <img class="card-img-top" src="../assets/served-client.png" alt="Card image cap" style="width: 286px;height: 208px;">
                  <div class="card-body">
                    <hr>
                    <p style="font-weight: 600; font-size: 16px;font-family: Bahnschrift">We accept bulk booking of beds anytime</p>
                  </div>
                </div>
            </li>
            <li>
               <div class="card" style="width: 18rem;" data-aos="fade-up">
                  <img class="card-img-top" src="../assets/support.png" alt="Card image cap" style="width: 286px;height: 208px;">
                  <div class="card-body">
                    <hr>
                    <p style="font-weight: 600; font-size: 16px;font-family: Bahnschrift">We provide 24x7 client-owner support forum</p>
                  </div>
                </div>
            </li>
          </ul>
        </div>

         <div class="container-fluid mt-3" id="owner-card">
          <div class="row">
              <div class="col-lg-4 col-12 offset-lg-2 p-md-3 p-4" >
                <p class="h4 pb-0 mb-0" style="font-family: Bahnschrift;">
                  Are you a
                </p>
                <p class="display-3" style="font-size:45px;">
                  Homeowner?
                </p>
                <!-- <router-link to ="/propertyRegister">
                <button class="btn btn-light mt-0" ref="modal" data-toggle="modal" data-target="#exampleModalCenter" type="button">
                  Enlist your property
                </button>
                </router-link> -->
                <router-link to ="/propertyRegister">
                <button class="btn btn-light mt-0" type="button">
                  Enlist your property
                </button>
                </router-link>
              </div>
              <div class="col-lg-4 col-12 bg-primary" >
                <div class="row align-items-center">
                    <div class="col-4 text-center text-white bg-primary py-3 mt-auto">
                        <i class="fa fa-building-o fa-5x p-2 " aria-hidden="true"></i>
                      <h5 class="mt-2"  style="font-family: Bahnschrift;">Feature one</h5>
                    </div>

                    <div class="col-4 text-center text-white bg-primary py-3">
                        <i class="fa fa-building-o fa-5x p-2" aria-hidden="true"></i>
                      <h5 class="mt-2"  style="font-family: Bahnschrift;">Feature one</h5>
                    </div>

                    <div class="col-4 text-center text-white bg-primary py-3">
                        <i class="fa fa-building-o fa-5x p-2" aria-hidden="true"></i>
                      <h5 class="mt-2"  style="font-family: Bahnschrift;">Feature one</h5>
                    </div>
                </div>
              </div>
          </div>
        </div>
        <!-- end for owner card -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      
    }
  },
  methods:{

  }
}
</script>

<style scoped>
#card-view {
  margin: 0px auto;
  text-align: center;
  margin-bottom: 100px;
  width: 100%; }
  #card-view ul {
    padding: 0;
    margin: 0;
    width: 100%; }
    #card-view ul li {
      display: inline-block;
      margin-right: 30px;
      transition: all ease 0.2s;
      margin-top: 30px; }
    #card-view ul li:hover {
      box-shadow: 0px 11px 20px 0px rgba(0, 0, 0, 0.2);
      cursor: pointer;
      transform: translateY(-10px) !important; }

      #owner-card {
        background-color:#FFFF00;
  margin-bottom: 70px;
  font-family: Bahnschrift; }

</style>
