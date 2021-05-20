<template>
  <section>
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
        <b-dropdown-item @click="setDifficulty('svårt' +
         '')">Svårt</b-dropdown-item>
      </b-dropdown>
    </article>
    <button @click="displayQuiz">Starta quiz!</button>
  </section>
</template>

<script>
export default {
  name: "QuizSettings",
  methods: {
    setOperator(operator) {
      localStorage.setItem("operator", operator);
    },
    setSign(sign){
      localStorage.setItem("sign", sign);
    },
    setDifficulty(difficulty) {
      localStorage.setItem("difficulty", difficulty);
    },
    displayQuiz() {
      this.$emit("showQuiz");
    },
  },
};
</script>

<style scoped>

#dropdowns {
  display: flex;
  flex-direction: column;
}

.dropdown{
  width: 150px;
  align-self: center;
  margin-bottom: 15px;
}


</style>
