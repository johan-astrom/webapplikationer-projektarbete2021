<template>
  <body>
  <section class="grid_container">
    <div class="profile_container">

      <div>
        <b-card no-body>
          <b-tabs card>
            <b-tab title="Resultat" active>
              <b-card-text>
                <h3>Dina snittresultat av 5:</h3>
                <table v-for="(average, index) in averages" :key="index">
                  <tr>
                    <td>{{average.operation}},</td>
                    <td>{{average.difficulty}}:</td>
                    <td>{{average.average}}</td>
                    <td v-if="average.average<4 && average.difficulty==='lätt'"> Du borde öva vidare på lätt nivå!</td>
                    <td v-else-if="average.average>4 && average.difficulty==='lätt'"> Du borde gå vidare till svår nivå!</td>
                    <td v-else-if="average.average<4 && average.difficulty==='svårt'"> Du borde öva vidare på svår nivå!</td>
                    <td v-else-if="average.average>4 && average.difficulty==='svårt'"> Grattis! Du kan det här räknesättet riktigt bra.</td>
                    <hr>
                  </tr>
                </table>


              </b-card-text>
            </b-tab>

            <b-tab title="Ändra lösenord">
              <b-card-text>
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
              </b-card-text>
            </b-tab>

            <b-tab title="Radera konto">
              <b-card-text>
                <h4>Vill du radera ditt konto?</h4>
                <button @click="deleteAccount">Radera</button>
              </b-card-text>
            </b-tab>

            <b-tab title="Logga ut">
              <b-card-text>
                <h4>Är du säker på att du vill logga ut?</h4>
                <input type="submit" value="OK" v-on:click="logout" />
              </b-card-text>
            </b-tab>
          </b-tabs>
        </b-card>
      </div>
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
      averages: [
        { average: 0 , operation: 'Addition', difficulty: 'Lätt'},
        { average: 0 , operation: 'Addition', difficulty: 'Svårt'},
        { average: 0 , operation: 'Subtraktion', difficulty: 'Lätt'},
        { average: 0 , operation: 'Subtraktion', difficulty: 'Svårt'},
        { average: 0 , operation: 'Division', difficulty: 'Lätt'},
        { average: 0 , operation: 'Division', difficulty: 'Svårt'},
        { average: 0 , operation: 'Multiplikation', difficulty: 'Lätt'},
        { average: 0 , operation: 'Multiplikation', difficulty: 'Svårt'},

      ]
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
        return sum / length;
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

          this.averages[0].average = this.checkAverage(this.totalPoints(additionTestsEasy), additionTestsEasy.length);
          this.averages[1].average = this.checkAverage(this.totalPoints(additionTestsHard), additionTestsHard.length);

          this.averages[2].average = this.checkAverage(this.totalPoints(subtractionTestsEasy), subtractionTestsEasy.length);
          this.averages[3].average = this.checkAverage(this.totalPoints(subtractionTestsHard), subtractionTestsHard.length);

          this.averages[4].average = this.checkAverage(this.totalPoints(divisionTestsEasy), divisionTestsEasy.length);
          this.averages[5].average = this.checkAverage(this.totalPoints(divisionTestsHard), divisionTestsHard.length);

          this.averages[6].average = this.checkAverage(this.totalPoints(multiplicationTestsEasy), multiplicationTestsEasy.length);
          this.averages[7].average = this.checkAverage(this.totalPoints(multiplicationTestsHard), multiplicationTestsHard.length);

        }).catch(err=>{
      console.log('Fel!' + err.message)
    });
  }


};


</script>

<style scoped>
/*Mobile*/

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
    background-color: #d6eef5;
    border-color: black;
    border-style: solid;
    border-radius: 10px;
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
    background-color: mediumslateblue;
  }

  b-tab:hover {
    background-color: cornflowerblue;
  }

  * {
    box-sizing: border-box;
  }

/*Tablet*/
@media screen and (min-width: 768px) and (max-width: 1024px) {


}
/*Desktop*/
@media screen and (min-width: 1025px) {

}
</style>