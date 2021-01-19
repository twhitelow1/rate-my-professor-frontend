<template>
  <div class="professors">
    <div align="center">
      <!-- PORTFOLIO FILTER -->
      <datalist id="titles">
        <option v-for="professor in professors">{{ professor.name }}</option>
      </datalist>
      <ul id="filters" class="filter font-inc hidden-xs p-t-20">
        <li>
          <div class="form-group">
            <strong
              ><input
                class="form-control input-md"
                v-model="allAttributeFilter"
                placeholder="Search"
                style="margin-right: 10px"
            /></strong>
            <button>Search</button>
            <h1>
              --------------------------------------------------------------------------------------------------
            </h1>
          </div>
        </li>
      </ul>
      <!-- /PORTFOLIO FILTER -->

      <!-- PORTFOLIO ITEM -->
      <ul>
        <li
          v-for="professor in orderBy(
            filterBy(
              professors,
              allAttributeFilter,
              'name',
              'title',
              'department',
              'school'
            ),
            sortAttribute
          )"
        >
          <h2>{{ professor.name }} - {{ professor.school }}</h2>
          <router-link v-bind:to="`/professors/${professor.id}`" tag="button"
            >View Professor</router-link
          >
          <h1>
            --------------------------------------------------------------------------------------------------
          </h1>
        </li>
      </ul>
      <!-- /PORTFOLIO ITEM -->
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
import Vue2Filters from "vue2-filters";

export default {
  mixins: [Vue2Filters.mixin],
  data: function () {
    return {
      professors: [],
      allAttributeFilter: "",
      sortAttribute: "",
    };
  },
  created: function () {
    this.indexProfessors();
  },
  methods: {
    indexProfessors: function () {
      axios.get("api/professors").then((response) => {
        console.log("professors index", response);
        this.professors = response.data;
      });
    },
    setSortAttribute: function (attribute) {
      this.sortAttribute = attribute;
    },
  },
};
</script>
