<template>
  <section>
    <article>
      <b-dropdown text="Addition" @show="setOperator('addition')">
        <b-dropdown-item @click="setDifficulty('easy')">Lätt</b-dropdown-item>
        <b-dropdown-item @click="setDifficulty('hard')">Svårt</b-dropdown-item>
      </b-dropdown>
      <b-dropdown text="Subtraktion" @show="setOperator('subtraction')">
        <b-dropdown-item @click="setDifficulty('easy')">Lätt</b-dropdown-item>
        <b-dropdown-item @click="setDifficulty('hard')">Svårt</b-dropdown-item>
      </b-dropdown>
      <b-dropdown text="Division" @show="setOperator('division')">
        <b-dropdown-item @click="setDifficulty('easy')">Lätt</b-dropdown-item>
        <b-dropdown-item @click="setDifficulty('hard')">Svårt</b-dropdown-item>
      </b-dropdown>
      <b-dropdown text="Multiplikation" @show="setOperator('multiplication')">
        <b-dropdown-item @click="setDifficulty('easy')">Lätt</b-dropdown-item>
        <b-dropdown-item @click="setDifficulty('hard')">Svårt</b-dropdown-item>
      </b-dropdown>
    </article>
    <button @click="displayQuiz">Starta quiz!</button>
  </section>
</template>

<script>
export default {
  name: "QuizSettings",
  data() {
    return {
      operator: "",
      difficulty: "",
    };
  },
  methods: {
    setOperator(operator) {
      this.operator = operator;
    },
    setDifficulty(difficulty) {
      this.difficulty = difficulty;
    },
    displayQuiz() {
      this.$emit("showQuiz");
    },
  },
};
</script>

<style scoped></style>
