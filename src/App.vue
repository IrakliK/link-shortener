<template>
  <div class="flex justify-center my-28 font-mono text-blue-600">
    <LinkShortener />
  </div>
</template>

<script>
import LinkShortener from "./components/LinkShortener.vue";
import "./assets/tailwind.css";

export default {
  name: "App",
  components: {
    LinkShortener,
  },
};
</script>

<style></style>
