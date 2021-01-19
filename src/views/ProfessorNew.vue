<template>
  <div style="margin-bottom: 2em" class="professors-new" align="center">
    <h2>New Professor</h2>
    <div align="center">
      Name:
      <input
        type="text"
        v-model="newProfessorName"
        style="margin-right: 10px"
      />
      School:
      <input
        type="text"
        v-model="newProfessorSchool"
        style="margin-right: 10px"
      />
      Title:
      <input
        type="text"
        v-model="newProfessorTitle"
        style="margin-right: 10px"
      />
      Department:
      <input
        type="text"
        v-model="newProfessorDepartment"
        style="margin-right: 10px"
      />
    </div>
    <br />
    <button v-on:click="createProfessor()">
      Create Professor <br /><br />
      <img src="/images/Favorites/icons8-floating-guru-100.png" alt="" />
    </button>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      newProfessorName: "",
      newProfessorTitle: "",
      newProfessorDepartment: "",
      newProfessorSchool: "",
    };
  },
  created: function() {
    this.indexProfessors();
  },
  methods: {
    createProfessor: function() {
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
