<template>
  <section>
  <h1>Quiz!!</h1>
    <h2>Du har valt {{ operator }} och svårighetsgrad {{ difficulty }}</h2>
  </section>
</template>

<script>
import Quiz from "@/views/Quiz";

export default {
  name: "MainQuiz",
  // eslint-disable-next-line vue/no-unused-components
  components: { Quiz },
  props: {
    //Dessa två får sina värden från Quiz-komponenten
    operator: String,
    difficulty: String
  }
};
</script>

<style scoped>

</style>