<template>
  <tr @click="openBug()">
    <th scope="row">{{bugData.title}}</th>
    <td>{{bugData.creatorEmail}}</td>
    <td>{{bugData.importance}}</td>
    <td v-if="bugData.closed" class="text-danger">Closed</td>
    <td v-else class="text-success">Open</td>
    <td>{{bugData.modifiedDate}}</td>
  </tr>
</template>


<script>
export default {
  name: "bug",
  props: ["bugData"],
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