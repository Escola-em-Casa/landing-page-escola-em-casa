<template>
  <v-app id="app">
    <router-view></router-view>
  </v-app>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  background: #f7f7f7;
  margin: 0;
  text-align: center;
}

.main-logo {
  margin: 0 auto;
  max-height: 50vh;
}

.google-badge {
  height: auto;
  width: auto;
  max-height: 100%;
  max-width: 100%;
}

.phone-frame {
  height: 95vh;
}
</style>
