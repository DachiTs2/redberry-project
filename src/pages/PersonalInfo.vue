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
                type="text"
                class="w-full h-10 rounded-lg outline-none px-2 border-[1px] border-black"
              />
              <p class="text-sm text-red-500">
                {{ personalInfo.last_name_error }}
              </p>
            </div>
          </div>
          <div class="w-full h-20 flex justify-start items-center space-x-6">
            <p class="text-lg text-black font-semibold">
              პირადი ფოტოს ატვირთვა
            </p>
            <button
              class="w-56 h-10 rounded-lg bg-blue-500 text-white relative"
            >
              <input
                type="file"
                @change="onFileInputChange($event)"
                class="opacity-0 absolute w-full h-full top-0 left-0 cursor-pointer"
              />
              ატვირთვა
            </button>
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
                class="w-full h-full border-[1px] border-black rounded-lg p-2 outline-none"
              ></textarea>
            </div>
            <div class="w-full h-20 mt-8 space-y-3">
              <label for="email" class="text-xl text-black font-semibold"
                >ელ-ფოსტა</label
              >
              <input
                v-model="personalInfo.email"
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
                type="text"
                class="w-full h-10 border-[1px] border-black rounded-lg px-2"
              />
              <p class="text-sm text-red-500">{{ personalInfo.phoneError }}</p>
            </div>
            <div class="w-full h-20 mt-9 flex justify-end items-center">
             <router-link :to="{name:'experience'}"> <button
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
        photoError: "",
      },
      georgianRegex: /^[ა-ჰ]+$/,
      formIsValid: false,
    };
  },
  //   methods: {
  //     onFileInputChange(event) {
  //       this.personalInfo.photo = event.target.files[0];
  //       if (!this.personalInfo.photo) {
  //         this.personalInfo.photoError = "ფოტოს ატვირთვა სავალდებულოა";
  //       }
  //     },
  //   },
  watch: {
    personalInfo: {
      handler(val) {
        if (val.name.length === 0) {
          val.nameError = "ეს ველი სავალდებულოა";
        } else if (val.name.length > 0 && val.name.length < 2) {
          val.nameError = "ეს ველი უნდა შეიცავდეს მინიმუმ 2 სიმბოლოს";
        } else if (val.name.length >= 2 && !this.georgianRegex.test(val.name)) {
          val.nameError = "ეს ველი უნდა შეიცავდეს ქართულ სიმბოლოებს";
        } else {
          val.nameError = "";
        }
        if (val.phone.length === 0) {
          val.phoneError = "ტელეფონის ნომრის ველის შევსება სავალდებულოა";
        } else if (
          val.phone.slice(0, 4) !== "+995" ||
          val.phone.length !== 13
        ) {
          val.phoneError =
            "ტელეფონის ნომერი უნდა აკმაყოფილებდეს ქართული ნომრის სტანდარტებს";
        } else {
          val.phoneError = "";
        }
        if (val.email.length === 0) {
          val.emailError = "ელ-ფოსტის ველის შევსება სავალდებულოა";
        } else if (val.email.slice(-12) !== "@redberry.ge") {
          val.emailError =
            "ელ-ფოსტის ფორმატი უნდა აკმაყოფილებდეს რედბერის მეილის ფორმატს";
        } else {
          val.emailError = "";
        }
        if (val.last_name.length === 0) {
          val.last_name_error = "ეს ველი სავალდებულოა";
        } else if (val.last_name.length > 0 && val.last_name.length < 2) {
          val.last_name_error = "ეს ველი უნდა შეიცავდეს მინიმუმ 2 სიმბოლოს";
        } else if (
          val.last_name.length >= 2 &&
          !this.georgianRegex.test(val.last_name)
        ) {
          val.last_name_error = "ეს ველი უნდა შეიცავდეს ქართულ სიმბოლოებს";
        } else {
          val.last_name_error = "";
        }

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
};
</script>
