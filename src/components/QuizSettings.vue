<template>
  <section>
    <b-dropdown @click="setOperator('addition')">Addition
      <b-dropdown-item @click="setDifficulty('easy')">Lätt</b-dropdown-item>
      <b-dropdown-item @click="setDifficulty('hard')">Svårt</b-dropdown-item>
    </b-dropdown>
    <b-dropdown @click="setOperator('subtraction')">Subtraktion
      <b-dropdown-item @click="setDifficulty('easy')">Lätt</b-dropdown-item>
      <b-dropdown-item @click="setDifficulty('hard')">Svårt</b-dropdown-item>
    </b-dropdown>
    <b-dropdown @click="setOperator('division')">Division
      <b-dropdown-item @click="setDifficulty('easy')">Lätt</b-dropdown-item>
      <b-dropdown-item @click="setDifficulty('hard')">Svårt</b-dropdown-item>
    </b-dropdown>
    <b-dropdown @click="setOperator('multiplication')">Multiplikation
      <b-dropdown-item @click="setDifficulty('easy')">Lätt</b-dropdown-item>
      <b-dropdown-item @click="setDifficulty('hard')">Svårt</b-dropdown-item>
    </b-dropdown>
  </section>
</template>

<script>
export default {
  name: "QuizSettings",
  data() {
    return {
      operator: "",
      difficulty: ""
    };
  },
  methods: {
    setOperator(operator) {
      this.operator = operator;
    },
    setDifficulty(difficulty) {
      this.difficulty = difficulty;
    }
  }
};
</script>

<style scoped>

</style>