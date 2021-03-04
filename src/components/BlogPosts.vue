<template id="BlogComp">
  <div class="blog">
    <h1>{{title | uppercase}}</h1>
    <p>
      {{content}}
    </p>
  </div>
</template>
<script>
  export default{
    props:["title","content"],
    name:'BlogPosts'
  }
</script>
