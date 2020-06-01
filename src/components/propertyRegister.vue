<template>
  <div>
      <ownerEntry></ownerEntry>
      <!-- ////////////// -->
   <div style="background-color:rgb(60,183,198);color:white" class="mx-1 px-2">
       <span class="mx-2 px-2" style="font-size:238%" >Trouble Managing <span class="px-2" style="font-weight:bold;font-size:138%">Your Home </span><br>or<br> <span class="px-2" style="font-weight:bold;font-size:157%">Property </span> 
       
       </span><span style="font-size:822%;line-height:51%"> ?</span>
   </div>
   <div style="text-align:center;height:227px" class="mt-4">
       <div>
   <button class="btn btn-light mt-2 mx-2 p-3"  ref="modal" data-toggle="modal" style="self-align:center;border:solid black;    width: -webkit-fill-available;
    font-size: larger;" data-target="#exampleModalCenter" type="button">
                  Register your property
                </button>
                </div>
             
    <img style="width:150px;display:float;float:right" class="mt-3"  src="../assets/joy.png" alt="">
              
  </div >
  <div style="displey:block;background-color:rgb(60,183,198);color:white">
      <p class="mx-3 p-2 text-center" style="width:fit-content">See how much you will earn</p>
  </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title:"my vue file"
    }
  }
}
</script>


<style>

</style>
