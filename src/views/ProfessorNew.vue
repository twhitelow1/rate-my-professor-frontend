<template>
  <div style="margin-bottom: 2em" class="professors-new" align="center">
    <h2>New Professor</h2>
    <div align="center">
      <input
        type="text"
        v-model="newProfessorName"
        placeholder="Name"
        style="margin-right: 10px"
      />
      <input
        type="text"
        v-model="newProfessorSchool"
        placeholder="School"
        style="margin-right: 10px"
      />
      <input
        type="text"
        v-model="newProfessorTitle"
        placeholder="Title"
        style="margin-right: 10px"
      />
      <input
        type="text"
        v-model="newProfessorDepartment"
        placeholder="Department"
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
