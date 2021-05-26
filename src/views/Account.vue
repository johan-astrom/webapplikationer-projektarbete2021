<template>
  <body>
  <section>
    <!--  <ProfileInfo></ProfileInfo>-->
    <LoginPage @user-login="login" />
  </section>
  </body>
</template>

<script>

import LoginPage from "@/components/LoginPage";
// import ProfileInfo from "@/components/ProfileInfo";
export default {
  name: "Account",
  /*props:{
    loggedIn: Boolean
  },*/
  components: { LoginPage  },
  methods: {

    login(user){
this.$emit("user-login-step2",user);
    }

  }
};
</script>

<style scoped>

</style>