<template>
       <div>
            <table>
                <thead>
                    <th>Titre</th>
                    <th>type</th>
                    <th>Date de création</th>
                </thead>
                <tbody>
                    <tr v-for="game in store.games" :key="game">
                        <td>{{ game.title }}</td>
                        <td>{{ game.type }}</td>
                        <td>{{ game.created_at }}</td>
                    </tr>
                </tbody>
            </table>
       </div> 
</template>
<script>
import { getGames } from '@/services/gameService.js';
import { gamesStore } from '@/stores/gameStore.js';
export default {
    setup(){
        const store = gamesStore()
        return {
            store
        }
    },
    created(){
        getGames().then(res => {
            if(res.success){
                this.store.addGetGames(res.data);
            }
        })
    }
}
</script>