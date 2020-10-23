<template>
  <nav class="navbar navbar-expand-lg navbar-light" id="Navbar">
    <a class="navbar-brand text-white" href="#">Navbar</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <router-view></router-view>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <a class="nav-link text-white" @click="goSobre" href="#">Sobre</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  methods: {
    goSobre() {
      this.$router.push("/about");
      console.log("oi");
    },
  },
};
</script>

<style scoped>
#Navbar {
  background: rgb(32, 146, 229) !important;
  background: linear-gradient(
    rgba(32, 146, 229, 1) 0%,
    rgba(47, 120, 173, 1) 100%
  ) !important;
  box-shadow: 1px 3px 3px #35353590;
}

#Navbar li a {
  font-size: 1.3rem;
}
</style>
