<template>
  <tr @click="openBug()">
    <th scope="row">{{bugData.title}}</th>
    <td>{{bugData.creatorEmail}}</td>
    <td
      v-if="bugData.importance == 'High'"
      class="text-danger font-weight-bold"
    >{{bugData.importance}}</td>
    <td
      v-if="bugData.importance == 'Medium'"
      class="text-warning font-weight-bold"
    >{{bugData.importance}}</td>
    <td
      v-if="bugData.importance == 'Low'"
      class="text-success font-weight-bold"
    >{{bugData.importance}}</td>
    <td v-if="bugData.closed" class="font-italic font-weight-bold text-muted">Closed</td>
    <td v-else class="font-weight-bold">Open</td>
    <td>{{bugData.modifiedDate}}</td>
  </tr>
</template>


<script>
export default {
  name: "bug",
  props: ["bugData", "priorityFilter"],
  data() {
    return {};
  },
  computed: {},
  methods: {
    openBug() {
      this.$store.commit("setActiveBug", {});
      this.$router.push({
        name: "bug",
        params: { bugId: this.bugData.id }
      });
    }
  },
  components: {}
};
</script>


<style scoped>
</style>