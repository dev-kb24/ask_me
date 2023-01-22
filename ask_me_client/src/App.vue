<script>
import axios from 'axios';
export default {
  data(){
    return {
        phrases:[],
        phrase:null
    }
  },
 async created(){
    await axios.get('http://localhost:3000/api/phrases').then((res)=>{
      if(res.data.success){
        this.phrases = res.data.data;
      }
    })
  }, 
  methods:{
   async handleSubmit()
    {
      if(this.phrase !== null){
        let data = {
          phrase:this.phrase
        }

        await axios.post('http://localhost:3000/api/phrases/add',data,{
          headers: {
            'Content-Type': 'application/json'
          }
        }).then((res)=>{
            if(res.data.success){
              this.phrases.push(res.data.data);
            }
        }).finally(() => {
          this.phrase = null;
        })
      }
    },
    async deleteById(id)
    {
      await axios.delete(`http://localhost:3000/api/phrases/delete/${id}`).then( res => {
          if(res.data.success){
            this.phrases = this.phrases.filter(phrase => phrase._id !== res.data.id);
          }
        })
    }
  }
}
</script>
 
<template>
  <div>
    <ul v-for="p in phrases" :key="p">
      <li>{{ p.phrase }} <button @click="deleteById(p._id)">delete</button></li>
    </ul>
    <form @submit.prevent="handleSubmit">
      <input type="text" v-model="phrase" placeholder="Name">
      <button type="submit">Envoyer</button>
    </form>        
  </div>
</template>

