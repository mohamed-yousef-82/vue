<template id="">
  <div class="">
    <p>{{tir}}</p>
  <TestComp />  
  </div>
</template>
<script>
import TestComp from "@/components/TestComp.vue";
export default{
  name:"test",
  data: function(){
    return {
      tir:"The Title"
    }
  },
  components:{
    TestComp
  }
}
</script>
