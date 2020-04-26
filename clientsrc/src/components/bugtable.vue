<template>
  <div class="bugTable">
    <div class="table-responsive">
      <table class="table table-striped table-hover">
        <thead class="thead-light">
          <tr class="table-primary">
            <th scope="col">Title</th>
            <th scope="col">Reported By</th>
            <th scope="col">Priority</th>
            <th scope="col">Status</th>
            <th scope="col">Last Modified</th>
          </tr>
        </thead>
        <tbody>
          <Bug v-for="bug in bugs" :bugData="bug" :key="bug.id"></Bug>
        </tbody>
      </table>
    </div>
  </div>
</template>


<script>
import Bug from "../components/bug";
export default {
  name: "bugTable",
  data() {
    return {};
  },
  computed: {
    bugs() {
      return this.$store.state.bugs;
    }
  },
  methods: {},
  components: {
    Bug
  }
};
</script>


<style scoped>
</style>