<template>
  <div class="professors">
    <h1>All Professors</h1>
    <div v-for="professor in professors">
      <h2>{{ professor.name }} - {{ professor.school }}</h2>
      <button>View Professor</button>
    </div>
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      professors: [],
    };
  },
  created: function () {
    this.indexProfessors();
  },
  methods: {
    indexPhotos: function () {
      axios.get("/api/professors").then((response) => {
        console.log("professors index", response);
        this.professors = response.data;
      });
    },
  },
};
</script>
