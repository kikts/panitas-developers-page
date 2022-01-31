<template>
  <div>
    <Banner />
    <div class="bodyParallax">
      <AboutMe />
      <Proyects />
      <Discord />
    </div>
  </div>
</template>

<script>
import { Options, Vue } from "vue-class-component";
import Proyects from "../components/Proyects.vue";
import AboutMe from "../components/AboutMe.vue";
import Discord from "../components/Discord.vue";
import Banner from "../components/Banner.vue";
import "../styles/HomeStyles.css";

// @ is an alias to /src
@Options({
  name: "Home",
  components: {
    Banner,
    AboutMe,
    Proyects,
    Discord,
  },
})
export default class Home extends Vue {}
</script>
