<template>
  <v-app id="app">
    <v-main>
      <Navbar />
      <HomePage />
      <Footer />
    </v-main>
  </v-app>
</template>

<script>
import HomePage from "./pages/HomePage/HomePage";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
export default {
  name: "App",
  components: {
    HomePage,
    Navbar,
    Footer,
  },
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
