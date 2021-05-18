<template>
  <section>
    <h1>Quiz!!</h1>
    <h2>Du har valt {{ operator }} och svårighetsgrad {{ difficulty }}</h2>
    <form @submit.prevent="check">
      <fieldset>
        <ul>
          <li v-for="n in 5" :key="n">
            <p> {{ xNumbers[n - 1] }} {{ sign }} {{ yNumbers[n - 1] }} </p>
            <input
                v-model="guess[n-1]"
            >
          </li>
        </ul>
        <input type="submit" value="Calculate">

        <!--      <p>{{ message }}</p>-->
        <p> Din lösning:
          <span
              v-for="(guess,index) in guess1"
              v-bind:key="index"
              v-bind:number="guess.number"
              v-bind:style="{color:resultColor[index]}"
              v-bind:color="guess.color"

          >{{ guess1[index].number }} </span>, poäng: {{ score }}</p>
        <p>Korrekta svar:{{ results }}</p>
        <p v-if="checked"> Test completed</p>
      </fieldset>
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
      x: [1, 1, 1, 1, 1],
      y: [1, 1, 1, 1, 1],
      message: "",
      guess: ['', '', '', '', ''],
      guess1: [],
      results: [],
      score: 0,
      resultColor: [],
      checked: false
    }
  },
  props: {
    //Dessa två får sina värden från Quiz-komponenten
    operator: String,
    sign: String,
    difficulty: String
  },
  computed: {
    xNumbers: function () {

      return this.x.map((x) => {
        if (this.difficulty == 'lätt') {
          return x * (Math.round(Math.random() * 10))
        } else {
          return x * (Math.round(Math.random() * 100))
        }

      });
    },
    yNumbers: function () {
      return this.y.map((y) => {

        if (this.difficulty == 'lätt') {
          return y * (Math.round(Math.random() * 10))
        } else {
          return y * (Math.round(Math.random() * 100))
        }
      });
    }
  },
  methods: {
    check: function () {
      if (this.checked == false) {
        this.guess1 = []
        this.results = []
        if (this.operator == 'addition') {
          let score = 0

          for (let i = 0; i < 5; i++) {

            if (this.xNumbers[i] + this.yNumbers[i] != this.guess[i]) {

              this.resultColor[i] = "red"

            } else {
              this.resultColor[i] = "green"
              score++
            }
            this.results.push(this.xNumbers[i] + this.yNumbers[i])
            this.guess1.push({
              number: this.guess[i],
              color: this.resultColor[i]
            })
          }
          this.score = score
        } else if (this.operator == 'subtraktion') {
          let score = 0
          for (let i = 0; i < 5; i++) {

            if (this.xNumbers[i] - this.yNumbers[i] != this.guess[i]) {
              this.resultColor[i] = "red"
            } else {
              this.resultColor [i] = "green"
              score++
            }
            this.results.push(this.xNumbers[i] - this.yNumbers[i])
            this.guess1.push({
              number: this.guess[i],
              color: this.resultColor[i]
            })
          }
          this.score = score;
        } else if (this.operator == 'multiplikation') {
          let score = 0;
          for (let i = 0; i < 5; i++) {

            if (this.xNumbers[i] * this.yNumbers[i] != this.guess[i]) {
              this.resultColor [i] = "red"
            } else {
              this.resultColor [i] = "green"
              score++
            }
            this.results.push(this.xNumbers[i] * this.yNumbers[i])
            this.guess1.push({
              number: this.guess[i],
              color: this.resultColor[i]
            })
          }
          this.score = score
        } else {
          let score = 0;
          for (let i = 0; i < 5; i++) {

            if (this.xNumbers[i] / this.yNumbers[i] != this.guess[i]) {
              this.resultColor [i] = "red"
            } else {
              this.resultColor [i] = "green"
              score++
            }
            this.results.push(this.xNumbers[i] / this.yNumbers[i])
            this.guess1.push({
              number: this.guess[i],
              color: this.resultColor[i]
            })
          }
          this.score = score
        }
        this.checked = true
      }
    }
  }
}
</script>

<<<<<<< HEAD
<style scoped>
ul li{
  list-style-type: none;
}
ul li p{
  padding-top: 20px
}
</style>
=======

>>>>>>> 98aa54689180f066c223e331a35cfe5e8589e5e2
