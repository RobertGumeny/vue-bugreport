<template>
  <div class="modal">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header bg-light">
          <h5 class="modal-title">{{title}}</h5>
          <button type="button" class="close text-danger" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import ReportBug from "./reportbug";
export default {
  name: "modal",
  props: ["title"],
  data() {
    return {};
  },
  computed: {
    profile() {
      this.$store.state.profile;
    }
  },
  methods: {},
  components: {
    ReportBug
  }
};
</script>


<style scoped>
</style>