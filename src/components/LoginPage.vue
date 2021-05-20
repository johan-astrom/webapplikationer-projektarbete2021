<template>
  <section>
    <h2>Logga in</h2>
    <form id="login-form" method="POST" @submit.prevent="getUser()">
      <label for="login-username">Ange ditt användarnamn:</label>
      <input
        id="login-username"
        name="username"
        v-model="username"
        minlength="4"
        maxlength="20"
        required
      />
      <label for="login-password">Ange ditt lösenord:</label>
      <input
        type="password"
        id="login-password"
        name="password"
        v-model="password"
        minlength="6"
        maxlength="15"
        required
      />
      <input type="submit" value="Logga in" />
    </form>
  </section>
</template>

<script>
export default {
  name: "LoginPage",
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    getUser() {
      fetch(`http://localhost:3000/users/username/${this.username}`)
      .then((res) => res.json())
      .then(data => {
        let user = data.users[0];
        if (user.username === this.username){
          if (user.password === this.password){
            this.$emit("user-login");
          }else {
            alert("Felaktigt lösenord!");
          }
        }
      }).catch(() => {
        alert("Felaktigt användarnamn!")
      })
    }
  }
};

</script>

<style scoped>

</style>