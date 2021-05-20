<template>
  <section>
    <h2>Registrera användare</h2>
    <form id="signup-form" method="POST" @submit.prevent="checkUsername()">
      <label for="username">Ange ett användarnamn:</label>
      <input
        id="username"
        name="username"
        v-model="username"
        minlength="4"
        maxlength="20"
        required
      />
      <label for="password">Ange ett lösenord:</label>
      <input
        type="password"
        id="password"
        name="password"
        v-model="password"
        minlength="6"
        maxlength="15"
        required
      />
      <label for="password-check">Bekräfta ditt lösenord:</label>
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
      <input type="submit" v-show="passwordCheck===password" value="Skicka" />
    </form>
  </section>
</template>

<script>
export default {
  name: "SignupPage",
  data() {
    return {
      username: "",
      password: "",
      passwordCheck: "",
      postUrl: "http://localhost:3000/users/"
    };
  },
  methods: {
    checkUsername() {
      if (
        this.username.toLowerCase().includes("fuck") ||
        this.username.toLowerCase().includes("snopp") ||
        this.username.toLowerCase().includes("fan")
      ) {
        alert("Användarnamnet innehåller fula ord!");
      } else {
        this.postData(this.postUrl);
      }
    },
    postData: async function(url = "") {
      const response = await fetch(url, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: { "Content-Type": "application/json" },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify({
          username: this.username,
          password: this.password
        })
      }).then((response) => {
        if (response.status === 400) {
          alert("Användarnamnet är upptaget.");
        } else {
          return response.json();
        }
      });
    }
  }
};
</script>

<style scoped>
.redButton {
  background: red;
}
</style>
