<template>
  <div class="w-full h-screen flex justify-start items-center">
    <div class="w-1/2 h-screen">
      <PageTitle pageTitle="განათლება" :pageNumber="3" />
      <div
        class="w-full h-[calc(100vh-5rem)] bg-yellow flex flex-col justify-start items-center"
      >
        <div
          class="w-4/5 h-32 flex flex-col justify-start items-start mt-8 space-y-3"
        >
          <label class="text-black text-sm">სასწავლებელი</label>
          <input
            type="text"
            v-model="education.institute"
            @input="instituteChangeHandler"
            class="w-full h-12 px-2 outline-none rounded-sm border-[1px] border-black"
          />
          <p class="text-sm text-red-500">{{ education.instituteError }}</p>
        </div>
        <div class="w-4/5 h-32 flex mt-8">
          <div
            class="w-1/2 h-full flex flex-col justify-start items-start space-y-3 pr-4"
          >
            <label class="text-black text-sm">ხარისხი</label>
            <select
              v-model="education.degree"
              @change="degreeChangeHandler"
              class="w-full h-12 px-2 outiline-none rounded-sm border-[1px] border-black text-sm"
            >
              <option
                v-for="degree in degreeList"
                :key="degree.id"
                :value="degree.title"
                class="w-full h-12 text-sm"
              >
                {{ degree.title }}
              </option>
            </select>
            <p class="text-sm text-red-500">{{ education.degreeError }}</p>
          </div>
          <div
            class="w-1/2 h-full flex flex-col justify-start items-start space-y-3 pl-4"
          >
            <label class="text-black text-sm">დამთავრების რიცხვი</label>
            <input
              v-model="education.due_date"
              @change="dueDateChangeHandler"
              type="date"
              class="w-full h-12 px-2 outiline-none rounded-sm border-[1px] border-black"
            />
            <p class="text-sm text-red-500">{{ education.dueDateError }}</p>
          </div>
        </div>
        <div class="w-4/5 h-72 space-y-3 mt-8">
          <label class="text-black text-sm"> აღწერა </label>
          <textarea
            @change="descriptionChangeHandler"
            v-model="education.description"
            class="w-full h-48 p-2 border-[1px] border-black rounded-sm outline-none"
          ></textarea>
          <p class="text-sm text-red-500">{{ education.descriptionError }}</p>
        </div>
        <div class="w-4/5 h-[2px] bg-gray-300 mt-8"></div>
        <div class="w-4/5 h-14 flex justify-start items-center mt-6">
          <button
            @click="addEducation"
            class="bg-blue-400 px-4 h-full text-white rounded-md"
          >
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
    <button
      class="absolute top-0 left-0 w-96 h-10 bg-red-500"
      @click="sendInfo"
    >
      send
    </button>
    <Resume />
  </div>
</template>
<script>
import Resume from "../components/Resume.vue";
import PageTitle from "../components/PageTitle.vue";
import { mapState } from "vuex";
import axios from "axios";

export default {
  components: { Resume, PageTitle },
  data() {
    return {
      education: {
        institute: "",
        instituteError: "",
        degree: "",
        degreeError: "",
        due_date: "",
        dueDateError: "",
        description: "",
        descriptionError: "",
      },
      degreeList: [],
      formIsValid: false,
    };
  },
  watch: {
    education: {
      handler(val) {
        if (
          !this.education.degreeError &&
          this.education.instituteError &&
          this.education.descriptionError
        ) {
          this.formIsValid = true;
        }
      },
    },
  },
  created() {
    this.education.due_date = this.education_end_date;
    this.education.degree = this.degree;
    this.education.description = this.education_description;
    this.education.institute = this.institute;
    this.fetchDegrees();
  },
  computed: {
    ...mapState([
      "degree",
      "institute",
      "education_description",
      "education_end_date",
      "name",
      "last_name",
      "email",
      "phone",
      "photo",
      "experiences",
      "educations",
      "about_me",
      "image",
    ]),
  },
  methods: {
    instituteChangeHandler(event) {
      if (event.target.value.length === 0) {
        this.education.instituteError = "ეს ველი სავალდებულოა";
      } else if (
        event.target.value.length > 0 &&
        event.target.value.length < 2
      ) {
        this.education.instituteError =
          "ეს ველი უნდა შეიცავდეს მინიმუმ 2 სიმბოლოს";
      } else {
        this.education.instituteError = "";
        this.$store.commit("set_institute", event.target.value);
      }
    },
    degreeChangeHandler(event) {
      if (!event.target.value) {
        this.education.degreeError = "ეს ველი სავალდებულოა";
      } else {
        this.education.degreeError = "";
        this.$store.commit("set_degree", event.target.value);
      }
    },
    dueDateChangeHandler(event) {
      this.$store.commit("set_education_end_date", event.target.value);
    },
    descriptionChangeHandler(event) {
      if (event.target.value.length === 0) {
        this.education.descriptionError = "ეს ველი სავალდებულოა";
      } else {
        this.education.descriptionError = "";
        this.$store.commit("set_education_description", event.target.value);
      }
    },
    fetchDegrees() {
      axios
        .get("https://resume.redberryinternship.ge/api/degrees")
        .then((response) => {
          this.degreeList = response.data;
        });
    },
    addEducation() {
      if (
        !this.education.instituteError &&
        !this.education.descriptionError &&
        this.education.degree &&
        this.education.due_date
      ) {
        const education = {
          institute: this.education.institute,
          description: this.education.description,
          due_date: this.education.due_date,
          degree: this.degree,
        };
        this.$store.commit("addEducation", education);
        this.$store.commit("cleanEducation");
        this.education.institute = "";
        this.education.description = "";
        this.education.due_date = "";
        this.degree = "";
      } else {
        if (!this.education.degree) {
          this.education.degreeError = "ეს ველი სავალდებულოა";
        }
        if (!this.education.dueDateError) {
          this.education.dueDateError = "ეს ველი სავალდებულოა";
        }
      }
    },
    sendInfo() {
      const form = new FormData();
      const educationsArray = [];
      JSON.parse(JSON.stringify(this.$store.state.educations)).map(
        (education) => {
          educationsArray.push(education);
        }
      );
      form.append("name", this.name);
      form.append("surname", this.last_name);
      form.append("phone_number", this.phone);
      form.append(
        "experiences",
        JSON.parse(JSON.stringify(this.$store.state.experiences))
      );
      form.append("educations", educationsArray);
      form.append("email", this.email);
      form.append("about_me", this.about_me);
      form.append("image", this.image);

      axios
        .post("https://resume.redberryinternship.ge/api/cvs", form)
        .then((response) => {
          console.log(response);
        });

      console.log(educationsArray);
    },
  },
};
</script>
