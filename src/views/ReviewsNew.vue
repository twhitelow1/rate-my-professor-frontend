<template>
  <div style="margin-bottom: 2em" class="reviews-new" align="center">
    <h2>
      New Review for <strong>{{ professor[0].name }}</strong>
    </h2>
    <div align="center">
      Your Name: <input type="text" v-model="newReviewReviewer" /> Rating:
      <input type="text" v-model="newReviewRating" /> Review Text:
      <input type="text" v-model="newReviewText" />
    </div>
    <br />
    <button v-on:click="createReview()">
      Submit Review <br />
      <br />
      <img src="/images/Favorites/icons8-speaker-notes-96.png" />
    </button>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      newReviewReviewer: "",
      newReviewProfId: null,
      newReviewRating: null,
      newReviewText: "",
      professor: {},
    };
  },
  created: function () {
    axios
      .get("api/professors/" + this.$route.params.professorId)
      .then((response) => {
        console.log("professors show", response);
        this.professor = response.data;
      })
      .catch((error) => {
        this.errors = error.response.data.errors;
      });
  },
  methods: {
    createReview: function () {
      var professorId = this.$route.params.professorId;

      var params = {
        reviewer: this.newReviewReviewer,
        rating: this.newReviewRating,
        text: this.newReviewText,
      };
      axios
        .post("api/professors/" + professorId + "/reviews", params)
        .then((response) => {
          console.log("review create", response);
          this.reviews.push(response.data);
          this.newReviewReviewer = "";
          this.newReviewRating = null;
          this.newReviewText = "";
          this.newReviewProfId = null;
        })
        .catch((error) => {
          console.log("review create error", error.response);
        });
    },
  },
};
</script>
