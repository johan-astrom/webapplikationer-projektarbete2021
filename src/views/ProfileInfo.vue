<template>
  <body>
  <section class="grid_container">
      <div class="profile_container">
        <b-card class="card" no-body>
          <b-tabs pills card vertical>
            <b-tab title="Visa Resultat" active><b-card-text>Tab contents 1</b-card-text></b-tab>
            <b-tab title="Ändra Lösenord"><b-card-text>Tab contents 2</b-card-text></b-tab>
            <b-tab title="Ta bort Konto"><b-card-text>Tab contents 3</b-card-text></b-tab>
            <b-tab v-on:click="loggedIn==false" title="Logga Ut"><b-card-text>Logga ut</b-card-text></b-tab>
          </b-tabs>
        </b-card>
      </div>
  </section>
  </body>
</template>

<script>
export default {
  name: "ProfileInfo",
  props: {
    loggedIn: Boolean
  },
  methods: {
    showResult() {

    },
    changePassword() {

    },
    deleteAccount() {

    },
    logout() {
      this.loggedIn == false;
    }
   }
}
</script>

<style scoped>
.grid_container{
  display: grid;
  grid-template-columns: 1fr ;
  grid-template-rows: 2.0fr;
  grid-template-areas:
    "header header "
    "Profile_Container"
    "footer footer";
  grid-gap: 20px;
  height: 100vh;
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

Visa Resultat active {
  background-color: mediumslateblue;;
}

b-tab:hover {
  background-color: cornflowerblue;
}

* {
  box-sizing: border-box;
}
</style>