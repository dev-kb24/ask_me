<template>
    <div>
        <form @submit.prevent="handleSubmit">
            <div class="section-input">
                <label for="titleGame">Titre du jeu : </label>
                <input id="titleGame" type="text" v-model="game.title">
            </div>
            <div class="section-input">
                <label for="typeGame">Type de jeu : </label>
                <select id="typeGame" v-model="game.type">
                    <option value="sentence">Sentence</option>
                </select>
            </div>
            <div class="section-input" v-if="game.type === 'sentence'">
                <div v-for="modality in modalities" :key="modality">
                    <label :for="modality.id">Phrase : </label>
                    <input type="text" :id="modality.id" v-model="modality.sentence">
                </div>
                <button @click.prevent="addModality">Ajouter une phrase</button>
            </div>
            <button type="submit">Créer le jeu</button>
        </form>
    </div>    
</template>
<script>
    import {addGames} from '@/services/gameService.js';
    import { gamesStore } from '@/stores/gameStore.js';
    export default {
        setup(){
            const store = gamesStore()
            return {
                store
            }
        },
        data(){
            return {
                game:{
                    title:null,
                    type:null
                },
                modalities:[
                    {
                        id:Date.now(),
                        sentence:null
                    }
                ]
            }
        },
        methods:{
            handleSubmit(){
                if(this.game.title !== null && this.game.type !== null){
                    addGames(this.game).then(res => {
                        if(res.success){
                            this.store.addOneGame(res.data);
                        }
                    }).finally(()=>{
                        this.game.title = null;
                        this.game.type = null;
                    })
                }else{
                    console.log('error');
                }
            },
            addModality(){
                this.modalities.push({
                    id:Date.now(),
                    sentence:null
                })
            }
        }
    }
</script>