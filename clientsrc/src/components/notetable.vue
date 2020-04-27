<template>
  <div class="noteTable">
    <div class="table-responsive">
      <table class="table table-striped">
        <thead class="thead-light">
          <tr class="table-primary">
            <th scope="col">Author</th>
            <th scope="col">Message</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          <Note v-for="note in notes" :noteData="note" :key="note.id"></Note>
        </tbody>
      </table>
    </div>
  </div>
</template>


<script>
import Note from "../components/note";
export default {
  name: "noteTable",
  data() {
    return {};
  },
  computed: {
    notes() {
      return this.$store.state.notes;
    }
  },
  methods: {},
  components: {
    Note
  }
};
</script>


<style scoped>
</style>