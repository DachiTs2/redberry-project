<template>
  <div class="w-1/2 h-screen flex justify-center overflow-y-auto relative">
    <div class="w-4/5 h-full flex flex-col justify-start items-start mt-20">
      <div
        class="w-full h-80 flex border-b-[2px] border-gray-300 pb-6"
        v-if="name"
      >
        <div class="w-2/3 h-full flex flex-col justify-start items-start pr-4">
          <p class="text-4xl text-[#F93B1D] font-bold">
            {{ name }} {{ last_name }}
          </p>
          <div
            class="w-full h-10 flex justify-start items-center space-x-2 mt-4"
          >
            <EmailIcon v-if="email" />
            <p class="text-lg text-black">{{ email }}</p>
          </div>
          <div class="w-full h-10 flex justify-start items-center space-x-2">
            <PhoneIcon v-if="phone" />
            <p class="text-lg text-black">{{ phone }}</p>
          </div>
          <p class="text-2xl text-[#F93B1D] font-bold mt-4" v-if="about_me">
            ჩემ შესახებ
          </p>
          <p class="text-lg text-black mt-4">
            {{ about_me }}
          </p>
        </div>
        <div class="w-1/3 h-full flex rounded-full">
          <img
            v-if="photo"
            :src="photo"
            alt="Profile Picture"
            class="w-full h-full object-cover object-center rounded-full"
          />
        </div>
      </div>
      <div
        class="w-full h-auto mt-6 border-b-[2px] border-gray-300 pb-6"
        v-if="experiences.length > 0"
      >
        <p class="text-2xl text-[#F93B1D] font-bold">გამოცდილება</p>
        <span v-for="experience in experiences">
          <p class="text-lg text-black font-bold mt-4">
            {{ experience.position }},{{ experience.employer }}
          </p>
          <p class="text-lg text-gray-300 font-bold mt-2">
            {{ experience.start_date }} / {{ experience.due_date }}
          </p>
          <p class="text-lg text-black font-bold mt-4">
            {{ experience.description }}
          </p></span
        >
      </div>
      <div
        class="w-full h-auto mt-6 border-b-[2px] border-gray-300 pb-6"
        v-if="educations.length > 0"
      >
        <p class="text-2xl text-[#F93B1D] font-bold">განათლება</p>
        <span v-for="education in educations">
          <p class="text-lg text-black font-bold mt-4">
            {{ education.institute }}
          </p>
          <p class="text-lg text-gray-300 font-bold mt-2">
            {{ education.due_date }}
          </p>
          <p class="text-lg text-black font-bold mt-4">
            {{ education.description }}
          </p>
        </span>
      </div>
    </div>
    <ResumeLogoIcon class="absolute bottom-6 left-6" />
  </div>
</template>

<script>
import EmailIcon from "../assets/icons/EmailIcon.vue";
import PhoneIcon from "../assets/icons/PhoneIcon.vue";
import ResumeLogoIcon from "../assets/icons/ResumeLogoIcon.vue";
import { mapState } from "vuex";
import axios from "axios";

export default {
  components: { EmailIcon, PhoneIcon, ResumeLogoIcon },
  computed: {
    ...mapState([
      "name",
      "last_name",
      "email",
      "phone",
      "about_me",
      "photo",
      "educations",
      "experiences",
    ]),
  },
};
</script>
