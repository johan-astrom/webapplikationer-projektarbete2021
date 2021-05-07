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
    <div>
      <b-dropdown id="dropdown-1" text="Dropdown Button" class="m-md-2">
        <b-dropdown-item>First Action</b-dropdown-item>
        <b-dropdown-item>Second Action</b-dropdown-item>
        <b-dropdown-item>Third Action</b-dropdown-item>
        <b-dropdown-divider></b-dropdown-divider>
        <b-dropdown-item active>Active action</b-dropdown-item>
        <b-dropdown-item disabled>Disabled action</b-dropdown-item>
      </b-dropdown>
    </div>
  </section>
</template>

<script>
import { bootstrap } from 'bootstrap-vue';

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