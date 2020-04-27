<template>
  <tr class="note">
    <th scope="row">{{noteData.creatorName}}</th>
    <td>{{noteData.content}}</td>
    <td v-if="noteData.creatorEmail == this.$auth.user.email && !bug.closed">
      <button class="btn ml-auto">
        <i class="fas fa-trash-alt text-danger" @click="deletePrompt()"></i>
      </button>
    </td>
    <td v-else>
      <button class="btn ml-auto">
        <i class="fas fa-trash-alt text-muted"></i>
      </button>
    </td>
  </tr>
</template>


<script>
export default {
  name: "note",
  props: ["noteData"],
  data() {
    return {};
  },
  computed: {
    user() {
      return this.$auth.user;
    },
    bug() {
      return this.$store.state.activeBug;
    }
  },
  methods: {
    deletePrompt() {
      this.$swal
        .fire({
          title: "Are you sure?",
          text: "Once a note is closed, it cannot be recovered.",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!"
        })
        .then(result => {
          if (result.value) {
            this.deleteNote();
          }
        });
    },
    deleteNote() {
      this.$store.dispatch("deleteNote", this.noteData);
    }
  },
  components: {}
};
</script>


<style scoped>
</style>