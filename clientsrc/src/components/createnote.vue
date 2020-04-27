<template>
  <div class="createNote">
    <form>
      <div class="form-group">
        <label for>Add a Note:</label>
        <input
          type="text"
          class="form-control"
          placeholder="Enter Note contents..."
          v-model="newNote.content"
        />
      </div>
      <button
        type="submit"
        data-dismiss="modal"
        @click="createNote()"
        class="btn btn-sm btn-dark"
      >Create Note</button>
    </form>
  </div>
</template>


<script>
export default {
  name: "createNote",
  props: ["userInfo"],
  data() {
    return {
      newNote: {}
    };
  },
  computed: {
    user() {
      return this.$auth.user;
    }
  },
  methods: {
    createNote() {
      this.newNote.bugId = this.$store.state.activeBug.id;
      this.newNote.creatorEmail = this.userInfo.email;
      this.newNote.creatorName = this.userInfo.nickname;
      this.$store.dispatch("createNote", this.newNote);
      this.newNote = {};
    }
  },
  components: {}
};
</script>


<style scoped>
</style>