import { defineStore } from 'pinia'

export const userStore = defineStore('userStore',{
  state: () => ({
    email:''
  }),
  actions:{
   addEmail(email){
    this.email = email;
   }
  }
})