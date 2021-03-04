<template id="services">
  <div class="services">
    <h1>{{title | reverse}}</h1>
    <p>
f    </p>
  </div>
</template>
<script>
  export default{
    name:'ServicesComp',
    data: function(){
      return{
        title:"title"
      }
    },
    filters:{
      reverse:function(val){
        return val.split("").reverse().join("");
      }
    }
  }
</script>
