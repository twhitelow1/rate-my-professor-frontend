<template>
  <div class="professors">
    <div align="center">
      <input type="text" name="search" /> <button>Search</button>
      <h1>
        --------------------------------------------------------------------------------------------------
      </h1>
      <div v-for="professor in professors">
        <h2>{{ professor.name }} - {{ professor.school }}</h2>
        <router-link v-bind:to="`/professors/${professor.id}`" tag="button"
          >View Professor</router-link
        >
        <h1>
          --------------------------------------------------------------------------------------------------
        </h1>
      </div>
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      professors: [],
    };
  },
  created: function() {
    this.indexProfessors();
  },
  methods: {
    indexProfessors: function() {
      axios.get("api/professors").then((response) => {
        console.log("professors index", response);
        this.professors = response.data;
      });
    },
  },
};
</script>
