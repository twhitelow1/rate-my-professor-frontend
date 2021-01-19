<template>
  <div class="professors-show" align="center">
    <h2>{{ professor[0].name }}</h2>
    <!-- <img v-bind:src="Professor.url" v-bind:alt="professor.name" /> -->
    <h3 align="center">School: {{ professor[0].school }}</h3>
    <h3>Title: {{ professor[0].title }}</h3>
    <h3>Department: {{ professor[0].department }}</h3>

    <router-link :to="`/professors/${professor[0].id}/add-review`" tag="button"
      >Add Review</router-link
    >
    <br /><br />

    <h2>Reviews</h2>
    <h1>
      --------------------------------------------------------------------------------------------------
    </h1>

    <div v-for="review in professor[0].reviews">
      <h1>Reviewer Name:</h1>
      <p style="text-align:center;">{{ review.reviewer }}</p>
      <h1>Professor Rating:</h1>
      <p style="text-align:center;">{{ review.rating }}</p>
      <h1>Review:</h1>
      <p style="text-align:center;">{{ review.text }}</p>
      <h1>
        --------------------------------------------------------------------------------------------------
      </h1>
    </div>
    <router-link to="/professors" tag="button"
      >Back to all professors</router-link
    >
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      professor: [{}],
      reviews: [],
      errors: [],
    };
  },
  created: function() {
    axios
      .get("api/professors/" + this.$route.params.id)
      .then((response) => {
        console.log("professors show", response);
        this.professor = response.data;
      })
      .catch((error) => {
        this.errors = error.response.data.errors;
      });
    // axios
    //   .get("api/reviews/")
    //   .then((response) => {
    //     console.log("reviews index", response);
    //     this.reviews = response.data;
    //   })
    //   .catch((error) => {
    //     this.errors = error.response.data.errors;
    //   });
  },
  methods: {},
};
</script>
