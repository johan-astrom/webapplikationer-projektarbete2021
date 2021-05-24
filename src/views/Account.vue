<template>
  <body>
<section>
<!--  <ProfileInfo v-if="loggedIn==true"></ProfileInfo>-->
  <LoginPage @user-login="login" />
</section>
  </body>
</template>

<script>

import LoginPage from "@/components/LoginPage";
// import ProfileInfo from "@/components/ProfileInfo";
export default {
  name: "Account",
  // props:{
  //   loggedIn: Boolean
  // },
  components: { LoginPage  },
  methods: {
    login(){
      this.$emit("user-login-step2");
    }
  }
};
</script>

<style scoped>

</style>