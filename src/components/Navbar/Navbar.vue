<template>
  <nav class="navbar navbar-expand-lg navbar-light" id="Navbar">
    <span class="navbar-brand text-white" @click="goHome">
      <img
        style="object-fit: contain; width: 3rem; cursor: pointer;"
        src="@/assets/logo.png"
      />
    </span>
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
          <span class="nav-link text-white" @click="goSobre" href="#"
            >Sobre</span
          >
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
    },
    goHome() {
      this.$router.go(-1);
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

#Navbar li span {
  font-size: 1.3rem;
  cursor: pointer;
}
</style>
