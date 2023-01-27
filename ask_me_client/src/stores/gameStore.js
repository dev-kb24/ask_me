import { defineStore } from 'pinia'

export const gamesStore = defineStore('gameStore',{
  state: () => ({
    games:[]
  }),
  actions:{
    addGetGames(games){
      this.games = games;
    },
    addOneGame(game){
      this.games.push(game);
    }
  }
})
