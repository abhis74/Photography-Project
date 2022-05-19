<template>
    <div>
        <Header />
        <div class="login">
            <div class="googleLogin">

                <a href="/"><img src="../assets/google.png" alt="google"> </a>
            </div>
            <input type="text" v-model="email" />
            <input type="password" v-model="password" />
            <button @click="SignInWithGoogole(email, password)">LogIN</button>
        </div>
    </div>
</template>
<script>
import Header from "../components/Header.vue";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

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
        SignInWithGoogole(email, password) {
            const auth = getAuth();
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in
                    this.user = userCredential.user;
                    // ...
                })
                .catch((error) => {
                    this.errorCode = error.code;
                    this.errorMessage = error.message;
                    // ..
                });
        },
    },
};
</script>
<style>
</style>