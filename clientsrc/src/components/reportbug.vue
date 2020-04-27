<template>
  <div class="reportBug">
    <form>
      <div class="form-group">
        <div class="form-row">
          <div class="col-md-6">
            <label for>Title:</label>
            <input
              type="text"
              class="form-control"
              placeholder="Enter Bug title..."
              v-model="newBug.title"
            />
          </div>
          <div class="col-md-6">
            <label for>Reported By:</label>
            <input class="form-control" type="text" :placeholder="userName" disabled />
          </div>
        </div>
      </div>
      <div class="form-group">
        <label for>Bug Description:</label>
        <textarea
          class="form-control"
          rows="8"
          placeholder="Enter bug description here..."
          v-model="newBug.description"
        />
      </div>
      <div class="form-group">
        <div class="form-row">
          <div class="col-md-6">
            <label for>Priority:</label>
            <select class="custom-select" v-model="newBug.importance">
              <option disabled selected>Select a priority</option>
              <option value="High" class="text-danger">High</option>
              <option value="Medium" class="text-warning">Medium</option>
              <option value="Low" class="text-success">Low</option>
            </select>
          </div>
        </div>
      </div>
      <button
        type="submit"
        data-dismiss="modal"
        @click="reportBug()"
        class="btn btn-sm btn-dark"
      >Submit Bug</button>
    </form>
  </div>
</template>


<script>
export default {
  name: "reportBug",
  props: ["userName"],
  data() {
    return {
      newBug: {}
    };
  },
  computed: {
    user() {
      return this.$auth.user;
    }
  },
  methods: {
    async reportBug() {
      let dateObj = new Date();
      let month = dateObj.getMonth() + 1;
      let day = dateObj.getDate();
      let year = dateObj.getFullYear();
      let newDate = month + "/" + day + "/" + year;
      this.newBug.modifiedDate = newDate;
      this.newBug.creatorEmail = this.user.email;
      await this.$store.dispatch("reportBug", this.newBug);
      this.$router.push({
        name: "bug",
        params: { bugId: this.$store.state.activeBug.id }
      });
      this.newBug = {};
    }
  },
  components: {}
};
</script>


<style scoped>
</style>