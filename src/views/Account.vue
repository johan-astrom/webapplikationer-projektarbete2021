<template>
  <body>
  <section>

    <LoginPage v-if="!isLoggedIn" @user-login="login" />
      <ProfileInfo :activeUser="activeUser" @log-out-from-profile="logout" v-if="isLoggedIn"></ProfileInfo>
  </section>
  </body>
</template>

<script>

import LoginPage from "@/components/LoginPage";
import ProfileInfo from "@/components/ProfileInfo";

export default {
  name: "Account",
  props: {
    isLoggedIn:{type: String},
    activeUser: {
      type: Object
    }
  },

  components: { LoginPage, ProfileInfo  },
  methods: {

    login(user){
this.$emit("user-login-step2",user);
    },
    logout(){
      this.$emit("logout-from-account")
    }

  }


};
</script>

<style scoped>

</style>