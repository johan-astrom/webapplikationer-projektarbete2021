<template>
  <body>
  <section class="grid_container_quiz">
    <QuizSettings @showQuiz="displayQuiz"
                  v-if="!showQuiz"
                  @setOperator="setOperator"
                  @setSign="setSign"
                  @setDifficulty="setDifficulty"/>
    <MainQuiz v-if="showQuiz"
              :difficulty="difficulty"
              :operator="operator"
              :sign="sign"/>
  </section>
  </body>
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
      operator: "",
      sign: ""
    };
  },
  methods: {
    //Dessa tre metoder anropas vid event från QuizSettings och ställer in variabler
    displayQuiz() {
      if(this.operator && this.difficulty) {
        this.showQuiz = true;
      }
      else{
        this.showQuiz= false;
      }
    },
    setOperator(operator) {
      this.operator = operator;
      /*   switch (operator){
           case 'addition':*/
      /* this.sign= operator*/
      // }
    },
    setSign(sign) {
      this.sign = sign;
    },
    setDifficulty(difficulty) {
      this.difficulty = difficulty;
    }
  }
};
</script>

<style scoped>
.grid_container_quiz{
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

</style>
