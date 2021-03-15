<template id="services">
  <div class="services">
    <h1>{{title | reverse}}</h1>
    <p>
f    </p>
   <ul class="list">
     <li>service num 1</li>
     <li>service num 2</li>
     <li>service num 3</li>
   </ul>
  </div>
</template>
<style lang="scss">
@import "../assets/import";
$lang:en;
$direction:ltr;
@if $lang == en{
  $direction:ltr;
}@else{
  $direction: rtl;

}
$mainwidth:50%;
$color: #c6538c;
$orange:orangered;
@mixin bg($col){
  background:$col ;
}
%item{
  padding: 10px;
  border: 1px solid #ddd;
  background: #fff;
  color: #444;
  list-style: none;
}
.list{
border: 5px solid red;
width: $mainwidth + 15%;
margin: auto;
direction: $direction;
li{
  @extend %item;
}

}
h1{
  @include bg($orange);
}
.services{
  background: $color;
}
</style>
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
