<template>
  <div class="professors">
    <h1>All Professors</h1>
    <input type="text" name="search" /> <button>Search</button>
    <div v-for="professor in professors">
      <h2>{{ professor.name }} - {{ professor.school }}</h2>
      <router-link v-bind:to="`/professors/${professor.id}`">View Professor</router-link>
      <!-- <button>View Professor</button> -->
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
    indexProfessors: function () {
      axios.get("/professors").then((response) => {
        console.log("professors index", response);
        this.professors = response.data;
      });
    },
  },
};
</script>
