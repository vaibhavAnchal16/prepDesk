<template>
  <div>
    <!--This is for top icons -->
    <div class="container-fluid pt-5">
      <div class="row">
        <div class="col-md-3 col-lg-2 bg-light" id="sidebar">
          <user-stats v-bind:userstats="userstats"></user-stats>
        </div>
        <!-- col side menu finish -->
        <div class="col">
          <div class="container-fluid">
            <div class="row bg-light border border-danger border-right-0 border-left-0">
              <div class="col-md-10 offset-md-1">
                <div v-if="loading">Loading...</div>
                <div v-else class="row">
                  <div class="col-md-4" v-bind:key="index" v-for="(chart, index) in charts">
                    <CircleChart v-bind:name="chart.name" v-bind:value="chart.value" v-bind:color="chart.color" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- col main finish -->
      </div>
    </div>
    <!-- top icons ends -->
  </div>
</template>



<script>
  import axios from "axios";
  import CircleChart from "./CircleChart";
  import UserStats from "./UserStats";

  export default {
    app: "Report",
    components: {
      CircleChart,
      UserStats
    },
    data() {
      const sections = [{
        id: "238761276318231",
        name: "GK"
      }];
      const section = {
        // oendpoint 2 ?= id of section
        id: "238761276318231",
        name: "GK",
        time_spent: 14,
        time_total: 50,
        correct: 23,
        incorrect: 27,
        percentile: 28.45,
        cut_off: 21.45,
        score: 23,
        topper_score: 25,
        total_questions: 50,
        skipped_questions: 2
      };

      return {
        loading: true,
        charts: [],
        userstats: {},
      };
    },
    async created() {
      const response = await axios.get(
        "https://gist.githubusercontent.com/vaibhavAnchal16/f9d5ffb1a91deed4d9f7ec156fcd984d/raw/0f928d960be244102287e7ba59b1a01ad21a0acc/common.json"
      );
      const common = await response.data;
      this.userstats = common;
      this.charts = [{
          name: "Attempted",
          // value: 5,
          value: common.attempted_questions / common.total_questions * 100,
          color: "#f00"
        },
        {
          name: "Accuracy",
          value: 87,
          color: "#0f0"
        },
        {
          name: "Percentile",
          // value: 8,
          value: common.percentile,
          color: "#00f"
        },
        {
          name: "Avg. Score",
          // value: 65,
          value: common.average,
          color: "#bb08aa"
        },
        {
          name: "Percentage Accuracy",
          value: 87,
          color: "#12ab65"
        },
        {
          name: "Speed",
          // value : 45,
          value: Number(common.time_spent / common.time_total * 100).toFixed(2),
          color: "#981278"
        }
      ];

      this.loading = false;
    }
  };

</script>

<style>

</style>
