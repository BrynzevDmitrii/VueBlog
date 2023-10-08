<template >
    <div>
        <header>
            <div class="wrapper">
                <div class="logo_blok">
                <div class="logo" />
                <p class="name_blog">Блог</p>
            </div>
                <div class="serch"> <Search /> <ButtonCreatePost /></div>
                <div class="auth"><Login /></div>
                
            </div>
        </header>

    </div>
    
</template>
<script>
    import Search from './Search/Search.vue';
    import ButtonCreatePost from './ButtonCreatePost/ButtonCreatePost.vue';
    import Login from './login/login.vue';
export default {
    
    components:{
        Search ,ButtonCreatePost, Login
    }
}
</script>
<style scope lang="scss">
@import  '../../assets/varieble/variebles.scss';
    header {
    backdrop-filter: blur(12px);
    background: $background-color-primary;
    position: sticky;
    top: 0;
    transition: background-color .2s ease-in-out 0s;
    width: 100%;
    z-index: 10;
}
    .wrapper{
        align-items: center;
        display: grid;
        gap: 60px;
        grid-template-columns: 220px 1fr 380px;
        padding: 24px 60px;
        
    }

    .name_blog{
        color: $color-text-primary;
        font-size: $logo-font-size;
        font-weight: 600;
        letter-spacing: -.02em;
        line-height: $logo-line-height;
        margin-left: 9px;
    }

    .serch{
        align-items: center;
        display: flex;
        justify-content: space-between;
        margin: 0 auto;
        max-width: 840px;
        width: 100%;
    }

    .auth{
        align-items: center;
        display: flex;
        gap: 26px;
        justify-content: flex-end;
    }
</style>