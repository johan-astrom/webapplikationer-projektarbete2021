<template>
  <section>
    <QuizSettings @showQuiz="displayQuiz"
                  v-if="!showQuiz"
                  @setOperator="setOperator"
                  @setDifficulty="setDifficulty" />
    <MainQuiz v-if="showQuiz"
              :difficulty="difficulty"
              :operator="operator"/>
  </section>
</template>

<script>
import QuizSettings from "@/components/QuizSettings";
import MainQuiz from "@/components/MainQuiz";

export default {
  name: "Quiz",
  components: {
    QuizSettings,
    MainQuiz
  },
  data() {
    return {
      showQuiz: false,
      //Difficulty och operator skickas vidare till MainQuiz
      difficulty: "",
      operator: ""
    };
  },
  methods: {
    //Dessa tre metoder anropas vid event från QuizSettings och ställer in variabler
    displayQuiz() {
      this.showQuiz = true;
    },
    setOperator(operator) {
      this.operator = operator;
    },
    setDifficulty(difficulty) {
      this.difficulty = difficulty;
    }
  }
};
</script>

<style scoped></style>
