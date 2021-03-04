<template id="blog">
  <div class="blog">
    <h1>Blog</h1>
    <BlogPosts
    v-for="post in posts"
    v-bind:key="post.id"
    :title="post.title"
    :content="post.content"/>
  </div>
</template>
<script>
import BlogPosts from '@/components/BlogPosts.vue';
import BlogJson from "../json/blog.json";
  export default{
    name:'blog',
    data: function(){
      return{
        title:"This Is Blog Page",
        posts:BlogJson
      }
    },
    components:{
      BlogPosts
    }
  }
</script>
