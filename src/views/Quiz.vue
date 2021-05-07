<template>
<section>
  <QuizSettings @showQuiz="displayQuiz" v-if="!showQuiz"/>
</section>
</template>

<script>
import QuizSettings from "@/components/QuizSettings";

export default {
  name: "Quiz",
  components: { QuizSettings },
  data(){
    return{
      showQuiz: false
    }
  },
  methods: {
    displayQuiz() {
      this.showQuiz=true;
    }
  }
};
</script>

<style scoped>

</style>