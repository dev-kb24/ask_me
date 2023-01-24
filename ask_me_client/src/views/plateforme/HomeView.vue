<template>
    <div>
        <p>Bienvenue sur la HomeView</p>
        <formGames />
        <tabsGame />
    </div>
</template>
<script>
    import formGames from '@/components/games/formGames.vue';
    import tabsGame from '@/components/games/tabsGame.vue';
    export default {
        components:{
            formGames,tabsGame
        }
    }
</script>