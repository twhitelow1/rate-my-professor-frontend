<template>
  <div class="professors">
    <h1>All Professors</h1>
    <input type="text" name="search" /> <button>Search</button>
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
      professors: [
        {
          id: 1,
          name: "Todd Whitelow",
          title: "Lead Professor",
          school: "Hard Knox",
          department: "radness",
        },
        {
          id: 1,
          name: "Jesse James",
          title: "Lead Professor",
          school: "Hard Knox",
          department: "Bad Assery",
        },
      ],
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
