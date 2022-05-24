<template>
  <div>
    <Header />
    <div class="login">
      <div class="googleLogin" @click="SignInWithAccount">
        <a><img src="../assets/google.png" alt="google" /> </a>
      </div>
      <div class="facebookLogin" @click="SignInWithAccount2">
        <a><img src="../assets/facebook.png" alt="facebook" /> </a>
      </div>
    </div>
    <button @click="SignOutWithGoogle()">SignOut</button>
    <div><img v-if="user" :src="user.photoURL" alt= "" /></div>
  </div>
</template>
<script>
import Header from "../components/Header.vue";
// import "../assets/styles/loginpage.css";

import { auth } from "../firebase";
import { getFirestore, collection, addDoc } from "firebase/firestore";

import {
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";

export default {
  name: "loginPage2",
  components: {
    Header,
  },
  data() {
    return {
      email: "",
      password: "",
      user: "",
      errorCode: "",
      errorMessage: "",
    };
  },
  methods: {
    SignInWithAccount() {
      const provider = new GoogleAuthProvider();

      provider.setCustomParameters({
        prompt: "select_account",
      });

      signInWithPopup(auth, provider)
        .then((result) => {
          // The signed-in user info.
          // eslint-disable-next-line
          this.user = result.user;
          const db = getFirestore();

          localStorage.setItem("User", JSON.stringify(this.user.displayName));
          console.log(this.user);
          console.log(this.user.photoURL);
          const docRef =  addDoc(collection(db, "users"), {
            first: this.user,
             born: 1912,
          });

          console.log("Document written with ID: ", docRef  );

          // ...
        })
        .catch((error) => {
          // Handle Errors here.
          // eslint-disable-next-line
          const errorCode = error.code;
          // eslint-disable-next-line
          const errorMessage = error.message;
          // The email of the user's account used.
          // eslint-disable-next-line
          const email = error.email;
          // The AuthCredential type that was used.
          // eslint-disable-next-line
          const credential = GoogleAuthProvider.credentialFromError(error);
        });
    },

    SignInWithAccount2() {
      const provider = new FacebookAuthProvider();
      provider.setCustomParameters({
        prompt: "select_account",
      });
      signInWithPopup(auth, provider)
        .then((result) => {
          // The signed-in user info.
          this.user = result.user;

          console.log(this.user);
          console.log(this.user.photoURL);

          localStorage.setItem("User", JSON.stringify(this.user.displayName));
          // This gives you a Facebook Access Token. You can use it to access the Facebook API.
          const credential = FacebookAuthProvider.credentialFromResult(result);
          const accessToken = credential.accessToken;

          // ...
        })
        .catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          // const email = error.customData.email;
          console.log(error);
          // The AuthCredential type that was used.
          const credential = FacebookAuthProvider.credentialFromError(error);

          // ...
        });
    },
    SignOutWithGoogle() {
      signOut(auth)
        .then(() => {
          console.log("sign Out");
          // Sign-out successful.
          localStorage.removeItem(
            "User",
            JSON.stringify(this.user.displayName)
          );
          this.user = null;
        })
        .catch((error) => {
          // An error happened.
          console.log(error);
        });
    },
  },
};
</script>
<style scoped>
.facebookLogin {
  width: 2%;
}
.facebookLogin a img {
  width: 100%;
}
</style>