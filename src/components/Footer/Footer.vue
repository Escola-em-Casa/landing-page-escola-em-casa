<template>
  <footer id="Footer" class="py-4 bg-dark text-white-50">
    <div class="container text-center">
      <large>Copyright &copy; 2020 Escola em casa</large>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style>
#Footer {
  background: rgb(32, 146, 229) !important;
  background: linear-gradient(
    rgba(32, 146, 229, 1) 0%,
    rgba(47, 120, 173, 1) 100%
  ) !important;
}

large {
  color: white;
}
</style>
