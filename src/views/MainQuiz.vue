<template>
  <section class="grid_container_mainquiz">
    <h1>Quiz!!</h1>
    <h2>Du har valt {{ operator }} och svårighetsgrad {{ difficulty }}</h2>

    <form @submit="check">
      <fieldset>
        <ul>
          <li  v-for="n in 5" :key="n">
            <p> {{ xNumbers[n - 1] }} {{ sign }} {{ yNumbers[n - 1] }} </p>
            <input
                class="field"
                v-model="guess[n-1]"
                v-bind:style="{border:resultColor[n-1]}"
            > <p v-if="right[n-1]==false">Rätt svar {{ results[n-1]}}</p>
          </li>

        </ul>
        <input v-if="!checked" type="submit" value="Calculate" :disabled="!validated">
        <button   v-if="checked"  ><router-link to="/" >Nytt Quiz</router-link> </button>

        <!--      <p>{{ message }}</p>-->
        <p> Din lösning:
          <span
              v-for="(guess,index) in guess1"
              v-bind:key="index"
              v-bind:number="guess.number"
          >{{ guess1[index].number }} </span>, poäng: {{ score }}</p>
        <p>Korrekta svar:{{ results }}</p>
        <p v-if="checked"> Test completed</p>
      </fieldset>
    </form>
  </section>
</template>

<script>

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
      checked: false,
      color: " solid red",
      right: [],
      operator: '',
      sign: '',
      difficulty: ''
    }
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
    },
    validated: function () {
      let counter = 0
      for (let i = 0; i < 5; i++) {
        if (this.guess[i] != '') {
          counter++
        }
      }
      if (counter == 5) {
        return true
      }
      return false
    }
  },

  methods: {

    check: function () {
     // this.showQuiz = false;
      if (this.checked == false) {

        this.guess1 = []
        this.results = []
        if (this.operator == 'addition') {
          let score = 0

          for (let i = 0; i < 5; i++) {

            if (this.xNumbers[i] + this.yNumbers[i] != this.guess[i]) {

              this.resultColor[i] = "solid red";
              this.right.push(false);

            } else {
              this.resultColor[i] = "solid green"
              this.right.push(true);
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
              this.resultColor[i] = "solid red";
              this.right.push(false);
            } else {
              this.resultColor [i] = "solid green"
              this.right.push(true);
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
              this.resultColor [i] = "solid red";
              this.right.push(false);
            } else {
              this.resultColor [i] = "solid green";
              this.right.push(true);
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
              this.resultColor [i] = "solid red";
              this.right.push(false);
            } else {
              this.resultColor [i] = "solid green";
              this.right.push(true);
              score++
            }
            this.results.push(this.xNumbers[i] / this.yNumbers[i])
            this.guess1.push({
              number: this.guess[i],
              color: this.resultColor[i]
            })
          }
          this.score = score;
        }
        this.checked = true
      }

    }
  },
  mounted() {
    this.operator = localStorage.getItem("operator");
    this.sign = localStorage.getItem("sign");
    this.difficulty = localStorage.getItem("difficulty");
  }
}


</script>

<style scoped>
ul li{
  list-style-type: none;
}
.grid_container_mainquiz {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 2.0fr 2.0fr 2.0fr;
  grid-template-areas:
    "header "
    "main"
    "footer ";
  grid-gap: 20px;
  height: 70vh;
  text-align: center;
  font-family: "Comic Sans MS";
}
</style>


