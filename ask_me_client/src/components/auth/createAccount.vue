<template>
    <div>
        <h1>Créer un compte</h1>
        <form @submit.prevent="createAccount">
            <input v-model="email" type="email" placeholder="Email">
            <input v-model="password" type="password" placeholder="Password">
            <input v-model="valid_password" type="password" placeholder="Valid password">
            <button type="submit">Login</button>
        </form>
    </div>
  </template>
  
  <script>
  import { createAccountAuth } from '@/services/authService.js';
  import { userStore } from '@/stores/userStore.js';
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
        valid_password:''
      };
    },
    methods: {
      async createAccount() {
        const data = {
            email:this.email,
            password:this.password
        }
        createAccountAuth(data).then(res => {
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