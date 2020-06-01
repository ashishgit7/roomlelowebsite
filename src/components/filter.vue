<template>
	<div class="sticky-top" style="top:10px!important">
		
	<!-- <button class="btn btn-primary">find home</button> -->
   <!-- <div id="search-div" style="position: fixed;bottom:0; background-color: rgba(220,220,220,0.9);z-index: 111;margin:0; padding:20px;width: 100%;">
            <div class="form-row">
                <div class="col-md-3">
                    <label for="validationCustom01" style="font-family: Bahnschrift;margin-bottom:10px;">Property Type:</label>
                    <select class="form-control" id="exampleFormControlSelect1" style="font-family: Bahnschrift;color: rgba(0,191,255,0.8);" v-model="typeinput">
                        <option>Private Rooms</option>
                        <option>Shared Rooms</option>
                        <option>Whole House</option>
                    </select>
                </div>
                <div class="col ">
                    <label for="validationCustom02" style="font-family: Bahnschrift;margin-bottom:10px;">Location:</label>
                    <input type="text" class="form-control" id="validationCustom02" placeholder="Location"  list="places" style="font-family: Bahnschrift;color: rgba(0,191,255,0.8);" autocomplete=off v-model="candidatelocation">
                    <datalist  id="places" style="font-family: Bahnschrift;color: rgba(0,191,255,0.8);" > -->
                       <!-- from db -->
                       <!-- <option v-for="place in places" v-bind:key="place">{{place}}</option>
                    </datalist>
                </div>
                <div class="col">
           

           <label for="validationCustom02" style="font-family: Bahnschrift;margin-bottom:10px;">Near by:</label>
              <select
                class="form-control"
                id="places"
                
                style="border:none;display:inline;width:100%;padding:0px!important"
              
              >
                <option>Assi Ghat</option>
                <option>Ravidas gate</option>
                <option>BHU</option>
              </select>
            
          </div>
                
                <div class="col">
                    <label for="validationCustom01" style="font-family: Bahnschrift;margin-bottom:10px;">For Whom:</label>
                    <select class="form-control" id="exampleFormControlSelect2" style="font-family: Bahnschrift;color: rgba(0,191,255,0.8);" v-model="forwhomselected" autocomplete="off">
                        <option>Boys</option>
                        <option>Girls</option>
                        <option>Family</option>
                    </select>
                </div>

                <div class="col-md-1 d-flex align-content-end">
                    <button class="btn btn-block btn-secondary mt-md-auto mt-4 mybtn" :disabled="this.candidatelocation.length==0||this.forwhomselected.length==0||this.typeinput.length==0" @click="goto" >Search</button>
                </div>
            </div>
        </div> -->

        </div>
</template>

<script>
import db from '../firebase'

export default {
    props:['queryObject'],
  data () {
    return {
      location:'',
      typeinput:'',	
      forwhomselected:'',	
      candidatelocation:'',	
      places: [
          'durga kund',
          'mall',
          'lanka',
      ]
    }
  },
   methods: {
       checkinp:function(){
        //    console.log(this.candidatelocation);
          if(this.candidatelocation.length==0){
              
          return true ;}
          else{
          return false;}
       },
       goto:function(){
           let queryObject = {
                type: this.typeinput,
                location: this.candidatelocation,
                ForWhom: this.forwhomselected,
            }
        //   console.log(queryObject);  
          this.$router.push({name:'result',query:{queryObject}});
       }
    },
     mounted(){
        db.collection('locations').doc('list').get().then(
            (res) => {
            this.places=res.data().names
            }
        ).catch(
            (err)=>{
                console.log(err)
            }
        )
    }
}
</script>

<style scoped>
.mybtn {
  border: 1px solid #0066cc!important;
  background-color: #0099cc!important;
  color: #ffffff!important;

}

.mybtn:hover {
  border: 1px solid #0099cc!important;
  background-color: #00aacc!important;
  color: #ffffff!important;

}

.mybtn:disabled,
button[disabled]{
  border: 1px solid #999999!important;
  background-color: #cccccc!important;
  color: #666666!important;
}
</style>
