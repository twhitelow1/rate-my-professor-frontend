<template>
  <div class="professors-show">
    <h2>{{ professor[0].name }}</h2>
    <!-- <img v-bind:src="Professor.url" v-bind:alt="professor.name" /> -->
    <p>School: {{ professor[0].school }}</p>
    <p>Title: {{ professor[0].title }}</p>
    <p>Department: {{ professor[0].department }}</p>


    <h2>Reviews</h2>
    <div v-for="review in professor[0].reviews">
    <p>Reviewer Name: {{ review.reviewer }}</p>
    <p>Professor Rating:{{ review.rating }} </p>
    <p>Review:</p>
    <p>{{ review.text }}</p>
    <p>-------------------------------------</p>
    </div>
    <router-link to="/professors">Back to all professors</router-link>

    
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