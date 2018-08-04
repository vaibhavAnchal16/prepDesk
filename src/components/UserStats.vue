<template>
  <div>
    <div class="row mb-3">
      <div class="col-xl-12 col-sm-12 py-2">
        <div class="card h-100">
          <div class="card-body">
            <div class="rotate">
              <img src="https://eadb.org/wp-content/uploads/2015/08/profile-placeholder.jpg" class="img-fluid shadow-lg" style="max-width:50%;" />
            </div>
            <h6 class="text-uppercase mt-3 text-dark">{{userstats.name}}</h6>
          </div>
        </div>
      </div>
      <table class="table table-bordered text-justify bg-white">
        <tbody>
          <tr>
            <th scope="row">Marks Scored: </th>
            <td>{{userstats.marks_scored}}</td>
          </tr>
          <tr>
            <th scope="row">Rank: </th>
            <td>{{userstats.rank}}</td>
          </tr>
          <tr>
            <th scope="row">Total Time Spent: </th>
            <td>{{userstats.time_spent}} minutes</td>
          </tr>
        </tbody>
      </table>
    </div>
    <!--/row-->
  </div>
</template>

<script>
  export default {
    props: ['userstats'],
    created() {

    },
  };

</script>

<style>


</style>
