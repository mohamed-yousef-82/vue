<template id="">
  <div id="nav">
    <router-link to="/" tag="span" exact>Home</router-link> |
    <router-link to="/about" tag="span">About</router-link>
    <router-link to="/services" tag="span">Services</router-link>
    <router-link to="/blog" tag="span">Blog</router-link>
  </div>
</template>
<script>
  export default{
    name:'HeaderComp'
  }
</script>
