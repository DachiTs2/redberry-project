<template>
  <MainPageNavbar />
  <div
    class="w-full h-[calc(100vh-5rem)] flex justify-center items-center relative"
  >
    <img
      src="../assets/Background.png"
      alt="Background"
      class="w-full h-full object-cover object-center absolute top-0 left-0"
    />
    <router-link :to="{ name: 'personal-info' }" class="absolute z-50">
      <button class="w-96 h-10 rounded-lg bg-black text-white">
        რეზიუმეს დამატება
      </button>
    </router-link>
  </div>
</template>

<script>
import MainPageNavbar from "../components/MainPageNavbar.vue";

export default {
  components: { MainPageNavbar },
};
</script>
