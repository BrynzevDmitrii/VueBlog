<template>
    <aside class="sidebar">
        <nav>
        <ul class="aside_menu" >
                <li v-for="page in sideBarPages" class='aside_menu__item'>
                <img :src= "`src/assets/images/${page.iconPath}`"  alt='item-icon'/>
                    <router-link :to=page.path>
                    {{page.page}}
                    </router-link>
               
                </li>
            </ul>
            
        </nav>

        
    </aside>
</template>
<script>
export default {
    data() {
        return {
            sideBarPages:[
                {page: 'Моя лента', path:'/my', iconPath:'my.svg'},
                {page: 'Закладки', path:'/bookmarks', iconPath:'bookmarks.svg'},
                {page: 'События', path:'/events', iconPath:'events.svg'},
                {page: 'Курсы', path:'/courses', iconPath:'courses.svg'}
            ]
        }
    },
}
</script>
<style >
@import './style.scss'
    
</style>