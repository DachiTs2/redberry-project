<template>
  <div class="w-full h-screen flex justify-start items-center">
    <div class="w-1/2 h-screen">
      <PageTitle pageTitle="პირადი ინფო" :pageNumber="1" />
      <div
        class="w-full h-[calc(100vh-5rem)] bg-yellow flex justify-center items-center"
      >
        <div class="w-4/5 h-full">
          <div
            class="w-full h-32 mt-16 flex justify-start items-center space-x-10"
          >
            <div
              class="w-1/2 h-full flex flex-col justify-start items-start space-y-3"
            >
              <label for="name" class="text-lg text-black font-semibold"
                >სახელი</label
              >
              <input
                v-model="personalInfo.name"
                @input="nameChangeHandler"
                type="text"
                class="w-full h-10 rounded-lg outline-none px-2 border-[1px] border-black"
              />
              <p class="text-sm text-red-500">{{ personalInfo.nameError }}</p>
            </div>
            <div
              class="w-1/2 h-full flex flex-col justify-start items-start space-y-3"
            >
              <label for="name" class="text-lg text-black font-semibold"
                >გვარი</label
              >
              <input
                v-model="personalInfo.last_name"
                @input="lastNameChangeHandler"
                type="text"
                class="w-full h-10 rounded-lg outline-none px-2 border-[1px] border-black"
              />
              <p class="text-sm text-red-500">
                {{ personalInfo.last_name_error }}
              </p>
            </div>
          </div>
          <div
            class="w-full h-20 flex justify-start items-center space-x-6 relative"
          >
            <p class="text-lg text-black font-semibold">
              პირადი ფოტოს ატვირთვა
            </p>
            <button
              class="w-56 h-10 rounded-lg bg-blue-500 text-white relative"
            >
              <input
                type="file"
                @change="photoChangeHandler"
                class="opacity-0 absolute w-full h-full top-0 left-0 cursor-pointer"
              />
              ატვირთვა
            </button>
            <div class="w-full h-6 absolute bottom-0 left-0">
              <p class="text-sm text-red-500">
                {{ personalInfo.photoError }}
              </p>
            </div>
          </div>
          <div class="w-full h-56 mt-8">
            <div class="w-full h-1/6 flex justify-start items-center">
              <p class="text-xl font-semibold text-black">
                ჩემ შესახებ(არასავალდებულო)
              </p>
            </div>
            <div class="w-full h-5/6 py-2">
              <textarea
                v-model="personalInfo.about_me"
                @input="aboutChangeHandler"
                class="w-full h-full border-[1px] border-black rounded-lg p-2 outline-none"
              ></textarea>
            </div>
            <div class="w-full h-20 mt-8 space-y-3">
              <label for="email" class="text-xl text-black font-semibold"
                >ელ-ფოსტა</label
              >
              <input
                v-model="personalInfo.email"
                @input="emailChangeHandler"
                type="email"
                class="w-full h-10 border-[1px] border-black rounded-lg px-2"
              />
              <p class="text-sm text-red-500">{{ personalInfo.emailError }}</p>
            </div>
            <div class="w-full h-20 mt-8 space-y-3">
              <label for="email" class="text-xl text-black font-semibold"
                >ტელეფონის ნომერი</label
              >
              <input
                v-model="personalInfo.phone"
                @input="phoneChangeHandler"
                type="text"
                class="w-full h-10 border-[1px] border-black rounded-lg px-2"
              />
              <p class="text-sm text-red-500">{{ personalInfo.phoneError }}</p>
            </div>
            <div class="w-full h-20 mt-9 flex justify-end items-center">
              <router-link :to="{ name: 'experience' }">
                <button
                  class="w-56 h-10 rounded-lg text-white"
                  :disabled="formIsValid ? false : true"
                  :class="formIsValid ? 'bg-purple-500' : 'bg-red-500'"
                >
                  შემდეგი
                </button>
              </router-link>
            </div>
          </div>
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
      personalInfo: {
        name: "",
        nameError: "",
        last_name: "",
        last_name_error: "",
        email: "",
        emailError: "",
        about_me: "",
        phone: "",
        phoneError: "",
        photo: "",
        photoError: "ფოტოს ატვირთვა სავალდებულოა",
      },
      georgianRegex: /^[ა-ჰ]+$/,
      formIsValid: false,
    };
  },
  computed: {
    ...mapState(["name", "last_name", "email", "about_me", "phone", "photo"]),
  },
  created() {
    this.personalInfo.name = this.name;
    this.personalInfo.last_name = this.last_name;
    this.personalInfo.email = this.email;
    this.personalInfo.phone = this.phone;
    this.personalInfo.about_me = this.about_me;
    this.personalInfo.photo = this.photo;
    if (this.photo) {
      this.personalInfo.photoError = "";
    }
  },
  watch: {
    personalInfo: {
      handler(val) {
        if (
          !val.last_name_error &&
          !val.nameError &&
          !val.phoneError &&
          !val.emailError &&
          !val.photoError
        ) {
          this.formIsValid = true;
        }
      },
      deep: true,
    },
  },
  methods: {
    nameChangeHandler(event) {
      if (event.target.value.length === 0) {
        this.personalInfo.nameError = "ეს ველი სავალდებულოა";
      } else if (
        event.target.value.length > 0 &&
        event.target.value.length < 2
      ) {
        this.personalInfo.nameError =
          "ეს ველი უნდა შეიცავდეს მინიმუმ 2 სიმბოლოს";
      } else if (
        event.target.value.length >= 2 &&
        !this.georgianRegex.test(event.target.value)
      ) {
        this.personalInfo.nameError =
          "ეს ველი უნდა შეიცავდეს ქართულ სიმბოლოებს";
      } else {
        this.personalInfo.nameError = "";
        this.$store.commit("set_name", event.target.value);
      }
    },
    lastNameChangeHandler(event) {
      if (event.target.value.length === 0) {
        this.personalInfo.last_name_error = "ეს ველი სავალდებულოა";
      } else if (
        event.target.value.length > 0 &&
        event.target.value.length < 2
      ) {
        this.personalInfo.last_name_error =
          "ეს ველი უნდა შეიცავდეს მინიმუმ 2 სიმბოლოს";
      } else if (
        event.target.value.length >= 2 &&
        !this.georgianRegex.test(event.target.value)
      ) {
        this.personalInfo.last_name_error =
          "ეს ველი უნდა შეიცავდეს ქართულ სიმბოლოებს";
      } else {
        this.personalInfo.last_name_error = "";
      }
      this.$store.commit("set_last_name", event.target.value);
    },
    phoneChangeHandler(event) {
      if (event.target.value.length === 0) {
        this.personalInfo.phoneError =
          "ტელეფონის ნომრის ველის შევსება სავალდებულოა";
      } else if (
        event.target.value.slice(0, 4) !== "+995" ||
        event.target.value.length !== 13
      ) {
        this.personalInfo.phoneError =
          "ტელეფონის ნომერი უნდა აკმაყოფილებდეს ქართული ნომრის სტანდარტებს";
      } else {
        this.personalInfo.phoneError = "";
      }
      this.$store.commit("set_phone", event.target.value);
    },
    emailChangeHandler(event) {
      if (event.target.value.length === 0) {
        this.personalInfo.emailError = "ელ-ფოსტის ველის შევსება სავალდებულოა";
      } else if (event.target.value.slice(-12) !== "@redberry.ge") {
        this.personalInfo.emailError =
          "ელ-ფოსტის ფორმატი უნდა აკმაყოფილებდეს რედბერის მეილის ფორმატს";
      } else {
        this.personalInfo.emailError = "";
      }
      this.$store.commit("set_email", event.target.value);
    },
    aboutChangeHandler(event) {
      this.$store.commit("set_about", event.target.value);
    },
    photoChangeHandler(event) {
      const selectedImage = event.target.files[0];
      if (selectedImage.type.includes("image")) {
        const reader = new FileReader();
        reader.readAsDataURL(selectedImage);
        reader.onload = () => {
          this.$store.commit("set_photo", reader.result);
          this.$store.commit("set_image", selectedImage);
        };
        this.personalInfo.photoError = "";
      }
    },
  },
};
</script>
