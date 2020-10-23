<template>
  <div id="About">
    <Navbar />
    <div class="px-5">
      <h2 class="py-6 text-left">SOBRE</h2>
      <div class="row d-flex justify-center align-center my-10 text-left ">
        <div class="col">
          <p>
            A plataforma é utilizada por meio do “Google Sala de Aula”, de
            acesso exclusivo para professores e estudantes desta Secretaria,
            para fins pedagógicos.
          </p>
          <p>
            Nesse espaço, professores poderão se comunicar com estudantes
            realizando videoconferências, troca de mensagens, acesso a materiais
            didáticos, aplicação de avaliações, formação de grupos de trabalho,
            entre outras atividades.
          </p>
          <p>
            Fonte: https://escolaemcasa.se.df.gov.br/
          </p>
        </div>
        <div class="col">
          <img
            class="w-10"
            style="object-fit: contain;"
            src="@/assets/about.png"
          />
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
export default {
  name: "About",
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
