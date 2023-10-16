<template>
    <div v-for="(post, ind) in listPost" :key= ind >
      <post :post="post"/>
    </div>
    
        
  </template>
<script>
import axios from 'axios';
import Post from './Post.vue';
export default {
  components: { Post },
  data(){
    return{
      listPosts: []
    }
  },
    methods: {
  increment() {
    this.$store.commit('increment')
  },

  async fetchPosts(){
    try {
      const response = axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10').data
      this.listPosts = response
    } catch (error) {
      console.log(error);
    }
    
  },
  mounted() {
    this.fetchPosts()
  },
}
}
</script>
<style lang="">
    
</style>