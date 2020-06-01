<template>
    <div class="px-8 py-4 bg-gray-300" style="border: 3px pink solid">
        
        <div class="flex-container">
            <div>
                <select v-model="typeInput" id="deptList">
                    <option  v-for="type in typeOptoins" v-bind:key="type" v-bind:value="type">
                        {{type}}
                    </option>
                </select>   
                <p>Selected is {{ typeInput }}</p>
            </div>
            <div>
                <input @keyup="getResults()" type="text" v-model='queryText'>
                <br>
                <p v-if="pickedLocation.length>0">{{ pickedLocation }}</p>
                
                <select>
                    <option v-for="i in candidateLocation" v-bind:key='i'> {{i}}</option>    
                </select>    
                Click on one: 
                <!-- <template v-if="candidateLocation.length>0" >
                <p  v-for="i in candidateLocation" v-bind:key='i' @click="selectLocation(i)"> {{ i }}</p>
                </template> -->
                <!-- <p v-else>No location found</p> -->
                
            </div>
            <div>
                <select v-model="forWhomSelected" id="deptList">
                    <option  v-for="type in forWhomOptions" v-bind:key="type" v-bind:value="type">
                        {{type}}
                    </option>
                </select>   
                <p>Selected is {{ forWhomSelected }}</p>
            </div>
            <div>
                <button @click="performSearch()">Search</button>
            </div>
        </div>
        
        
    </div>
</template>

<script>
import db from '../firebase'

export default {
    name: 'Search',
    data () {
        return {
            typeInput: '',
            typeOptoins: [
                'Shared Rooms',
                'Private Rooms',
                'Entire House',
            ],
            queryText: "",
            pickedLocation: {},
            candidateLocation: [],
            placesList: [],
            forWhomOptions: [
                'Girls',
                'Boys',
                'Family',
                'Any'
            ],
            forWhomSelected: ''

        }
    },
    methods: {
        getResults () {
            this.candidateLocation = this.placesList.filter( x => x.toLowerCase().includes(this.queryText.toLowerCase()) );
        },
        selectLocation(location){
            this.pickedLocation =location;
            this.queryText = location;
        },
        performSearch () {
            let queryObject = {
                type: this.typeInput,
                location: this.pickedLocation,
                forWhom: this.forWhomSelected
            }
            let a = this.$router.resolve({ name: 'Search', query: queryObject });            
            this.$router.push(a.href);

        }
    },
    mounted(){
        db.collection('locations').doc('list').get().then(
            (res) => {
                this.placesList = res.data().names;
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
.flex-container {
  display: flex;
  flex-wrap: nowrap;
}

.flex-container > div {
    border: 1px pink solid;
    padding: 10px;
}
</style>