<template>
  <div class="proyects">
    <div class="title-proyects">NUESTROS PROYECTOS</div>
    <div class="separate"></div>
    <div class="cards">
      <div class="card">
        <div class="card-header" @click="game1">
          <img :src="logo" alt="" />
        </div>
        <div class="card-body">
          <div class="title">Dracalvo Esquiva</div>
          <div class="description">
            Ayuda a drago a esquivar los ajos que caen del cielo.
          </div>
          <div class="buttons">
            <button @click="game1">VISITAR</button>
          </div>
        </div>
      </div>
    </div>
    <div class="separate"></div>
  </div>
</template>

<script>
import { Options, Vue } from "vue-class-component";
import Game1 from "../assets/games/game1.png";

@Options({
  name: "Proyects",
  data() {
    return {
      logo: Game1,
    };
  },
  methods: {
    game1() {
      window.location.href =
        " https://comejiax.itch.io/dracalvo-esquiva-ajo-sino-morir";
    },
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
  z-index: 2;
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
  z-index: 1;
  filter: blur(1px);
  background: #010106;
}

.card .card-header img {
  width: 150px;
  transition: 0.4s ease;
}

.card .card-header img:hover {
  width: 160px;
  transition: 0.4s ease;
}

.card .card-header:hover {
  filter: blur(0px);
  cursor: pointer;
}

@media screen and (max-width: 902px) {
  .proyects .cards {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
