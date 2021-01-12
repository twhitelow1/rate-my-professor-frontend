<template>
  <div class="professors-show">
    <h2>{{ professor[0].name }}</h2>
    <!-- <img v-bind:src="Professor.url" v-bind:alt="professor.name" /> -->
    <p>School: {{ professor[0].school }}</p>
    <p>Title: {{ professor[0].title }}</p>
    <p>Department: {{ professor[0].department }}</p>

    <router-link to="/professors">Back to all professors</router-link>

    <h2>Reviews</h2>
    <p>Reviewer Name: </p>
    <p>Professor Rating: </p>
    <p>Review:</p>
    <p>Review text will go here....</p>
    
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      professor: [{}],
      reviews: [],
      errors: [],
    };
  },
  created: function () {
    axios
      .get("/professors/" + this.$route.params.id)
      .then((response) => {
        console.log("professors show", response);
        this.professor = response.data;
      })
      .catch((error) => {
        this.errors = error.response.data.errors;
      });
    axios
      .get("/reviews/")
      .then((response) => {
        console.log("reviews index", response);
        this.reviews = response.data;
      })
      .catch((error) => {
        this.errors = error.response.data.errors;
      });
  },
  methods: {},
};
</script>