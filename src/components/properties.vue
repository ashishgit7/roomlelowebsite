<template>
  <div>
       <div class="container my-3" id="properties">
          <h4 class="text-center pt-1" style="font-weight: 600;font-family: Bahnschrift;">
            Popular properties
          </h4>

           <hr>

          <div class="row" id="row">
            <!-- property card mini -->

                      <!-- from db -->
              
            <!-- end property card mini -->
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
  mounted(){

    db.collection('properties').get().then((res) =>{
        // console.log(res.docs[0].data().name);
        res.docs.forEach( function(element, index) {
            var anime;
            if(index%2==0) 
                anime = "fade-up"; 
            else 
                anime = "fade-down"; 
            

            var newEle = `

            <div class="col-lg-3 col-md-6 col-10 mx-4" style="margin-bottom: 30px;">
              <div class="card" data-aos=${anime}>
                <img class="card-img-top" src="${element.data().photos[0]}" alt="Card image cap">
                <div class="card-body">
                  <h5 class="card-title mb-0">${element.data().name}</h5>
                  <p>
                      <small>${element.data().location}</small>
                  </p>
                  <p class="card-text">It is a ${element.data().type} for ${element.data().forWhom}</p>
                  <p class="card-text text-right"><small>starting from</small> Rs. ${element.data().priceArray[0]}/<small>month</small> </p>
                </div>
              </div>
            </div>

            `
            document.getElementById('row').innerHTML += newEle
        });
    })
    .catch((err)=>{
        console.log(err);
    })
  }
}
</script>

<style scoped>


</style>
