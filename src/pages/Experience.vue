<template>
  <div class="w-full h-screen flex justify-start items-center">
    <div class="w-1/2 h-screen">
      <PageTitle pageTitle="გამოცდილება" :pageNumber="2" />

      <div
        class="w-full h-[calc(100vh-5rem)] flex flex-col justify-start items-center"
      >
        <div class="w-4/5 h-56 pt-8">
          <div class="w-full h-1/2 flex flex-col justify-start items-start">
            <label for="name" class="text-lg text-black font-semibold"
              >თანამდებობა</label
            >
            <input
              v-model="experience.post"
              type="text"
              class="w-full h-10 rounded-lg outline-none px-2 border-[1px] border-black"
            />
            <p class="text-sm text-red-500">{{ experience.postError }}</p>
          </div>
          <div class="w-full h-1/2 flex flex-col justify-start items-start">
            <label for="name" class="text-lg text-black font-semibold"
              >დამსაქმებელი</label
            >
            <input
              v-model="experience.employer"
              type="text"
              class="w-full h-10 rounded-lg outline-none px-2 border-[1px] border-black"
            />
            <p class="text-sm text-red-500">{{ experience.employerError }}</p>
          </div>
        </div>

        <div
          class="w-4/5 h-32 mt-16 flex justify-start items-center space-x-10"
        >
          <div
            class="w-1/2 h-full flex flex-col justify-start items-start space-y-3"
          >
            <label for="date" class="text-lg text-black font-semibold"
              >დაწყების რიცხვი</label
            >
            <input
              v-model="experience.startingDate"
              type="date"
              class="w-full h-10 rounded-lg outline-none px-2 border-[1px] border-black"
            />
            <p class="text-sm text-red-500">
              {{ experience.startingDateError }}
            </p>
          </div>

          <div
            class="w-1/2 h-full flex flex-col justify-start items-start space-y-3"
          >
            <label for="date" class="text-lg text-black font-semibold"
              >დასრულების რიცხვი</label
            >
            <input
              v-model="experience.finishDate"
              type="date"
              class="w-full h-10 rounded-lg outline-none px-2 border-[1px] border-black"
            />
            <p class="text-sm text-red-500">{{ experience.finishDateError }}</p>
          </div>
        </div>
        <div class="w-4/5 h-56 mt-8">
          <div class="w-full h-1/6 flex justify-start items-center">
            <p class="text-xl font-semibold text-black">აღწერა</p>
          </div>
          <div class="w-full h-5/6 py-2">
            <textarea
              v-model="experience.description"
              class="w-full h-full border-[1px] border-black rounded-lg p-2 outline-none"
            ></textarea>
          </div>
        </div>
        <div class="w-4/5 h-[2px] bg-gray-300 mt-8"></div>
        <div class="w-4/5 h-14 flex justify-start items-center mt-6">
          <button class="bg-blue-400 px-4 h-full text-white rounded-md">
            მეტი გამოცდილების დამატება
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
              შემდეგი
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
  data() {
    return {
      experience: {
        post: "",
        postError: "",
        employer: "",
        employerError: "",
        startingDate: "",
        startingDateError: "",
        finishDate: "",
        finishDateError: "",
        description: "",
      },

      formIsValid: false,
    };
  },

  watch: {
    experience: {
      handler(val) {
        if (val.post.length === 0) {
          val.postError = "ეს ველი სავალდებულოა";
        } else if (val.post.length > 0 && val.post.length < 2) {
          val.postError = "ეს ველი უნდა შეიცავდეს მინიმუმ 2 სიმბოლოს";
        } else {
          val.postError = "";
        }
        if (val.employer.length === 0) {
          val.employerError = "ეს ველი სავალდებულოა";
        } else if (val.employer.length > 0 && val.employer.length < 2) {
          val.employerError = "ეს ველი უნდა შეიცავდეს მინიმუმ 2 სიმბოლოს";
        } else {
          val.employerError = "";
        }
        if (val.finishDate.length === 0) {
          val.employerError = "ეს ველი სავალდებულოა";
        } else {
          val.employerError = "";
        }

        if (!val.postError && !val.employerError) {
          this.formIsValid = true;
        }
      },
      deep: true,
    },
  },
};
</script>
