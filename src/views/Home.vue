<template>
  <div class="home">
    <div align="center">
      <img src="/images/class.png" alt="" />
      <h3>Step 1: Take the class</h3>
      <img src="/images/review.png" alt="" />
      <h3>Step 2: Review your experience</h3>
      <img src="/images/submit.png" alt="" />
      <h3>Step 3: Submit</h3>
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      message: "Welcome to Rate My Professor!",
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
