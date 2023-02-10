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
              v-model="experience.position"
              @input="positionChangeHandler"
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
              @input="employerChangeHandler"
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
              @change="startDateChangeHandler"
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
              v-model="experience.job_end_date"
              @change="finishDateChangeHandler"
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
          <div class="w-full h-4/6 py-2">
            <textarea
              v-model="experience.job_description"
              @input="descriptionChangeHandler"
              class="w-full h-full border-[1px] border-black rounded-lg p-2 outline-none"
            ></textarea>
          </div>
          <div class="w-full h-1/6 flex justify-start items-start"></div>
          <p class="text-sm text-red-500">{{ experience.descriptionError }}</p>
        </div>
        <div class="w-4/5 h-[2px] bg-gray-300 mt-8"></div>
        <div class="w-4/5 h-14 flex justify-start items-center mt-6">
          <button
            class="bg-blue-400 px-4 h-full text-white rounded-md"
            @click="addCurrentExperience"
          >
            მეტი გამოცდილების დამატება
          </button>
        </div>
        <div class="w-4/5 h-14 flex justify-between items-center mt-8">
          <router-link :to="{ name: 'personal-info' }">
            <button class="w-56 h-10 rounded-lg text-white bg-purple-500">
              უკან
            </button>
          </router-link>
          <button
            @click="nextPageHandler"
            :disabled="formIsValid ? false : true"
            class="w-56 h-10 rounded-lg text-white"
            :class="formIsValid ? 'bg-purple-500' : 'bg-red-500'"
          >
            შემდეგი
          </button>
        </div>
      </div>
    </div>
    <Resume />
  </div>
</template>

<script>
import Resume from "../components/Resume.vue";
import PageTitle from "../components/PageTitle.vue";
import { mapState } from "vuex";

export default {
  components: { Resume, PageTitle },
  data() {
    return {
      experience: {
        position: "",
        positionError: "",
        employer: "",
        employerError: "",
        startingDate: "",
        startingDateError: "",
        job_end_date: "",
        finishDateError: "",
        job_description: "",
        descriptionError: "",
      },

      formIsValid: false,
    };
  },
  created() {
    this.experience.position = this.position;
    this.experience.startingDate = this.job_start_date;
    this.experience.employer = this.employer;
    this.experience.job_end_date = this.job_end_date;
    this.experience.job_description = this.job_description;
  },
  computed: {
    ...mapState([
      "position",
      "job_start_date",
      "employer",
      "job_end_date",
      "job_description",
    ]),
  },
  watch: {
    experience: {
      handler(val) {
        if (!val.postError && !val.employerError) {
          this.formIsValid = true;
        }
      },
      deep: true,
    },
  },
  methods: {
    positionChangeHandler(event) {
      if (event.target.value.length === 0) {
        this.experience.postError = "ეს ველი სავალდებულოა";
      } else if (
        event.target.value.length > 0 &&
        event.target.value.length < 2
      ) {
        this.experience.postError = "ეს ველი უნდა შეიცავდეს მინიმუმ 2 სიმბოლოს";
      } else {
        this.experience.postError = "";
        this.$store.commit("set_position", event.target.value);
      }
    },
    employerChangeHandler(event) {
      if (event.target.value.length === 0) {
        this.experience.employerError = "ეს ველი სავალდებულოა";
      } else if (
        event.target.value.length > 0 &&
        event.target.value.length < 2
      ) {
        this.experience.employerError =
          "ეს ველი უნდა შეიცავდეს მინიმუმ 2 სიმბოლოს";
      } else {
        this.experience.employerError = "";
        this.$store.commit("set_employer", event.target.value);
      }
    },
    descriptionChangeHandler(event) {
      if (event.target.value.length === 0) {
        this.experience.employerError = "ეს ველი სავალდებულოა";
      } else {
        this.experience.descriptionError = "";
        this.$store.commit("set_description", event.target.value);
      }
    },
    startDateChangeHandler(event) {
      this.$store.commit("set_start_date", event.target.value);
    },
    finishDateChangeHandler(event) {
      this.$store.commit("set_finish_date", event.target.value);
    },
    addCurrentExperience() {
      if (
        this.experience.job_end_date &&
        this.experience.startingDate &&
        !this.experience.positionError &&
        !this.experience.employerError &&
        !this.experience.descriptionError
      ) {
        const experience = {
          position: this.experience.position,
          employer: this.experience.employer,
          start_date: this.experience.startingDate,
          end_date: this.experience.job_end_date,
          description: this.experience.job_description,
        };
        this.$store.commit("addExperience", experience);
        this.$store.commit("cleanExperience");
        this.experience.position = "";
        this.experience.startingDate = "";
        this.experience.job_end_date = "";
        this.experience.employer = "";
        this.experience.job_description = "";
      } else {
        !this.experience.job_end_date
          ? (this.experience.finishDateError = "ეს ველი სავალდებულოა")
          : (this.experience.finishDateError = "");
        !this.experience.startingDate
          ? (this.experience.startingDateError = "ეს ველი სავალდებულოა")
          : (this.experience.startingDateError = "");
      }
    },
    nextPageHandler() {
      if (
        this.experience.job_end_date &&
        this.experience.startingDate &&
        !this.experience.positionError &&
        !this.experience.employerError &&
        !this.experience.descriptionError
      ) {
        const experience = {
          position: this.experience.position,
          employer: this.experience.employer,
          start_date: this.experience.startingDate,
          end_date: this.experience.job_end_date,
          description: this.experience.job_description,
        };
        this.$store.commit("addExperience", experience);
        this.$router.push({ name: "education" });
      }
    },
  },
};
</script>
