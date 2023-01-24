<template>
    <main>
        <header>
            <ul>
                <router-link to="/">Home</router-link>
            </ul>
        </header>
        <router-view />
        <footer>
            <p>Le footer</p>
        </footer>
    </main>
</template>
<script>
import {RouterView,RouterLink} from 'vue-router'
export default {
    components:{
        RouterView,RouterLink
    }
}
</script>