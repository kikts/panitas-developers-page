<template>
  <div class="aboutMe">
    <div class="container1">
      <div class="grid1">
        <div class="title">¿Quiénes somos?</div>
        <div class="description">
          Somos Panitas Developers, una comunidad de programadores a disposición
          de todo el mundo, buscamos ayudar a las personas en el tema de la
          programación y la tecnología, también buscamos hacer que la gente se
          interese en este maravilloso mundo de la programación.
        </div>
      </div>
      <div class="grid2">
        <div class="title">
          <img src="../assets/imageDiscord.svg" alt="" />
        </div>
      </div>
    </div>
    <div class="container2">
      <div class="grid1">
        <img src="../assets/canalesImage.png" alt="" />
      </div>
      <div class="grid2">
        <div class="title1">
          Tenemos una gran variedad de canales donde puedes pedir ayuda y
          también compartir tus proyectos.
        </div>
        <div class="separate"></div>
        <div class="title2">
          También, de vez en cuando hacemos eventos y jugamos a diversos juegos.
        </div>
        <div class="icons">
          <div class="icon">
            <img src="../assets/icons/amongUsIcon.png" alt="amongUsIcon" />
          </div>
          <div class="icon">
            <img src="../assets/icons/minecraftIcon.png" alt="amongUsIcon" />
          </div>
          <div class="icon">
            <img src="../assets/icons/rocketIcon.png" alt="amongUsIcon" />
          </div>
          <div class="icon">
            <img src="../assets/icons/scpIcon.png" alt="amongUsIcon" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Options, Vue } from "vue-class-component";
@Options({
  name: "AboutMe",
})
export default class AboutMe extends Vue {}
</script>

<style>
.aboutMe {
  background: #f2f2f2;
  border-radius: 6px;
  padding: 4rem;
}

/******* CONTAINER 1 ******/
.aboutMe .container1 {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  text-align: center;
}

.aboutMe .container1 .grid1 {
  text-align: left;
}

.aboutMe .container1 .grid1 .title {
  font-weight: 700;
  font-size: 2rem;
}

.aboutMe .container1 .grid1 .description {
  margin-top: 10px;
  font-size: 1.6rem;
}

/******* CONTAINER 2 ******/
.aboutMe .container2 {
  margin-top: 7rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  text-align: center;
}

.aboutMe .container2 .grid1 {
  text-align: left;
}

.aboutMe .container2 .grid1 img {
  width: 300px;
}

.aboutMe .container2 .grid2 {
  text-align: left;
  font-size: 1.6rem;
}

.aboutMe .container2 .grid2 .separate {
  height: 10px;
  background: rgb(51, 51, 51, 56%);
  border-radius: 20px;
  margin-top: 40px;
  margin-bottom: 40px;
}

.aboutMe .container2 .grid2 .icons {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  margin-top: 40px;
  text-align: center;
}

@media screen and (max-width: 902px) {
  .aboutMe {
    padding: 1rem;
  }

  /******* CONTAINER 1 ******/
  .aboutMe .container1 {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 30px;
    text-align: center;
  }

  /******* CONTAINER 2 ******/
  .aboutMe .container2 {
    margin-top: 2rem;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 30px;
    text-align: center;
  }

  .aboutMe .container2 .grid1 img {
    display: none;
  }

  .aboutMe .container2 .grid2 .icons {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
