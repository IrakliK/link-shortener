<template>
  <form
    id="url-form"
    class="flex justify-center flex-col items-center mt-10 w-96 font-sans"
    @submit.prevent="processUrlForm"
  >
    <div class="mb-3 pt-0">
      <input
        type="text"
        placeholder="Enter Url"
        v-model="url"
        class="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-96"
      />
    </div>
    <div class="mt-3">
      <button
        class="bg-blue-500 text-white active:bg-blue-900 hover:bg-blue-900 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        @click="processUrlForm"
      >
        Submit
      </button>
    </div>
  </form>
</template>

<script>
export default {
  name: "UrlForm",
  data: () => ({
    url: "",
  }),
  methods: {
    processUrlForm: function () {
      this.url = "";
    },
  },
};
</script>

<style></style>
