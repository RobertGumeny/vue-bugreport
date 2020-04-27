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
      <div class="col-12 text-center" v-if="!bug.closed">
        <button
          class="btn btn-warning mr-2"
          @click="triggerEditBug()"
          data-toggle="modal"
          data-target="#editBugModal"
        >Edit Bug</button>
        <button class="btn btn-danger ml-2">Close Bug</button>
        <Modal title="Edit Bug" id="editBugModal">
          <EditBug :userName="profile.nickname"></EditBug>
        </Modal>
      </div>
      <div class="col-12 text-center" v-else>
        <p class="text-danger">This bug has been closed and can no longer be edited.</p>
      </div>
    </div>
  </div>
</template>


<script>
import Modal from "../components/modal";
import EditBug from "../components/editbug";
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
    }
  },
  mounted() {
    this.$store.dispatch("getBugById", this.$route.params.bugId);
  },
  methods: {
    triggerEditBug() {
      console.log(this.bug);
    }
  },
  components: {
    Modal,
    EditBug
  }
};
</script>


<style scoped>
</style>