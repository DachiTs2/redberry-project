<template>
  <div class="w-1/2 h-screen flex justify-center overflow-y-auto">
    <div class="w-4/5 h-full flex flex-col justify-start items-start mt-20">
      <div class="w-full h-80 flex border-b-[2px] border-gray-300 pb-6">
        <div class="w-2/3 h-full flex flex-col justify-start items-start pr-4">
          <p class="text-4xl text-[#F93B1D] font-bold">ანზორ მუმლაძე</p>
          <div
            class="w-full h-10 flex justify-start items-center space-x-2 mt-4"
          >
            <EmailIcon />
            <p class="text-lg text-black">lkochlo@redberry.ge</p>
          </div>
          <div class="w-full h-10 flex justify-start items-center space-x-2">
            <PhoneIcon />
            <p class="text-lg text-black">+995599683121</p>
          </div>
          <p class="text-2xl text-[#F93B1D] font-bold mt-4">ჩემ შესახებ</p>
          <p class="text-lg text-black mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            ullam quas dolore labore est earum ut pariatur quo. Ullam dolorem
            tempore hic nesciunt modi recusandae!
          </p>
        </div>
        <div class="w-1/3 h-full flex bg-green-500 rounded-full">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjblh-24xyJcSRBdenskvyA0uMNRje04jPFA&usqp=CAU"
            alt="Profile Picture"
            class="w-full h-full object-cover object-center rounded-full"
          />
        </div>
      </div>
      <div class="w-full h-auto mt-6 border-b-[2px] border-gray-300 pb-6">
        <p class="text-2xl text-[#F93B1D] font-bold">გამოცდილება</p>
        <p class="text-lg text-black font-bold mt-4">Frontend Dev</p>
        <p class="text-lg text-gray-300 font-bold mt-2">
          2020-19-12 / 2012-10-12
        </p>
        <p class="text-lg text-black font-bold mt-4">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate,
          enim cumque! Quas voluptates laboriosam fugiat sequi impedit
          asperiores illum dicta quam. Accusamus, eius.
        </p>
      </div>
      <div class="w-full h-auto mt-6 border-b-[2px] border-gray-300 pb-6">
        <p class="text-2xl text-[#F93B1D] font-bold">განათლება</p>
        <p class="text-lg text-black font-bold mt-4">გიმნაზია შავნაბადა</p>
        <p class="text-lg text-gray-300 font-bold mt-2">
          2020-19-12 / 2012-10-12
        </p>
        <p class="text-lg text-black font-bold mt-4">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate,
          enim cumque! Quas voluptates laboriosam fugiat sequi impedit
          asperiores illum dicta quam. Accusamus, eius. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Ratione, repudiandae.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import EmailIcon from "../assets/icons/EmailIcon.vue";
import PhoneIcon from "../assets/icons/PhoneIcon.vue";

export default {
  components: { EmailIcon, PhoneIcon },
};
</script>
