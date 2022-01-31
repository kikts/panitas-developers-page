<template>
  <div class="proyects">
    <div class="title-proyects">NUESTROS PROYECTOS</div>
    <div class="separate"></div>
    <div class="cards">
      <div class="card">
        <div class="card-header">
          <img :src="logo" alt="" />
        </div>
        <div class="card-body">
          <div class="title">TITULO</div>
          <div class="description">DESCRIPCION CORTA</div>
          <div class="buttons">
            <button>VISITAR</button>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header">
          <img :src="logo" alt="" />
        </div>
        <div class="card-body">
          <div class="title">TITULO</div>
          <div class="description">DESCRIPCION CORTA</div>
          <div class="buttons">
            <button>VISITAR</button>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header">
          <img :src="logo" alt="" />
        </div>
        <div class="card-body">
          <div class="title">TITULO</div>
          <div class="description">DESCRIPCION CORTA</div>
          <div class="buttons">
            <button>VISITAR</button>
          </div>
        </div>
      </div>
    </div>
    <div class="separate"></div>
  </div>
</template>

<script>
import { Options, Vue } from "vue-class-component";
import Logo from "../assets/logo.png";

@Options({
  name: "Proyects",
  data() {
    return {
      logo: Logo,
    };
  },
})
export default class Proyects extends Vue {}
</script>

<style>
.proyects {
  margin-top: 13rem;
}

.proyects .title-proyects {
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
}

.proyects .separate {
  height: 10px;
  background: rgb(51, 51, 51, 56%);
  border-radius: 20px;
  margin-top: 40px;
  margin-bottom: 40px;
}

/******* CARDS STYLES ********/
.proyects .cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  gap: 80px;
}

.card {
  border: 2px solid #333333;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
}

.card .card-body {
  border: 2px solid #333333;
  border-radius: 0px 0px 10px 10px;
  padding: 20px;
}

.card .card-body .title {
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 10px;
}

.card .card-body .buttons {
  margin-top: 30px;
}

.card .card-body .buttons button {
  background: #6350fe;
  padding: 0.3rem 2rem;
  border: none;
  font-weight: 700;
  color: white;
  border-radius: 3px;
}

.card .card-header {
  text-align: center;
}

.card .card-header img {
  width: 200px;
}
</style>
