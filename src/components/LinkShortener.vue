<template>
  <div class="flex justify-center flex-col items-center">
    <h1>Link Shortener</h1>
    <UrlForm />
  </div>
</template>

<script>
import UrlForm from "../components/UrlForm.vue";
export default {
  name: "LinkShortener",
  components: {
    UrlForm,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style></style>
