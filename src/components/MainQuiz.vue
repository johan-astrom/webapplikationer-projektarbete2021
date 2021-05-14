<!--
<template>
  <section>
    <h1>Quiz!!</h1>
    <h2>Du har valt {{ operator }} och svårighetsgrad {{ difficulty }}</h2>
    <form @submit="check">
      <fieldset>
        <ul>
          <li v-for="n  in 5 " :key="n">
            {{n}}<p> {{ x[i] }} {{ sign }} {{ y[i] }} = </p>
            <input v-model="guess"></li>
        </ul>

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
      /*x1: Math.round(Math.random() * 100),
      y1: Math.round(Math.random() * 100),*/
      i:0,
      x:[],
      y:[],
      message: "",
      guess: ''

    }
  },
  props: {
    //Dessa två får sina värden från Quiz-komponenten
    operator: String,
    sign: String,
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
    }
  }
};
</script>

<style scoped>

</style>-->


<template>
  <section>
    <h1>Quiz!!</h1>
    <h2>Du har valt {{ operator }} och svårighetsgrad {{ difficulty }}</h2>
    <form @submit="check">
      <fieldset>
        <ul>
          <li v-for="n in 5" :key="n">
            <p> {{ xNumbers[n-1] }} {{ sign }} {{ yNumbers[n-1] }} </p>
            <input v-model="guess[n-1]">
          </li>
        </ul>
        <input type="submit" value="Calculate">
      </fieldset>
      <p>{{ message }}</p>
      <p> Your answers: {{guess }}</p>

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
      x: [1,1,1,1,1],
      y:[1,1,1,1,1],
      message: "",
      guess: ['','','','','']


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
      return this.x.map((x)=> { return x*(Math.round(Math.random() * 100));
      })
    },
    yNumbers: function (){
      return this.y.map((y)=> {return y*(Math.round(Math.random() *100))
      });
    }
  },

  methods: {
  check: function () {
    if (this.operator == 'addition') {
      for(let i=0; i<5; i++){
        if (this.xNumbers[i] + this.yNumbers[i] != this.guess[i]) {
          this.message = "wrong";
          break;
        } else {
          this.message = "right"
        }
      }

    } else if (this.operator == 'subtraction') {

      for(let i=0; i<5; i++){
        if (this.xNumbers[i] - this.yNumbers[i] != this.guess[i]) {
          this.message = "wrong";
          break;
        } else {
          this.message = "right"
        }
      }

    } else if (this.operator == 'multiplication') {
      for(let i=0; i<5; i++){
        if (this.xNumbers[i] * this.yNumbers[i] != this.guess[i]) {
          this.message = "wrong";
          break;
        } else {
          this.message = "right"
        }
      }
    } else {
      for(let i=0; i<5; i++){
        if (this.xNumbers[i] / this.yNumbers[i] != this.guess[i]) {
          this.message = "wrong";
          break;
        } else {
          this.message = "right"
        }
      }
    }
  }
  }
}
</script>

<style scoped>

</style>