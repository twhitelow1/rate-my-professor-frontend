<template>
  <div class="professors">
    <h1>New Professor</h1>
    <div>
      Name: <input type="text" v-model="newProfessorName" />
      School: <input type="text" v-model="newProfessorSchool" />
      Title: <input type="text" v-model="newProfessorTitle" />
      Department: <input type="text" v-model="newProfessorDepartment" />
      <button v-on:click="createProfessor()">Create Professor</button>
    </div>
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
      professors: [],
      newProfessorName: "",
      newProfessorTitle: "",
      newProfessorDepartment: "",
      newProfessorSchool: "",
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
    createProfessor: function () {
      var params = {
        name: this.newProfessorName,
        title: this.newProfessorTitle,
        school: this.newProfessorSchool,
        department: this.newProfessorDepartment,
      };
      axios
        .post("/professors", params)
        .then((response) => {
          console.log("professor create", response);
          this.professors.push(response.data);
          this.newProfessorName = "";
          this.newProfessorTitle = "";
          this.newProfessorSchool = "";
          this.newProfessorDepartment = "";
        })
        .catch((error) => {
          console.log("professor create error", error.response);
        });
    },
  },
};
</script>
