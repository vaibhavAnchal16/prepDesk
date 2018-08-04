<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <router-link class="nav-brand" to="/">Navbar Brand</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown"
        aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/report">Report</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Pricing</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Dropdown link
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </li>
        </ul>
      </div>
    </nav>

    <div class="container-fluid">
      <div class="row top-tabs">
        <ul class="list-inline listing-sections">
          <li class="list-inline-item">
            <router-link class="nav-link" to="/report">
              Complete Analysis
            </router-link>
          </li>
          <li class="list-inline-item">
            <router-link class="nav-link" to="/sectional_report">
              Sectional Reports
            </router-link>
          </li>
          <li class="list-inline-item">
            <router-link class="nav-link" to="/report">
              Complete Analysis
            </router-link>
          </li>
          <li class="list-inline-item">
            <router-link class="nav-link" to="/report">
              Complete Analysis
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>



<script>
  export default {
    app: 'Header',
    data() {
      return {

      };
    },
  };

</script>


<style>
  .top-tabs {
    background: rebeccapurple;
  }

  ul.listing-sections {
    margin: 0px;
  }

  ul.listing-sections li {
    padding: 6px 12px;
  }

  ul.listing-sections li a {
    color: #fff;
    text-decoration: none;
    background: #f1d;
  }

</style>
