<template>
  <div class="w-full h-screen flex justify-start items-center">
    <div class="w-1/2 h-screen">
      <PageTitle pageTitle="განათლება" :pageNumber="3" />
      <div
        class="w-full h-[calc(100vh-5rem)] bg-yellow flex flex-col justify-start items-center"
      >
        <div
          class="w-4/5 h-24 flex flex-col justify-start items-start mt-8 space-y-3"
        >
          <label class="text-black text-sm">სასწავლებელი</label>
          <input
            type="text"
            class="w-full h-12 px-2 outline-none rounded-sm border-[1px] border-black"
          />
          <p class="text-sm text-red-500">error</p>
        </div>
        <div class="w-4/5 h-24 flex mt-8">
          <div
            class="w-1/2 h-full flex flex-col justify-start items-start space-y-3 pr-4"
          >
            <label class="text-black text-sm">ხარისხი</label>
            <select
              class="w-full h-12 px-2 outiline-none rounded-sm border-[1px] border-black"
            >
              <option value="" class="w-full h-12">muteli</option>
            </select>
            <p class="text-sm text-red-500">error</p>
          </div>
          <div
            class="w-1/2 h-full flex flex-col justify-start items-start space-y-3 pl-4"
          >
            <label class="text-black text-sm">დამთავრების რიცხვი</label>
            <input
              type="date"
              class="w-full h-12 px-2 outiline-none rounded-sm border-[1px] border-black"
            />
            <p class="text-sm text-red-500">error</p>
          </div>
        </div>
        <div class="w-4/5 h-72 space-y-3 mt-8">
          <label class="text-black text-sm"> აღწერა </label>
          <textarea
            class="w-full h-48 p-2 border-[1px] border-black rounded-sm outline-none"
          ></textarea>
          <p class="text-sm text-red-500">error</p>
        </div>
        <div class="w-4/5 h-[2px] bg-gray-300 mt-8"></div>
        <div class="w-4/5 h-14 flex justify-start items-center mt-6">
          <button class="bg-blue-400 px-4 h-full text-white rounded-md">
            სხვა სასწავლებლის დამატება
          </button>
        </div>
        <div class="w-4/5 h-14 flex justify-between items-center mt-8">
          <router-link :to="{ name: 'personal-info' }">
            <button
              :disabled="formIsValid ? false : true"
              class="w-56 h-10 rounded-lg text-white bg-purple-500"
            >
              უკან
            </button>
          </router-link>
          <router-link :to="{ name: 'education' }">
            <button
              :disabled="formIsValid ? false : true"
              class="w-56 h-10 rounded-lg text-white"
              :class="formIsValid ? 'bg-purple-500' : 'bg-red-500'"
            >
              დასრულება
            </button>
          </router-link>
        </div>
      </div>
    </div>

    <Resume />
  </div>
</template>
<script>
import Resume from "../components/Resume.vue";
import PageTitle from "../components/PageTitle.vue";

export default {
  components: { Resume, PageTitle },
};
</script>
