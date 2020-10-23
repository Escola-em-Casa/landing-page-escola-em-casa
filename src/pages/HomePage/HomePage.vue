<template>
  <div id="HomePage">
    <Navbar />
    <div>
      <div class="header">
        <v-img class="main-logo" src="@/assets/logo-with-text.png"></v-img>
        <div class="d-flex justify-center  flex-wrap ">
          <img class="w-10" src="@/assets/android.png" />
          <img
            class="w-10"
            style="object-fit: contain;"
            src="@/assets/iphone.png"
          />
        </div>
      </div>
      <div class="sobre py-10">
        <h3>SOBRE</h3>
        <v-container>
          <div class="d-flex align-center flex-row flex-wrap justify-center">
            <div class="w-50">
              <h4>
                A plataforma “Escola em Casa DF” é a sala de aula virtual da
                Secretaria de Estado de Educação do Distrito Federal, preparada
                especialmente para você!
              </h4>
              <div class="btn">Conheça mais</div>
            </div>
            <img
              class="w-50"
              style="object-fit: contain;"
              src="@/assets/phone-frame.png"
            />
          </div>
        </v-container>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
export default {
  name: "HomePage",
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
