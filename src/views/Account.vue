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
 data(){
    return{
      loggedIn:""
    }
 },
  components: { LoginPage  },
  methods: {

    login(user){
this.$emit("user-login-step2",user);
    }

  },

  mounted(){
    this.loggedIn=localStorage.getItem('loggedIn')
  }
};
</script>

<style scoped>

</style>