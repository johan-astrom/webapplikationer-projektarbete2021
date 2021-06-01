<template>
  <body>
  <div class="question_container">
    <section class="grid_container_mainquiz">
      <h2>Du har valt {{ operator }} och svårighetsgrad {{ difficulty }}</h2>
      <form @submit.prevent="check">
        <fieldset>
          <ul>
            <li v-for='n in 5' :key='n'>

              <div class="answers">
                <label class="question_start"> {{ xNumbers[n - 1] }} {{ sign }} {{ yNumbers[n - 1] }} = </label>
<!--                <p class="question_start"> {{ xNumbers[n - 1] }} {{ sign }} {{ yNumbers[n - 1] }} = </p>-->
                <input
                    :disabled="checked"
                    class="field"
                    v-model='guess[n-1]'
                    v-bind:style="{border:resultColor[n-1]}"
                >
                <p class="wrong_comment" v-if="right[n-1]==false">Rätt svar {{ results[n - 1] }}</p>
                <p class="right_comment" v-if="right[n-1]==true">Bra jobbat!</p>
              </div>
            </li>
          </ul>
          <input style="margin-left: 21px" v-if="!checked" type="submit" value="Rätta" :disabled="!validated">
          <button v-if="checked">
            <router-link class="button_styling" to="/quizsettings">Nytt spel</router-link>
          </button>

          <button style="margin: 10px" v-if="checked" @click="reload">
            Spela om
          </button>


          <!--      <p>{{ message }}</p>-->

<!--          <p v-if="checked"><b> Din lösning:</b>-->
<!--            <span>{{ guess1 }}  </span>, poäng: {{ score }}</p>-->
<!--          <p v-if="checked"><b>Korrekta svar:</b>{{ results }}</p>-->
          <p v-if="checked" class="point"><b>Poäng: </b> {{score}}</p>
          <p v-if="checked"><b>Prov genomfört &#x1F44D;</b> </p>

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
      y1: [1, 1, 1, 1, 1],
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
      xDivEas1: [],
      yDivEas1: [],
      xDivDif1:[],
      yDivDif1:[],
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
      //return Math.floor(Math.random() * 10) + 1
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

      }

    },

    yNumbers: function () {
      //return Math.floor(Math.random() * 10) + 1
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
    /* xNumbers: function () {
       return this.xNumbers1();
     },

     yNumbers: function () {
    return this.yNumbers1();
     },*/
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

    yDivEasy1: function () {

      //let y = [];
      while (this.yDivEas1.length < 5) {
        let r = (Math.floor(Math.random() * 10) + 1);
        if (this.yDivEas1.indexOf(r) == -1) this.yDivEas1.push(r);
      }
      /*let y1 = new Set();
      while(y.size != 5){
        y.add(Math.floor(Math.random() * 10) + 1);*/

      return this.yDivEas1;
    },
    xDivEasy1: function () {
      //let x = [];

      for (let i = 0; i < 5; i++) {
        this.xDivEas1.push((Math.floor(Math.random() * 10) + 1) * this.yDivEas1[i]);
      }
      console.log(this.yDivEas1)
      console.log(this.xDivEas1)

      return this.xDivEas1;
    },

    yDivDifficult1: function () {

      while (this.yDivDif1.length < 5) {
        let r = (Math.floor(Math.random() * 100) + 1);
        if (this.yDivDif1.indexOf(r) == -1) this.yDivDif1.push(r);
      }
      return this.yDivDif1;
    },
    xDivDifficult1: function () {

      for (let i = 0; i < 5; i++) {
        this.xDivDif1.push((Math.floor(Math.random() * 100) + 1) * this.yDivDif1[i]);
      }
      return this.xDivDif1;
    },
    xNumbers1: function () {
      //return Math.floor(Math.random() * 10) + 1
      if (this.operator == 'division' && this.difficulty == 'lätt') {

        return this.xDivEasy1();

      } else if (this.operator == 'division' && this.difficulty == 'svårt') {
        return this.xDivDifficult1()
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

      }

    },

    yNumbers1: function () {
      //return Math.floor(Math.random() * 10) + 1
      if (this.operator == 'division' && this.difficulty == 'lätt') {

        return this.yDivEasy1();

      } else if (this.operator == 'division' && this.difficulty == 'svårt') {
        return this.yDivDifficult1()
      } else {
        return this.y1.map((y1) => {
          if (this.difficulty == 'lätt') {
            return y1 * ((Math.floor(Math.random() * 10)) + 1)
          } else {
            return y1 * (Math.round(Math.random() * 100))
          }

        });
      }
    },

    reload: function () {
      this.yDivEas1 = [];
      this.xDivEas1 = [];
      this.xDivDif1=[];
      this.xDivDif1=[];
      let yArray = this.yNumbers1();
      let xArray = this.xNumbers1();

      console.log(xArray);
      console.log(yArray)
      //this.$router.go(this.$router.currentRoute)
      this.checked = false;

      this.guess = [];
      this.right = [];
      this.results = [];
      this.resultColor = [];
      this.guess1 = [];
      for (let i = 0; i < 5; i++) {
        this.xNumbers[i] = xArray[i];
        this.yNumbers[i] = yArray[i];

      }


    }
    ,
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
ul{
 margin:auto;
}
.point{
  font-size: 24px;
  margin-top: 10px;
}
h2 {
  height: auto;
}

.question_start{
  margin-right: 4px;
  padding: 0px;
  margin-top: 15px;


}

.answers {
  display: flex;
  flex-direction: row;
  justify-content: center;
  box-sizing: content-box;
  margin-bottom: 15px;
  font-size: 15px;

}
.field{
  height: 40px;
  margin-top: 6px;
}
fieldset{
 margin:auto;
}

.wrong_comment {
  margin-left: 4px;
  color: red;
  margin-top: 15px;
}
.right_comment {
  margin-left: 4px;
  color: green;
  margin-top: 15px;

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
  justify-content: center;
}

/*Tablet*/
@media screen and (min-width: 768px) and (max-width: 1024px) {
  .question_container {
    width: 70%;
  }

  .answers {
    font-size: 17px;
  }
}

/*Desktop*/
@media screen and (min-width: 1025px) {

  button {
    width: 20%;
  }

  .answers {
    font-size: 18px;
  }

  .question_container {
    width: 50%;
  }
}
</style>