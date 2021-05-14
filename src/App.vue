<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/quiz">Starta Quiz</router-link> |
      <router-link to="/konto">Mitt konto</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: "Comic Sans MS";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
