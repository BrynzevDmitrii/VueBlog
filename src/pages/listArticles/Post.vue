<template>
  <li class="post_wrapper">
    <div class="post_title">{{ post.title }}</div>
    <div class="post_description">{{ post.body }}</div>
    <div class="post_img">
      <img :src= post.url  alt="img" />
    </div>
    <div class="post_stub"></div>
  </li>
</template>
<script>
export default {
  props: {
    post: {
      required: true,
    },
  },
};
</script>
<style lang="scss">
@import './style.scss'
</style>
