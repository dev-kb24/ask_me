<script>
import axios from 'axios';
export default {
  data(){
    return {
        phrases:[]
    }
  },
 async created(){
    await axios.get('http://localhost:3000/api/phrases').then((res)=>{
      this.phrases = res.data;
    })
  }
}
</script>
 
<template>
  <ul v-for="p in phrases" :key="p">
    <li>{{ p.phrase }}</li>
  </ul>
</template>

