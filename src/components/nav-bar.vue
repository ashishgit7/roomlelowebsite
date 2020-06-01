<template>
       <nav class="navbar navbar-expand-lg navbar-light sticky-top bg-light">
          <div class="container">
                  <a class="navbar-brand" href="/index.html">
                      <img style="width:134px" src="../assets/roomlelologo.png" alt="">
                  </a>
                  <button class="btn btn-primary" >find home</button>
                  <button class="navbar-toggler text-dark" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class=" nav nav-pills ml-auto">
                      <li class="nav-item">
                      <button id="home-btn" style="background-color: transparent;border:0;outline: 0;"><a class="nav-link active" id="home" href="/index.html" style="font-family: Bahnschrift;border-radius:20px;" >Home</a></button>
                      </li>
                      <li class="nav-item">
                       <button id="search-btn" style="background-color: transparent;border:0;outline: 0;"> <a class="nav-link" id="search-link" href="/search.html" style="font-family: Bahnschrift;border-radius:20px;">Search</a></button>
                      </li>
                      <li class="nav-item">
                        <button  style="background-color: transparent;border:0;outline: 0;"><router-link id="portal-btn" class="nav-link" to="/portal" style="font-family: Bahnschrift;border-radius:20px;">Portal</router-link></button>
                      </li>
                    </ul>
                  </div>
          </div>    
      </nav>
</template>

<script>
export default {
  data () {
    return {
      
    }
  }
}
</script>

<style>

</style>
