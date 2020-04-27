<template>
  <div class="bugDetails container-fluid">
    <div class="row my-2">
      <div class="col-12">
        <h2>{{bug.title}}</h2>
      </div>
    </div>
    <div class="row justify-content-around mb-3">
      <div class="col-3 text-left">
        <span>Reported by:</span>
        <h5>{{bug.creatorEmail}}</h5>
      </div>
      <div class="col-3 text-center">
        <span>Importance:</span>
        <h5>{{bug.importance}}</h5>
      </div>
      <div class="col-3 text-right">
        <span>Status:</span>
        <h5 v-if="bug.closed" class="text-danger">Closed</h5>
        <h5 v-else class="text-success">Open</h5>
      </div>
    </div>
    <div class="row">
      <div class="col-10 mx-auto">
        <p class="border">{{bug.description}}</p>
      </div>
    </div>
    <div class="row">
      <div
        class="col-12 text-center"
        v-if="!bug.closed && bug.creatorEmail == this.$auth.user.email"
      >
        <button
          class="btn btn-warning mr-2"
          @click="triggerEditBug()"
          data-toggle="modal"
          data-target="#editBugModal"
        >Edit Bug</button>
        <button class="btn btn-danger ml-2" @click="deletePrompt()">Close Bug</button>
        <Modal title="Edit Bug" id="editBugModal">
          <EditBug :userName="profile.nickname"></EditBug>
        </Modal>
      </div>
      <div class="col-12 text-center">
        <p
          class="text-danger"
          v-if="bug.closed"
        >This bug has been closed and can no longer be edited.</p>
      </div>
    </div>
    <div class="row my-2">
      <div class="col-12">
        <span>
          <h2 class="d-inline">Notes</h2>
          <button
            class="btn btn-success btn-sm mb-2 ml-2"
            data-toggle="modal"
            data-target="#addNoteModal"
            v-if="!bug.closed"
          >Add</button>
          <p
            class="text-danger d-inline ml-3"
            v-else
          >This bug has been closed, no more notes can be added.</p>
        </span>
        <Modal title="Add a Note" id="addNoteModal">
          <CreateNote :userInfo="profile"></CreateNote>
        </Modal>
      </div>
    </div>
    <div class="row">
      <div class="col-11 mx-auto">
        <NoteTable />
      </div>
    </div>
  </div>
</template>


<script>
import Modal from "../components/modal";
import EditBug from "../components/editbug";
import CreateNote from "../components/createnote";
import Note from "../components/note";
import NoteTable from "../components/notetable";
export default {
  name: "bugdetails",
  data() {
    return {};
  },
  computed: {
    bug() {
      return this.$store.state.activeBug;
    },
    profile() {
      return this.$auth.user;
    },
    notes() {
      return this.$store.state.notes;
    }
  },
  mounted() {
    this.$store.dispatch("getBugById", this.$route.params.bugId);
    this.$store.dispatch("getNotesByBugId", this.$route.params.bugId);
  },
  methods: {
    triggerEditBug() {
      console.log(this.bug);
    },
    deletePrompt() {
      this.$swal
        .fire({
          title: "Are you sure?",
          text: "Once a bug is closed, it cannot be reopened",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, close it!"
        })
        .then(result => {
          if (result.value) {
            this.closeBug();
          }
        });
    },
    closeBug() {
      console.log("Bug", this.bug.id, "closed");
      this.bug.closed = true;
      this.$store.dispatch("closeBug", this.bug);
    }
  },
  components: {
    Modal,
    EditBug,
    CreateNote,
    Note,
    NoteTable
  }
};
</script>


<style scoped>
</style>