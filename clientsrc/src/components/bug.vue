<template>
  <tr>
    <th scope="row">{{bugData.title}}</th>
    <td>{{bugData.creatorEmail}}</td>
    <td>{{bugData.importance}}</td>
    <td v-if="bugData.closed">Closed</td>
    <td v-else>Open</td>
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
  methods: {},
  components: {}
};
</script>


<style scoped>
</style>