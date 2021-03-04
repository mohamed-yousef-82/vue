<template>
  <div class="about">
    <h1>This is an about page</h1>
    <NewComp />
    <div class="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>Holy guacamole!</strong> You should check in on some of those fields below.
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>

  </div>
</template>
<script>
// @ is an alias to /src
import NewComp from "@/components/NewComp.vue";

export default {
  name: "about",
  components: {
    NewComp
  }
};
</script>
