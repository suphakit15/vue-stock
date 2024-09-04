<template>
    <main>
        <FrontendNav  />
        <div class="pt-8">
        <router-view/>
        </div>
        <FrontendFoot  />
    </main>

</template>

<script setup lang="ts">
import FrontendNav from '../components/frontend/FrontendNav.vue';
import FrontendFoot from '../components/frontend/FrontendFoot.vue';

</script>

<style scoped>

</style>