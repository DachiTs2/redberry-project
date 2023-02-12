<template>
  <button
    @click="navigateToMain"
    class="fixed rounded-full top-4 left-4 bg-gray-200 px-4 py-2"
  >
    &lt
  </button>
  <div
    v-if="popup"
    class="w-72 h-20 bg-gray-200 fixed top-4 right-4 rounded-lg p-4"
  >
    <p>რეზიუმე წარმატებით გაიგზავნა</p>
    <p @click="close" class="absolute cursor-pointer top-2 right-2">X</p>
  </div>
  <div class="w-full h-auto flex justify-center items-center">
    <Resume />
  </div>
</template>

<script>
import Resume from "../components/Resume.vue";

export default {
  components: { Resume },
  data() {
    return {
      popup: true,
    };
  },
  methods: {
    close() {
      this.popup = false;
    },
    navigateToMain() {
      this.$store.commit("cleanStore");
      this.$router.push({ name: "home" });
    },
  },
};
</script>
