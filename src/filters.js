import Vue from "vue";
Vue.filter('uppercase',function(v){
  return v.toUpperCase();
});
