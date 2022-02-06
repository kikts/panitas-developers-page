<template>
  <div class="banner">
    <div class="background">
      <!-- <img src="../assets/bannerDiscord.png" alt="" /> -->
    </div>
    <div class="container">
      <div class="icon">
        <img src="../assets/logo.png" alt="" />
      </div>
      <div class="header">
        <div class="title">PANITAS DEVELOPERS COMMUNITY</div>
        <div class="buttons">
          <div class="buttonAboutMe" @click="goAboutSection">
            <button>¿Quiénes somos?</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Options, Vue } from "vue-class-component";

@Options({
  name: "Banner",
  methods: {
    goAboutSection() {
      const section = document.querySelector(`#aboutMe`);
      section.scrollIntoView({
        behavior: "smooth",
      });
    },
  },
})
export default class Banner extends Vue {}
</script>

<style>
.banner {
  color: white;
  display: flex;
  /* margin-bottom: 50rem; */
}

.banner .background {
  background: url("../assets/bannerDiscord.png");
  background-position: center center;
  background-size: cover;
  position: fixed;
  z-index: -1;
  width: 100%;
  height: 100vh;
}

.banner .container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-content: center;
  width: 100%;
}

.banner .container .header .title {
  font-size: 2.7rem;
  font-weight: 700;
}

.banner .container .header .buttonAboutMe {
  margin-top: 20px;
}

.banner .container .header .buttonAboutMe button {
  border-radius: 20px;
  border: none;
  background: #6350fe;
  color: white;
  padding: 0.7rem 3.8rem;
  font-weight: 700;
  font-size: 17px;
}

@media screen and (max-width: 962px) {
  .banner {
    color: white;
    margin-bottom: 16rem;
  }

  /* .banner .background {
    display: none;
  } */

  .banner .container img {
    width: 300px;
  }
}

@media screen and (max-width: 1041px) {
  .banner .container {
    grid-template-columns: repeat(1, 1fr);
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  .banner .container .header .title {
    font-size: 2.5rem;
    width: 50%;
    margin: auto;
    font-weight: 700;
  }
}
</style>
