<template>
  <div id="wrapper" style="margin-top: 70px;">
   <!-- ///// -->
   <!-- <div class="col ">
                    <label for="validationCustom02" style="font-family: Bahnschrift;margin-bottom:10px;">Find home by Location:</label>
                    <input type="text" class="form-control" id="validationCustom02" placeholder="Location"  list="places" style="font-family: Bahnschrift;color: rgba(0,191,255,0.8);" autocomplete=off v-model="candidatelocation">
                    <datalist  id="places" style="font-family: Bahnschrift;color: rgba(0,191,255,0.8);" >
                      
                       <option v-for="place in places" v-bind:key="place">{{place}}</option>
                    </datalist>
                </div>
                <hr style="background-color:yellow"> -->
    <!-- ///// -->
    
      <div class="container" style="margin-right: 0px;padding: 0px; margin-top: 10px; margin-bottom: 130px;">
                  <div id="carouselExampleSlidesOnly" class="carousel slide " data-ride="carousel">
                      <div class="carousel-inner my-lg-4 py-lg-4">
                          <div class="carousel-item active" id="image-div">
                          <img id="back-img" :src="homeBgImg" alt="First slide" style="float: right; width: 50vw;">
                          </div>
                      </div>
                  </div>
          </div>

          <div id="heading" style="position: absolute; top:30%;left:6%;">
            <h4 id="h4-1" style="font-family: Bahnschrift;">Search, Select</h4>
              <h4 id="h4-2" style="font-family: Bahnschrift;">And Shift To Your</h4>
              <h1 id="h1-1" style="font-family: Bahnschrift; font-size: 55px; color: rgb(0,191,255); font-weight:600;">Perfect Home</h1>
              <p id="p-1" style="font-family: Bahnschrift; font-size: 18px;color: dimgrey; font-weight: 300;">A perfect solution for the home seeker where we provide <br> room on rent at lowest possible cost. </p>
              <button id="btn-explore" type="button" style="font-family: Bahnschrift;background-color: rgba(0,191,255,0.8);color:white; outline: 0;border:0; width: 100px;height: 40px;border-radius:20px;" onclick="doScrolling('#properties',2000)">Explore</button> 
          </div>
          <div class="col col-xl-6">
                    <!-- <label for="validationCustom02" style="font-family: Bahnschrift;margin-bottom:10px;">Location:</label> -->
                    <div class="input-group bg-dark">
                    <input @keyup="goto" type="text" class="form-control " id="validationCustom02" placeholder="Location"  list="places" style="font-family: Bahnschrift;color: rgba(0,191,255,0.8);border: solid grey;" autocomplete=off v-model="candidatelocation">
                    <div class="input-group-append">
                   <svg class="bi bi-search d-inline" width="2em" height="1em" viewBox="0 0 16 16" fill="white" xmlns="http://www.w3.org/2000/svg" style="border:solid grey;height:100%;background-color:grey">
                      <path fill-rule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"/>
                      <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
                    </svg>
                    </div>
                    </div>
                    <datalist  id="places" style="font-family: Bahnschrift;color: rgba(0,191,255,0.8);" >
                      
                       <option v-for="place in places" v-bind:key="place">{{place}}</option>
                    </datalist>
                </div>
                <hr style="background-color:yellow">
    </div>
</template>

<script>
export default {
  data () {
    return {
      title:"my vue file",
    candidatelocation:'',
    homeBgImg:'./img/back.png',
    }
  },
  methods:{
    goto:function(){
           let queryObject = {
                // type: this.typeinput,
                location: this.candidatelocation,
                // ForWhom: this.forwhomselected,
            }
        //   console.log(queryObject);  
          this.$router.push({name:'result',query:{queryObject}});
       }
  },
  created(){
         if(window.innerWidth<=480)
          this.homeBgImg='./img/background.png';
          else
           this.homeBgImg='./img/back.png';
  },
   mounted(){
    document.getElementById('home').classList.add('active');
    document.getElementById('home').style.color = 'white';
    document.getElementById('search-link').style.color = 'blue';
    document.getElementById('portal-btn').style.backgroundColor = 'white';
    document.getElementById('portal-btn').style.color = 'blue';
    window.onresize = () => {
                 console.log(window.innerWidth);
                 console.log(typeof(window.innerWidth));
                 if(window.innerWidth<=480){
                   this.homeBgImg='./img/background.png';
                 }
                 else{
                   this.homeBgImg='./img/back.png'
                 }
            }
  }
  
}
</script>

<style scoped>
#btn-explore:active{
  transition:all ease 0.2s;
  transform:scale(0.9);
}
</style>