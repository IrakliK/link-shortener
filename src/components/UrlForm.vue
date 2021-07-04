<template>
  <div>
    <form
      id="url-form"
      class="flex justify-center flex-col items-center mt-10 w-96 font-sans"
      @submit.prevent="processUrlForm"
    >
      <div class="mb-3 pt-0">
        <input
          type="text"
          placeholder="Enter URL"
          v-model="url"
          class="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm border-2 shadow outline-none focus:outline-none w-96"
          v-bind:class="{ 'border-red-500': !isValid }"
          @keyup="validate"
          required
        />
      </div>
      <span class="text-red-500 font-mono">{{
        isValid ? "" : "Invalid URL"
      }}</span>
      <div class="mt-3">
        <button
          class="bg-blue-500 text-white font-bold py-2 px-4 rounded"
          v-bind:class="{ buttonDisabled: !isValid }"
          :disabled="!isValid"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
    <h1>{{ postId }}</h1>
  </div>
</template>

<script>
export default {
  name: "UrlForm",
  data: () => ({
    url: "",
    postId: "",
    isValid: false,
  }),
  methods: {
    processUrlForm: function () {
      this.url = "";
    },
    validate: function (event) {
      const regex = new RegExp(
        "https?:\\/\\/(\\w+\\.)*(\\w{2,4})(\\/|)(\\?(.+((=.)|)+(&|))*|)"
      );
      if (regex.test(event.target.value)) {
        this.isValid = true;
        return;
      }
      this.isValid = false;
    },
  },
};
</script>

<style></style>
