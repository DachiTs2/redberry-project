<template>
  <div class="w-full h-20 flex justify-center items-center">
    <div
      class="w-4/5 h-full border-b-[1px] border-black flex justify-between items-center"
    >
      <p class="text-xl font-bold text-black">{{ pageTitle }}</p>
      <p class="text-xl font-semibold text-black">{{ pageNumber }}/3</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    pageNumber: {
      type: Number,
      required: true,
    },
    pageTitle: {
      type: String,
      required: true,
    },
  },
};
</script>
