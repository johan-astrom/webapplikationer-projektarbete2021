<template>
  <body>
  <section class="grid_container_mainquiz">
    <h1>Quiz!!</h1>
    <h2>Du har valt {{ operator }} och svårighetsgrad {{ difficulty }}</h2>

    <form @submit="check">
      <fieldset>
        <ul>
          <li v-for='n in 5' :key='n' >
            <p> {{ xNumbers[n - 1] }} {{ sign }} {{ yNumbers[n - 1] }} </p>
            <input
                :disabled="checked"
                class="field"
                v-model='guess[n-1]'
                v-bind:style="{border:resultColor[n-1]}"
            >
            <p v-if="right[n-1]==false">Rätt svar {{ results[n - 1] }}</p>
          </li>

        </ul>
        <input v-if="!checked" type="submit" value="Calculate" :disabled="!validated">
        <button v-if="checked">
          <router-link to="/quizsettings">Nytt quiz</router-link>
        </button>

        <button  style="margin: 10px"   v-if="checked" @click="reload">
          <router-link to="/quiz"> spela om</router-link>
        </button>

        <!--      <p>{{ message }}</p>-->
        <p  v-if="checked"> Din lösning:
          <span>{{ guess1}}  </span>, poäng: {{ score }}</p>
        <p v-if="checked">Korrekta svar:{{ results }}</p>
        <p v-if="checked"> Test completed</p>
      </fieldset>
    </form>
  </section>
  </body>
</template>

<script>

export default {
  name: "MainQuiz",

  data() {
    return {
      y: [1, 1, 1, 1, 1],
      /*x: [1, 1, 1, 1, 1],*/
      message: "",
      guess: [],
      guess1: [],
      results: [],
      score: 0,
      resultColor: [],
      checked: false,
      color: " solid red",
      right: [],
      operator: '',
      sign: '',
      difficulty: '',

    }
  },
  computed: {


    yDivEasy: function () {

      let y = [];
      while (y.length < 5) {
        let r = (Math.floor(Math.random() * 10) + 1);
        if (y.indexOf(r) == -1) y.push(r);
      }
      /*let y1 = new Set();
      while(y.size != 5){
        y.add(Math.floor(Math.random() * 10) + 1);*/

      return y;
    },
    xDivEasy: function () {
      let x = [];
      for (let i = 0; i < 5; i++) {
        x.push((Math.floor(Math.random() * 10) + 1) * this.yDivEasy[i]);
      }
      return x;
    },
    yDivDifficult: function () {
      let y = [];
      while (y.length < 5) {
        let r = (Math.floor(Math.random() * 100) + 1);
        if (y.indexOf(r) == -1) y.push(r);
      }
      return y;
    },
    xDivDifficult: function () {
      let x = [];
      for (let i = 0; i < 5; i++) {
        x.push((Math.floor(Math.random() * 100) + 1) * this.yDivDifficult[i]);
      }
      return x;
    },
    xNumbers: function () {

      if (this.operator == 'division' && this.difficulty == 'lätt') {
        return this.xDivEasy;
      } else if (this.operator == 'division' && this.difficulty == 'svårt') {
        return this.xDivDifficult
      } else {
        let x = new Set();
        if (this.difficulty == 'lätt') {

          while (x.size != 5) {
            x.add(Math.floor(Math.random() * 10) + 1)
          }
        } else {

          while (x.size != 5) {
            x.add(Math.ceil(Math.random() * 90 + 10))
            //x.add(this.getRandomInt(10,100));
          }
        }
        let array = Array.from(x);
        //let array=[...x];
        //x.forEach(value => array.push(value))
        return array;

        /*return this.x.map((x) => {

          if (this.difficulty == 'lätt') {
             x = (Math.floor(Math.random() * 10) + 1);
            if (this.x.indexOf(x) == -1) {
              return x
            } else {
              return x * (Math.round(Math.random() * 100))
            }
          }
        }
        );*/
      }
    },
    yNumbers: function () {

      if (this.operator == 'division' && this.difficulty == 'lätt') {
        return this.yDivEasy;
      } else if (this.operator == 'division' && this.difficulty == 'svårt') {
        return this.yDivDifficult
      } else {
        return this.y.map((y) => {
          if (this.difficulty == 'lätt') {
            return y * ((Math.floor(Math.random() * 10)) + 1)
          } else {
            return y * (Math.round(Math.random() * 100))
          }

        });
      }
    },
    validated: function () {
      let counter = 0
      for (let i = 0; i < 5; i++) {
        if (this.guess[i] != null) {
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

    reload: function () {
      this.$router.go(this.$router.currentRoute)
    },
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
            this.guess1.push(this.guess[i])
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
            this.guess1.push(this.guess[i])
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
            this.guess1.push(this.guess[i])
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
            this.guess1.push(this.guess[i])
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
ul li {
  list-style-type: none;
}

.grid_container_mainquiz {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1.0fr 1.0fr 7.0fr;
  grid-template-areas:
    "header "
    "main"
    "footer ";
  grid-gap: 20px;
  height: 100vh;
  text-align: center;
  font-family: "Comic Sans MS";
}


</style>