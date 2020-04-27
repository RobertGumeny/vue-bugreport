<template>
  <div class="home container">
    <div class="row mt-3 mb-1">
      <div class="col-12">
        <h2>Reported Bugs</h2>
      </div>
    </div>
    <div class="row">
      <div class="col-10 mx-auto">
        <BugTable />
      </div>
    </div>
  </div>
</template>

<script>
import ReportBug from "../components/reportbug";
import Bug from "../components/bug";
import BugTable from "../components/bugtable";
export default {
  name: "home",
  computed: {
    profile() {
      return this.$store.profile;
    },
    bugs() {
      return this.$store.state.bugs;
    }
  },
  mounted() {
    this.$store.dispatch("getBugs");
  },
  components: {
    ReportBug,
    Bug,
    BugTable
  }
};
</script>
