<template>
  <body>
  <section class="grid_container">
    <div class="profile_container">
      <b-card class="card" no-body>
        <b-tabs pills card vertical>
          <b-tab title="Visa Resultat" active>
            <b-card-text>
              <h3>Dina snittresultat:</h3>
              <p>Addition, lätt: {{ avgAdditionEasy }}</p>
              <p v-if="avgAdditionEasy<3">Du skulle behöva öva mer på addition!</p>
              <p>Subtraktion: {{ avgSubtractionEasy }}</p>
              <p v-if="avgSubtractionEasy<3">Du skulle behöva öva mer på subtraktion!</p>
              <p>Division: {{ avgDivisionEasy }}</p>
              <p v-if="avgDivisionEasy<3">Du skulle behöva öva mer på division!</p>
              <p>Multiplikation: {{ avgMultiplicationEasy }}</p>
              <p v-if="avgAdditionEasy<3">Du skulle behöva öva mer på multiplikation!</p>

            </b-card-text>
          </b-tab>

          <b-tab title="Ändra Lösenord">
            <b-card-text>
              <div id="Ändra lösenord" class="tabcontent">
                <h3>Byt Lösenord</h3>
                <label for="password">Ange ditt nya lösenord:</label>
                <br>
                <input class="signup_password_container"
                       type="password"
                       id="password"
                       name="password"
                       v-model="password"
                       minlength="6"
                       maxlength="15"
                       required
                />
                <br>
                <label for="password-check">Bekräfta ditt nya lösenord:</label>
                <br>
                <input
                  type="password"
                  id="password-check"
                  name="password-check"
                  v-model="passwordCheck"
                  minlength="6"
                  maxlength="15"
                  required
                />
                <p v-if="passwordCheck!==password && passwordCheck">Lösenorden stämmer inte överens!</p>
                <br>
                <br>
                <input @click="postData" type="submit" v-show="passwordCheck===password" value="Skicka" />

              </div>
            </b-card-text>
          </b-tab>

          <b-tab title="Ta bort Konto">
            <b-card-text>
              <h4>Vill du radera ditt konto?</h4>
              <button @click="deleteAccount">Radera</button>
            </b-card-text>
          </b-tab>
          <b-tab title="Logga Ut">
            <b-card-text>
              <h4>Är du säker på att du vill logga ut?</h4>

              <input type="submit" value="OK" v-on:click="logout" />

            </b-card-text>
          </b-tab>
        </b-tabs>
      </b-card>
    </div>
  </section>
  </body>
</template>

<script>
export default {
  props: {
    isLoggedIn: { type: String },
    activeUser: {
      type: Object
    }
  },
  name: "ProfileInfo",
  data() {
    return {
      password: "",
      passwordCheck: "",
      postUrl: "http://localhost:3000/users/:id",
      avgAdditionEasy: 0,
      avgAdditionHard: 0,
      avgSubtractionEasy: 0,
      avgSubtractionHard: 0,
      avgDivisionEasy: 0,
      avgDivisionHard: 0,
      avgMultiplicationEasy: 0,
      avgMultiplicationHard: 0
    };
  },
  methods: {
    logout() {
      this.$emit("log-out-from-profile");
      //this.$router.push({name: 'Home'});
    },
    checkUsername() {
      this.postData(this.postUrl);

    },

    checkAverage: function(sum, length) {
      if (length > 0) {
        return `${sum / length} av 5`;
      } else {
        return "Inga test gjorda";
      }
    },
    totalPoints: function(scoreArray){
      let sum = 0;
      for (let i = 0; i < scoreArray.length; i++) {
        sum += scoreArray[i].score;
      }
      return sum;
    },
    postData: async function() {
      const response = await fetch(`http://localhost:3000/users/${this.activeUser.userId}`, {
        method: "PATCH",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: { "Content-Type": "application/json" },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify({
          password: this.password
        })
      }).then((response) => {
        return response.json();
      });
    },
    deleteAccount: function(){
      if(confirm("Är du säker på att du vill radera ditt konto?")){
        const response = fetch(`http://localhost:3000/users/${this.activeUser.userId}`, {
          method: "DELETE",
          mode: "cors",
          cache: "no-cache",
          credentials: "same-origin",
          headers: { "Content-Type": "application/json" },
          redirect: "follow",
          referrerPolicy: "no-referrer",
        }).then((response) => {
          return response.json();
        });
        this.logout();
      }
    }
  }, mounted() {
    fetch(`http://localhost:3000/testResults/${this.activeUser.userId}`)
        .then(res => res.json())
        .then(data => {
          let testResults = data.testResults;
          let additionTestsEasy = testResults.filter((testResult) => {
            return testResult.operation === "addition" && testResult.difficulty === "lätt";
          });
          let additionTestsHard = testResults.filter((testResult) => {
            return testResult.operation === "addition" && testResult.difficulty === "svårt";
          });
          let subtractionTestsEasy = testResults.filter((testResult) => {
            return testResult.operation === "subtraktion" && testResult.difficulty === "lätt";
          });
          let subtractionTestsHard = testResults.filter((testResult) => {
            return testResult.operation === "subtraktion" && testResult.difficulty === "svårt";
          });
          let divisionTestsEasy = testResults.filter((testResult) => {
            return testResult.operation === "division" && testResult.difficulty === "lätt";
          });
          let divisionTestsHard = testResults.filter((testResult) => {
            return testResult.operation === "division" && testResult.difficulty === "svårt";
          });
          let multiplicationTestsEasy = testResults.filter((testResult) => {
            return testResult.operation === "multiplikation" && testResult.difficulty === "lätt";
          });
          let multiplicationTestsHard = testResults.filter((testResult) => {
            return testResult.operation === "multiplikation" && testResult.difficulty === "svårt";
          });

          this.avgAdditionEasy = this.checkAverage(this.totalPoints(additionTestsEasy), additionTestsEasy.length);
          this.avgAdditionHard = this.checkAverage(this.totalPoints(additionTestsHard), additionTestsHard.length);

          this.avgSubtractionEasy = this.checkAverage(this.totalPoints(subtractionTestsEasy), subtractionTestsEasy.length);
          this.avgSubtractionHard = this.checkAverage(this.totalPoints(subtractionTestsHard), subtractionTestsHard.length);

          this.avgDivisionEasy = this.checkAverage(this.totalPoints(divisionTestsEasy), divisionTestsEasy.length);
          this.avgDivisionHard = this.checkAverage(this.totalPoints(divisionTestsHard), divisionTestsHard.length);

          this.avgMultiplicationEasy = this.checkAverage(this.totalPoints(multiplicationTestsEasy), multiplicationTestsEasy.length);
          this.avgMultiplicationHard = this.checkAverage(this.totalPoints(multiplicationTestsHard), multiplicationTestsHard.length);

        }).catch(err=>{
          console.log('Fel!' + err.message)
        });
  }


};


</script>

<style scoped>
.grid_container {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 2.0fr;
  grid-template-areas:
    "header header "
    "Profile_Container"
    "footer footer";
  grid-gap: 20px;
  height: 55vh;
  text-align: center;
  font-family: "Comic Sans MS";
}

.profile_container {
  float: left;
  background-color: #d6eef5;
  height: 300px;
  border-color: black;
  border-style: solid;
  border-radius: 10px;
  width: 50%;
  margin-left: 25%;
}

.tab button {
  display: block;
  background-color: inherit;
  color: black;
  padding: 22px 16px;
  width: 100%;
  border: none;
  outline: none;
  text-align: left;
  cursor: pointer;
  transition: 0.3s;
  font-size: 17px;
  border-radius: 25px;
}

b-tab {
  float: left;
  padding: 0px 12px;
  width: 30%;
  height: 300px;
  border-color: black;
  border-style: solid;
  border-radius: 25px;
}

active {
  background-color: mediumslateblue;;
}

b-tab:hover {
  background-color: cornflowerblue;
}

* {
  box-sizing: border-box;
}
</style>