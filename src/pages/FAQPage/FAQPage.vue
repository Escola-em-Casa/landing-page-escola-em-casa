<template>
  <div id="FAQPage">
    <Navbar />
    <div>
      <p>oi </p>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
export default {
  name: "FAQPage",
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style>
.header {
  width: 100%;
  height: 80vh;
  background: #35353590 url("~@/assets/header.png");
}

.main-logo {
  width: 40%;
}

.img-icon {
  width: 10% !important;
}

.sobre {
  background: linear-gradient(
    rgba(32, 146, 229, 1) 0%,
    rgba(47, 120, 173, 1) 100%
  ) !important;
  color: white;
}

.btn {
  background-color: white;
  padding: 0.5rem 4rem;
  color: #353535;
  margin-top: 1rem;
  border-radius: 1rem;
}
</style>
