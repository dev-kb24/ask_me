<template>
  <div>
    <h1>Connexion</h1>
    <form @submit.prevent="login">
      <input v-model="email" type="email" placeholder="Email">
      <input v-model="password" type="password" placeholder="Password">
      <button type="submit">Login</button>
    </form>
  </div>
   
  </template>
  
  <script>
  import { loginAuth } from '@/services/authService.js';
  import {userStore} from '@/stores/userStore.js';
  export default {
    setup(){
            const store = userStore()
            return {
                store
            }
        },
    data() {
      return {
        email: '',
        password: '',
      };
    },
    methods: {
      async login() {
        const data = {
            email:this.email,
            password:this.password
        }
        loginAuth(data).then(res => {
          if(res.success){
            this.store.addEmail(this.email);
            localStorage.setItem('token', res.token);
            this.$router.push('/');
          }
           
        }).error((err)=>{
            console.error(err);
        })
      },
    },
  };
  </script>