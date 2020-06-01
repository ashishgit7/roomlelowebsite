<template>
  <div>
    <!-- //filter-box end//// -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Filter</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p>Monthly rent</p>
            <div class="btn-group btn-group-toggle" data-toggle="buttons">
              <label
                class="btn mx-1 px-1 py-0"
                style="border:solid black;border-radius: 10px;"
                v-for="(rent,ind) in filters.price"
                v-bind:key="ind"
              >
                <input
                  type="radio"
                  name="options"
                  v-bind:id="'option'+ind"
                  autocomplete="off"
                  @click="inp($event)"
                  v-bind:value="(ind+1)"
                />
                {{rent}}
              </label>
            </div>
            <hr />
            <p>Amenity</p>
            <div class="btn-group btn-group-toggle" data-toggle="buttons" style="flex-wrap:wrap">
              <checkbox
                style="width:fit-content;margin-top: 0.5rem;margin-right: 1rem;"
                v-model="checkedProducts"
                v-for="(amenity,ind) in filters.amenities"
                v-bind:key="ind"
                :value="amenity"
                color="#0314de;"
              >{{amenity}}</checkbox>
            </div>

            <hr />
            <p>Nearby</p>
            <div class="btn-group btn-group-toggle" data-toggle="buttons" style="flex-wrap:wrap">
              <checkbox
                style="width:fit-content;margin-top: 0.5rem;margin-right: 1rem;"
                v-model="Nearplaces"
                v-for="(Nearby,ind) in filters.Nearby"
                v-bind:key="ind"
                :value="Nearby"
                color="#0314de;"
              >{{Nearby}}</checkbox>
            </div>
            <hr />

            <p>Max Security Deposit</p>
            <div class="btn-group btn-group-toggle" data-toggle="buttons">
              <label
                class="btn mx-1 px-1 py-0"
                style="border:solid black;border-radius: 10px;"
                :for="'option1'+ind"
                v-for="(securityDeposit,ind) in filters.securityDeposit"
                v-bind:key="ind"
              >
                <input
                  type="radio"
                  name="options"
                  v-bind:id="'option1'+ind"
                  autocomplete="off"
                  v-model="securityDepositRange"
                  :value="securityDeposit"
                />
                {{securityDeposit}}
              </label>
            </div>
            <hr />
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary"  @click="showresult" data-dismiss="modal">Filter</button>
          </div>
        </div>
      </div>
    </div>
    <!-- /// filter-box end/// -->

    <div
      class="container py-3 mb-1 sticky-top search-box"
      style="background-color:white;height:150px"
    >
      <div class="form-row" style="display:flex;padding:0px;">
        <div class="input-group input-group-sm mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroup-sizing-sm">Location</span>
          </div>
          <input
            type="text"
            class="form-control"
            id="validationCustom02"
            placeholder="Location"
            list="places"
            v-model="location"
            autocomplete="off"
            @keyup.enter="showresult"
          />
          <datalist id="places">
            <option v-for="(place,ind) in filters.location" v-bind:key="ind">{{place}}</option>
          </datalist>
        </div>
        <div class="form-row" style="position: relative;bottom: 27px;width:100%">
          <div class="col-5">
            <hr style="margin-bottom: 0rem" />

            <div style="display:flex;border-right:solid black">
              <select
                class="form-control"
                id="exampleFormControlSelect1"
                v-model="type"
                @click="showresult"
                style="border:none;display:inline;padding:0px!important"
                
              >
                 
                <option v-for="(houseType,ind) in filters.type" v-bind:key="ind" >{{houseType}}</option>
              </select>
            </div>
          </div>
          <div class="col">
            <hr style="margin-bottom: 0rem" />

            <div style="display:flex;">
              <select
                class="form-control"
                id="places"
                @click="showresult"
                style="border:none;display:inline;width:100%;padding:0px!important"
                v-model="Nearby"
                placeholder="nearby"
              >
               <option disabled selected>Nearby</option>
               <option > Anywhere</option>
                <option v-for="(place,ind) in filters.Nearby" v-bind:key="ind">{{place}}</option>
              </select>
            </div>
          </div>

          <div class="col">
            <hr style="margin-bottom: 0rem" />

            <div style="display:flex;border-left:solid black">
              <select
                class="form-control"
                id="exampleFormControlSelect2"
                v-model="ForWhom"
                @click="showresult"
                style="border:none;padding:0px!important;"
              >
                <option v-for="(forWhom,ind) in filters.forWhom" v-bind:key="ind">{{forWhom}}</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <hr
        style="margin-top:0px;bottom: 20px;position: relative;    background-color: #13adbc;
    border-width: 2px;"
      />
      <button
        type="button"
        class="btn my-2"
        data-toggle="modal"
        data-target="#exampleModal"
        style="border:solid black;color:red;position: relative;
    bottom: 30px;    padding: 1px 4px;
"
      >filter</button>
    </div>
    <div class="container mb-2">
      <div class="row">
        <div class="col pb-3">
          <div class="row row-cols-1 row-cols-xl-2 row-cols-md-2">
            <div
              class="col mb-4"
              v-show="showlist.length!=0"
              v-for="(place,ind) in showlist"
              v-bind:key="ind"
            >
              <div class="card mt-3 wt-100">
                <div class="row">
                  <div class="col-7">
                    <img class="card-img rounded m-1" :src="place.photos[0]" alt />
                    <p
                      class="card-text text-success mb-0"
                      style="font-weight: bold; font-size:x-small"
                    >
                      Deposit:
                      <span
                        style="font-size:medium"
                        class="text-dark"
                      >{{place.securityDeposit}}</span>
                    </p>

                    <p
                      class="text-left mb-0 text-success"
                      style="font-weight: bold; font-size:x-small"
                    >
                      Starting from
                      <span
                        style="font-size:15px"
                        class="text-dark"
                      >Rs {{place.priceArray[0]}}/mon. only</span>
                    </p>
                  </div>
                  <div class="col">
                    <div class="cardbody">
                      <h5
                        class="card-title text-warning"
                        style="font-weight:bold"
                      >2 {{place.type}} in {{place.location}}</h5>

                      <div style="display:flex;flex-wrap:wrap">
                        <img
                          class="mx-2 my-1"
                          v-for="(amenity,ind) in place.amenities"
                          style="width:10%;border-radius:10px 10px 10px 10px;"
                          :src="'./img/'+ amenity+'.png'"
                          v-bind:key="ind"
                        />
                      </div>

                      <hr class="mb-0" />

                      <div class="text-right">
                        <router-link v-bind:to="'/detail'+ place.id" style="text-decoration:none">
                          <button
                            class="btn btn-success mb-1 mr-1 px-0"
                            style="font-size:small"
                          >Book your Visit</button>
                        </router-link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- //// -->

          <div v-show="showlist.length==0">
            <h1>Sorry our service is not available here</h1>
          </div>
          <!-- end property card -->
        </div>
      </div>
    </div>
  </div>
  <!-- end Search page -->
</template> 

<script>
import db from "../firebase";
import checkbox from "vue-material-checkbox";
// import data from '../firebase'
export default {
  components: { checkbox },
  data() {
    return {
      availablelocation: [],
      location: "",
      type: "",
      ForWhom: "",
      pricerange: 0,
      SecurityDeposit: 0,
      placelist: [],
      ListPlace: [],
      checkedProducts: [],
      showlist: [],
      RoomAmenities: [],
      Nearplaces: [],
      filters: {},
      Nearby: '',
      securityDepositRange: 0,
    
    };
  },
  methods: {
    inp: function() {
      var optionText = event.target.value;
      console.log(optionText);
      this.pricerange = optionText;
    },
   
    readinp: function() {
      console.log(this.checkedProducts);
      console.log(this.Nearplaces);
    },
    showresult: function() {
      // console.log(this.checkedProducts);
      // console.log(this.location);
      // console.log(this.type);
      // console.log(this.ForWhom);
      console.log("near")
      console.log(this.Nearby)
      // console.log(this.Nearplaces);
      // console.log(this.pricerange);
      // console.log(this.securityDepositRange);
       console.log("start")
      this.showlist = [];
      this.placelist.forEach(place => {
        if(this.location.length!=0){
          if(this.location.toLowerCase()!=place.location.toLowerCase())
          {return;}
        }
        if(this.type.length!=0){
          if(this.type.toLowerCase()!=place.type.toLowerCase()) 
          { 
            return;}
        }
        if(this.ForWhom.length!=0){
          if(this.ForWhom.toLowerCase()!=place.forWhom.toLowerCase())
          {return;}
        }  

          let res;
          if (this.checkedProducts.length != 0) {
            res = !this.checkedProducts.some(
              val => place.amenities.indexOf(val) === -1
            );
            if (res === false) {
              return;
            }
          }
          //  if(this.Nearby.length!=0||this.Nearby!="Anywhere"){  
          //    let check=false;
          //     place.nearby.forEach((nearby)=>{
          //       if(nearby===this.Nearby)
          //       {
          //         check=true;
          //       }
                  
          //     })
          //     if(check==false)
          //     return;
          // }

          if (this.Nearplaces.length != 0) {
            res = !this.Nearplaces.some(
              val => place.nearby.indexOf(val) === -1
            );
            if (!res) return;
          }

          if (this.pricerange == 1 && place.priceArray[0] > 5000) {
         
            return;
          } 
          else if ( this.pricerange == 2 &&(place.priceArray[0] < 5000 || place.priceArray[0] > 10000)) {

            return;
          } else if (this.pricerange==3&&place.priceArray[0] < 10000) {
         
            return;
          }
   

          if (this.securityDepositRange == 0) this.showlist.push(place);
          else if (
            place.minSecurityDeposit <= this.securityDepositRange
          ) {
              this.showlist.push(place)
          }
        
      });
      console.log("end")
      console.log("hey")
      console.log(this.showlist);
      console.log("placelist")
      console.log(this.placelist);
    }
  },
  created() {
    db.collection("properties")
      .get()
      .then(res => {
        res.forEach(doc => {
          // console.log(doc.id);
          let val = JSON.parse(JSON.stringify(doc.data()));
          this.placelist.push(val);
        });
      });
    // this.type = this.$route.query.queryObject.type;
    if(typeof(this.$route.query.queryObject.location)==="undefined")
    this.location="none";
    else
    this.location = this.$route.query.queryObject.location;
    // this.ForWhom = this.$route.query.queryObject.ForWhom;
  },
  mounted() {
    db.collection("properties")
      .get()
      .then(res => {
        res.forEach(doc => {
          // console.log(doc.id);
          let val = JSON.parse(JSON.stringify(doc.data()));
          if(this.location!="none"){
          if (val.location.toLowerCase() == this.location.toLowerCase()){
            this.showlist.push(val);
          }}
          
        });
      });

    db.collection("locations")
      .doc("list")
      .get()
      .then(res => {
        this.availablelocation = res.data().names;
        //  console.log(this.availablelocation)
      });
    db.collection("filters")
      .doc("filters")
      .get()
      .then(res => {
        this.RoomAmenities = res.data().amenities;
        this.filters = res.data();
        console.log(this.filters);
      });
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");
div {
  font-family: "Montserrat", sans-serif;
}
label {
  margin-bottom: 0 !important;
}
.active {
  background-color: #0066cc !important;
  border: solid black;
  border-radius: 10px;
  padding: 2px;
}
.card-header {
  padding: -0.25rem 1.25rem !important;
}
.myamenity {
  margin: 5px;
  padding: 5px;
  color: blue;
  background-color: yellow;
  border-radius: 30%;
}
.myfil {
  top: 150px !important;
}

.bg-secondary {
  background-color: yellow !important ;
}
.search-box {
  -webkit-box-shadow: -1px 9px 40px -12px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -1px 9px 40px -12px rgba(0, 0, 0, 0.75);
  box-shadow: -1px 9px 40px -12px rgba(0, 0, 0, 0.75);
}

.card:hover {
  -webkit-box-shadow: -1px 9px 40px -12px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -1px 9px 40px -12px rgba(0, 0, 0, 0.75);
  box-shadow: -1px 9px 40px -12px rgba(0, 0, 0, 0.75);
}
.mybtn {
  border: 1px solid #0066cc !important;
  background-color: #0099cc !important;
  color: #ffffff !important;
}
.mybtn:hover {
  border: 1px solid #0099cc !important;
  background-color: #00aacc !important;
  color: #ffffff !important;
}
.mybtn:disabled,
button[disabled] {
  border: 1px solid #999999 !important;
  background-color: #cccccc !important;
  color: #666666 !important;
}
a {
  text-decoration: none;
}
.sticky {
  position: sticky !important;
  position: -webkit-sticky !important;
}
</style>
