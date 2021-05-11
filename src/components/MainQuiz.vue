<template>
  <section>
    <h1>Quiz!!</h1>
    <h2>Du har valt {{ operator }} och svårighetsgrad {{ difficulty }}</h2>
    <form @submit="check">
      <fieldset>
        <p> {{ x1 }} {{ sign }} {{ y1 }} = </p>
        <input v-model="guess">
        <input type="submit" value="Calculate">
      </fieldset>
      <p>{{ message }}</p>

    </form>


  </section>
</template>

<script>
import Quiz from "@/views/Quiz";

export default {
  name: "MainQuiz",
  // eslint-disable-next-line vue/no-unused-components
  components: {Quiz},
  data() {
    return {
      x1: Math.round(Math.random() * 100),
      y1: Math.round(Math.random() * 100),
      message: "",
      guess: ''

    }
  },
  props: {
    //Dessa två får sina värden från Quiz-komponenten
    operator: String,
    sign: String,
    // operator:[['addition','+'],['subtraction','-'],['multiplication','x'],['division','/']],
    difficulty: String
  },
  methods: {
    check: function () {
      if (this.operator == 'addition') {
        if (this.x1 + this.y1 == this.guess) {
          this.message = "right"
        } else {
          this.message = "wrong"
        }
      } else if (this.operator == 'subtraction') {

        if (this.x1 - this.y1 == this.guess) {
          this.message = "right"
        } else {
          this.message = "wrong"
        }

      }
      else if(this.operator=='multiplication'){
        if (this.x1 *this.y1 == this.guess) {
          this.message = "right"
        } else {
          this.message = "wrong"
        }
      }
      else {
        if (this.x1 /this.y1 == this.guess) {
          this.message = "right"
        } else {
          this.message = "wrong"
        }
      }
    },
    /*  findSign: function(){
        switch (this.operator){
          case 'addition':
            this.sign='+'
        }
      }*/
  }
};
</script>

<style scoped>

</style>