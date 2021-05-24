<template>
  <body>
  <section id="grid_container_quiz">
    <article id="dropdowns">
      <b-dropdown class="dropdown" text="Addition" @show="setOperator('addition'), setSign('+')">
        <b-dropdown-item @click="setDifficulty('lätt')">Lätt</b-dropdown-item>
        <b-dropdown-item @click="setDifficulty('svårt')">Svårt</b-dropdown-item>
      </b-dropdown>
      <b-dropdown class="dropdown" text="Subtraktion" @show="setOperator('subtraktion'), setSign('-')">
        <b-dropdown-item @click="setDifficulty('lätt')">Lätt</b-dropdown-item>
        <b-dropdown-item @click="setDifficulty('svårt')">Svårt</b-dropdown-item>
      </b-dropdown>
      <b-dropdown class="dropdown" text="Division" @show="setOperator('division'), setSign('/')">
        <b-dropdown-item @click="setDifficulty('lätt')">Lätt</b-dropdown-item>
        <b-dropdown-item @click="setDifficulty('svårt')">Svårt</b-dropdown-item>
      </b-dropdown>
      <b-dropdown class="dropdown" text="Multiplikation" @show="setOperator('multiplikation'), setSign('x')">
        <b-dropdown-item @click="setDifficulty('lätt')">Lätt</b-dropdown-item>
        <b-dropdown-item @click="setDifficulty('svårt' +'')">Svårt</b-dropdown-item>
      </b-dropdown>
    </article>
<!--    <p v-if="!difficultySelected">Test</p>-->
    <br>
    <router-link class="start_button" tag="button" to="/quiz" :disabled="!difficultySelected">Starta quiz!</router-link>
  </section>
  </body>
</template>

<script>
export default {
  name: "QuizSettings",
  data(){
    return{
      difficultySelected: false
    }
  },
  methods: {
    setOperator(operator) {
      localStorage.setItem("operator", operator);
    },
    setSign(sign) {
      localStorage.setItem("sign", sign);
    },
    setDifficulty(difficulty) {
      localStorage.setItem("difficulty", difficulty);
      this.difficultySelected = true
    }
  }
  };
</script>

<style scoped>

#grid_container_quiz {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 2.0fr 2.0fr 2.0fr;
  grid-template-areas:
    "header header "
    "footer footer";
  grid-gap: 20px;
  height: 100vh;
  text-align: center;
  font-family: "Comic Sans MS";
}

#dropdowns {
  display: flex;
  flex-direction: column;
}

.dropdown {
  width: 150px;
  align-self: center;
  margin-bottom: 15px;
}

button{
  height: 20%;
  width: 20%;
  display: block;
  margin: 0 auto;
}


</style>
