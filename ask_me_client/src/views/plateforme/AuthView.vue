<template>
    <div>
        <login />
        <createAccount />
    </div>
</template>
<script>
import login from '@/components/auth/login.vue';
import createAccount from '@/components/auth/createAccount.vue';
export default {
    components:{
        login,createAccount
    }
}
</script>