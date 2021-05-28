<template>
  <body>
  <div class="question_container">
    <section class="grid_container_mainquiz">
      <h2>Du har valt {{ operator }} och svårighetsgrad {{ difficulty }}</h2>
      <form @submit="check">
        <fieldset>
          <ul>
            <li v-for='n in 5' :key='n'>

              <div class="answers">
                <p class="question_start"> {{ xNumbers[n - 1] }} {{ sign }} {{ yNumbers[n - 1] }} = </p>
                <input
                    :disabled="checked"
                    class="field"
                    v-model='guess[n-1]'
                    v-bind:style="{border:resultColor[n-1]}"
                >
                <p class="wrong_right_comment" v-if="right[n-1]==false">Rätt svar {{ results[n - 1] }}</p>
                <p class="wrong_right_comment" v-if="right[n-1]==true">Bra jobbat!</p>
              </div>
            </li>
          </ul>
          <input style="margin-left: 21px" v-if="!checked" type="submit" value="Calculate" :disabled="!validated">
          <button v-if="checked">
            <router-link class="button_styling" to="/quizsettings">Nytt quiz</router-link>
          </button>

          <button style="margin: 10px" v-if="checked" @click="reload">
            <router-link class="button_styling" to="/quiz"> Spela om</router-link>
          </button>



          <!--      <p>{{ message }}</p>-->
          <p v-if="checked"> Din lösning:
            <span>{{ guess1 }}  </span>, poäng: {{ score }}</p>
          <p v-if="checked">Korrekta svar:{{ results }}</p>
          <p v-if="checked"> Test completed</p>
        </fieldset>
      </form>
    </section>
  </div>
  </body>
</template>

<script>

export default {
  name: "MainQuiz",
  props: {
    activeUser: {type: Object},
    isLoggedIn: {type: String}
  },
  data() {
    return {
      postUrl: "http://localhost:3000/testResults",
      date: new Date().toLocaleString(),
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
      componentKey:0


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
      if (this.isLoggedIn) {
        this.postData()
      }
    },
    postData: async function () {
      const response = await fetch("http://localhost:3000/testResults", {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {"Content-Type": "application/json"},
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify({
          userId: this.activeUser.userId,
          operation: this.operator,
          difficulty: this.difficulty,
          timeStamp: this.date,
          score: this.score
        })
      }).then((response) => {

        return response.json();

      });
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
/*Mobile*/
.question_container {
  height: 30%;
  width: 95%;
  border-color: black;
  border-style: solid;
  border-radius: 25px;
  margin: auto;
  alignment: center;
  background-color: #d6eef5;
  text-align: center;
  padding-top: 40px;
  text-align: center;
}

h2 {
  height: auto;
}
.question_start{
  margin-right: 40px; padding: 2px
}
.answers {
  display: flex;
  flex-direction: row;
  justify-content: center;
  box-sizing: border-box;
  margin-bottom: 15px;
  font-size: 15px;

}


.wrong_right_comment {
  margin-left: 25px;
}

.button_styling {
  text-decoration: none;
  color: black;
  float: inside;
}

ul li {
  list-style-type: none;
}

.grid_container_mainquiz {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0.2fr 1.0fr 0.1fr;
  grid-template-areas:
    "header "
    "main"
    "footer ";
  grid-gap: 20px;
  height: auto;
  text-align: center;
  font-family: "Comic Sans MS";
}

/*Tablet*/
@media screen and (min-width: 768px) and (max-width: 1024px) {
  .question_container {
    width: 70%;
  }

  .answers{
    font-size: 17px;
  }
}

/*Desktop*/
@media screen and (min-width: 1025px) {
  button {
    width: 20%;
  }
  .answers{
    font-size: 18px;
  }
  .question_container {
    width: 50%;
  }
}
</style>