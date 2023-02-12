import { createStore, Store } from "vuex";

const store = createStore({
  state: {
    name: "",
    last_name: "",
    about_me: "",
    email: "",
    phone: "",
    photo: "",
    experiences: [],
    position: "",
    employer: "",
    job_start_date: "",
    job_end_date: "",
    job_description: "",
    educations: [],
    institute: "",
    degree: "",
    education_end_date: "",
    education_description: "",
    image: "",
  },
  mutations: {
    set_name(state, payload) {
      state.name = payload;
    },
    set_last_name(state, payload) {
      state.last_name = payload;
    },
    set_phone(state, payload) {
      state.phone = payload;
    },
    set_email(state, payload) {
      state.email = payload;
    },
    set_about(state, payload) {
      state.about_me = payload;
    },
    set_photo(state, payload) {
      state.photo = payload;
    },
    set_position(state, payload) {
      state.position = payload;
    },
    set_employer(state, payload) {
      state.employer = payload;
    },
    set_description(state, payload) {
      state.job_description = payload;
    },
    set_start_date(state, payload) {
      state.job_start_date = payload;
    },
    set_finish_date(state, payload) {
      state.job_end_date = payload;
    },
    addExperience(state, payload) {
      state.experiences.push(payload);
    },
    cleanExperience(state) {
      state.employer = "";
      state.job_description = "";
      state.position = "";
      state.job_start_date = "";
      state.job_end_date = "";
    },
    set_institute(state, payload) {
      state.institute = payload;
    },
    set_degree(state, payload) {
      state.degree = payload;
    },
    set_education_end_date(state, payload) {
      state.education_end_date = payload;
    },
    set_education_description(state, payload) {
      state.education_description = payload;
    },
    addEducation(state, payload) {
      state.educations.push(payload);
    },
    cleanEducation(state) {
      state.degree = "";
      state.education_description = "";
      state.education_end_date = "";
      state.institute = "";
    },
    set_image(state, payload) {
      state.image = payload;
    },
    cleanStore(state) {
      state.name = "";
      state.last_name = "";
      state.about_me = "";
      state.email = "";
      state.phone = "";
      state.photo = "";
      state.experiences = [];
      state.position = "";
      state.employer = "";
      state.job_start_date = "";
      state.job_end_date = "";
      state.job_description = "";
      state.educations = [];
      state.institute = "";
      state.degree = "";
      state.education_end_date = "";
      state.education_description = "";
      state.image = "";
    },
  },
});

export default store;
