<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <router-link class="navbar-brand" :to="{ name: 'Home' }">
      Bug
      <i class="fas fa-bug pl-0"></i>

      <br />
      <div class="report">Report</div>
    </router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarText"
      aria-controls="navbarText"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item" :class="{ active: $route.name == 'Home' }">
          <router-link :to="{ name: 'Home' }" class="nav-link">Home</router-link>
        </li>
        <li
          class="nav-item"
          v-if="$auth.isAuthenticated"
          :class="{ active: $route.name == 'Profile' }"
        >
          <router-link class="nav-link" :to="{ name: 'Profile' }">Profile</router-link>
        </li>
      </ul>
      <span class="navbar-text">
        <button class="btn btn-success" @click="login" v-if="!$auth.isAuthenticated">Login</button>
        <div v-else>
          <button
            class="btn btn-secondary mr-2"
            data-toggle="modal"
            data-target="#reportModal"
          >Report</button>
          <button class="btn btn-danger" @click="logout">Logout</button>
        </div>
      </span>
      <Modal id="reportModal" title="Report a Bug">
        <ReportBug :userName="profile.nickname"></ReportBug>
      </Modal>
    </div>
  </nav>
</template>

<script>
import axios from "axios";
import { getUserData } from "@bcwdev/auth0-vue";
import Modal from "../components/modal";
import ReportBug from "../components/reportbug";
export default {
  name: "Navbar",
  methods: {
    async login() {
      await this.$auth.loginWithPopup();
      this.$store.dispatch("setBearer", this.$auth.bearer);
      console.log("this.$auth.user: ");
      console.log(this.$auth.user);
      this.$store.dispatch("getProfile");
    },
    async logout() {
      this.$store.dispatch("resetBearer");
      await this.$auth.logout({ returnTo: window.location.origin });
    }
  },
  computed: {
    profile() {
      return this.$auth.user;
    }
  },
  components: {
    Modal,
    ReportBug
  }
};
</script>

<style>
.report {
  padding-left: 0.5rem;
  margin-top: -0.5rem;
}
</style>
