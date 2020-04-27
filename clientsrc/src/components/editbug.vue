<template>
  <div class="editBug">
    <form>
      <div class="form-group">
        <div class="form-row">
          <div class="col-md-6">
            <label for>Title:</label>
            <input
              type="text"
              class="form-control"
              placeholder="Enter Bug title..."
              v-model="bug.title"
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
          v-model="bug.description"
        />
      </div>
      <div class="form-group">
        <div class="form-row">
          <div class="col-md-6">
            <label for>Priority:</label>
            <select class="custom-select" v-model="bug.importance">
              <option selected>Select a priority</option>
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
        @click="editBug()"
        class="btn btn-sm btn-dark"
      >Edit Bug</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "editbug",
  props: ["userName"],
  data() {
    return {};
  },
  computed: {
    bug() {
      return this.$store.state.activeBug;
    }
  },
  methods: {
    editBug() {
      this.$store.dispatch("editBug", this.bug);
    }
  },
  components: {}
};
</script>


<style scoped>
</style>