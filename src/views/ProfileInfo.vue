<template>
  <body>
  <section class="grid_container">
    <div class="profile_container">
      <b-card class="card" no-body>
        <b-tabs pills card vertical>
          <b-tab title="Visa Resultat" active>
            <b-card-text>Tab contents 1</b-card-text>
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
                    <input type="submit" v-show="passwordCheck===password" value="Skicka"/>

                </div>
              </b-card-text>
            </b-tab>

            <b-tab title="Ta bort Konto">
              <b-card-text>Tab contents 3</b-card-text>
            </b-tab>
            <b-tab v-on:click="logout" title="Logga Ut">
              <b-card-text>Logga ut</b-card-text>
            </b-tab>
        </b-tabs>
      </b-card>
    </div>
  </section>
  </body>
</template>

<script>
export default {

  name: "ProfileInfo",
  data() {
    return {
      password: "",
      passwordCheck: "",
      postUrl: "http://localhost:3000/users/",
      loggedIn:""
    }
  },

  methods: {
    showResult() {

    },
    changePassword() {


    },
    deleteAccount() {

    },
    logout() {
      this.$emit("user-login-step3");
    },
    checkUsername() {
        this.postData(this.postUrl);

    },
    postData: async function (url = "") {
      const response = await fetch(url, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {"Content-Type": "application/json"},
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify({
          username: this.username,
          password: this.password
        })
      }).then((response) => {
          return response.json();
        });
    },

  },
  mounted(){
    this.loggedIn=localStorage.getItem("loggedIn")
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