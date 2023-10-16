<template>
  <ul v-if="listPosts.length > 0" class="list_wrapper">
    <Post v-for="(post, ind) in listPosts" :key="ind" :post="post" />
  </ul>
  <h2 v-else>
    <Loading class="">Load</Loading>
  </h2>
</template>
<script>
import axios from "axios";
import Post from "./Post.vue";
export default {
  components: { Post },
  data() {
    return {
      listPosts: [],
    };
  },
  methods: {
    async fetchPosts() {
      try {
        const responsePost = await axios.get(
          "https://jsonplaceholder.typicode.com/posts?_limit=10"
        );
         const responseImg = await axios.get(
          "https://api.slingacademy.com/v1/sample-data/photos?_limit=10"         
        );
        const data = responsePost.data
        const img = responseImg.data.photos
        console.log(img);
        
        for (let index = 0; index < data.length; index++) { 
          let result = []     
            for (let j = 0; j < img.length; j++) {           
             result.push({ ...data[index], ...img[j] })                
          }
         this.listPosts=result
        }
      } catch (error) {
        console.log(error);
      }
    },
  },

  mounted() {
    this.fetchPosts();
  },
};
</script>
<style lang="scss">
.list_wrapper {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 14px;
}
</style>
