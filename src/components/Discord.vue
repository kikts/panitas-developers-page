<template>
  <div class="discord">
    <div class="title">UNETE A ESTA HERMOSA COMUNIDAD DE PROGRAMADORES OWO</div>
    <div class="button">
      <button @click="discord">UNIRTE</button>
    </div>
  </div>
</template>

<script>
import { Options, Vue } from "vue-class-component";

@Options({
  name: "Discord",
  methods: {
    discord() {
      window.location.href = "https://discord.gg/zSrMdZHE2N";
    },
  },
})
export default class Discord extends Vue {}
</script>

<style>
.discord {
  margin-top: 15rem;
  text-align: center;
  margin-bottom: 15rem;
}

.discord .title {
  font-size: 2.6rem;
  font-weight: 500;
  margin-bottom: 20px;
}

.discord .button button {
  padding: 0.8rem 6rem;
  border: none;
  color: white;
  font-weight: 500;
  background: #fe5050;
  border-radius: 10px;
}

@media screen and (max-width: 416px) {
  .discord .title {
    font-size: 2rem;
  }
}
</style>
