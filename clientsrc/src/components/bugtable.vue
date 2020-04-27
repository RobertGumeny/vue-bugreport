<template>
  <div class="bugTable">
    <div class="table-responsive">
      <table class="table table-striped">
        <thead class="thead-light">
          <tr class="table-primary">
            <th scope="col">Title</th>
            <th scope="col">Reported By</th>
            <th scope="col">
              <div class="dropdown">
                <button
                  class="btn dropdown-toggle font-weight-bold text-dark mb-0"
                  type="button"
                  data-toggle="dropdown"
                  id="priorityFilterMenu"
                >Priority</button>
                <div class="dropdown-menu bg-light">
                  <button class="btn btn-link dropdown-item" @click="priorityAll()">All</button>
                  <button
                    class="btn btn-link text-danger dropdown-item"
                    @click="filterPriorityHigh()"
                  >High</button>
                  <button
                    class="btn btn-link text-warning dropdown-item"
                    @click="filterPriorityMedium()"
                  >Medium</button>
                  <button
                    class="btn btn-link text-success dropdown-item"
                    @click="filterPriorityLow()"
                  >Low</button>
                </div>
              </div>
            </th>
            <th scope="col">
              <div class="dropdown">
                <button
                  class="btn dropdown-toggle font-weight-bold text-dark mb-0"
                  type="button"
                  data-toggle="dropdown"
                  id="statusFilterMenu"
                >Status</button>
                <div class="dropdown-menu bg-light">
                  <button class="btn btn-link dropdown-item" @click="statusAll()">All</button>
                  <button
                    class="btn btn-link dropdown-item font-weight-bold font-italic text-muted"
                    @click="filterStatusClosed()"
                  >Closed</button>
                  <button
                    class="btn btn-link dropdown-item font-weight-bold"
                    @click="filterStatusOpen()"
                  >Open</button>
                </div>
              </div>
            </th>
            <th scope="col">Last Modified</th>
          </tr>
        </thead>
        <tbody>
          <Bug v-for="bug in display" :bugData="bug" :key="bug.id"></Bug>
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
    return {
      display: []
    };
  },
  computed: {
    bugs() {
      return this.$store.state.bugs;
    }
  },
  mounted() {
    this.display = this.bugs;
  },
  methods: {
    priorityAll() {
      this.display = this.bugs;
    },
    filterPriorityHigh() {
      this.display = this.bugs.filter(bug => bug.importance == "High");
    },
    filterPriorityMedium() {
      this.display = this.bugs.filter(bug => bug.importance == "Medium");
    },
    filterPriorityLow() {
      this.display = this.bugs.filter(bug => bug.importance == "Low");
    },
    statusAll() {
      this.display = this.bugs;
    },
    filterStatusClosed() {
      this.display = this.bugs.filter(bug => bug.closed == true);
    },
    filterStatusOpen() {
      this.display = this.bugs.filter(bug => bug.closed == false);
    }
  },
  components: {
    Bug
  }
};
</script>


<style scoped>
.dropdown {
  margin-bottom: -7px;
  margin-left: -12px;
}
</style>