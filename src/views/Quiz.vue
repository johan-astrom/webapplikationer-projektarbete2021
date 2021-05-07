<template>
  <section>
    <QuizSettings @showQuiz="displayQuiz" v-if="!showQuiz" />
    <MainQuiz v-if="showQuiz"/>
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
      showQuiz: false
    };
  },
  methods: {
    displayQuiz() {
      this.showQuiz = true;
    }
  }
};
</script>

<style scoped>

</style>