<template>
    <div class="main_wrapper">
        <div class="main_sidebar">
            <Sidebar />
        </div>
        <div class="main_posts">
            <router-view></router-view>
        </div>
        <div class="main_news">
            
        </div>
        
    </div>
</template>
<script>
import Sidebar from './Sidebar/Sidebar.vue';

export default {
    components: { Sidebar }
}
</script>
<style lang="scss">
.main_wrapper{
    display: grid;
    gap: 60px;
    grid-template-columns: 220px minmax(0,1fr) 380px;
    padding: 0 60px;
}
    
</style>