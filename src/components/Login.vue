<template>
    <div class="flex items-center justify-center h-screen">
        <div class="shadow-md h-contain-heght w-contain-width flex items-center border border-gray-100">
            <img :src="require('../assets/img-main-log.jpg')" alt="LGO" class="w-1/2 h-full object-cover">
            <div class="py-6 px-16 w-1/2">
                <img src="" alt="">
                <h2 class="text-gray-700 text-3xl font-semibold">Welcome Back</h2>
                <p class="text-gray-500 mb-5">Please login your credentials</p>
                <form @submit.prevent="login">
                    <div class="">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="userName">User Name</label>
                        <input class="appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" v-model="username" id="username"/>
                    </div>
                    <div class="mt-3">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">Password</label>
                        <input class="appearance-none border w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type="password"  v-model="password" />
                    </div>
                    <div class="w-full flex justify-end mt-5">
                        <button class="btn-blue mr-2">Login</button>
                        <router-link to="/signup" class="btn-outline transition-all">Sign Up</router-link>
                    </div>
                </form>
                <div class="text-red-600 text-center">{{ error.message }}</div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
    data: () => ({
        username: "",
        password: "",
        email: "",
        error: "",
    }),
    methods: {
        ...mapActions({
            loginVue: "auth/login",
        }),

        async login() {
            try {
                await this.loginVue({
                    username: this.username,
                    password: this.password,
                });

                this.$router.push("/users");
            } catch (error) {
                this.error = error;
            }
        },
    },
};
</script>

<style lang="scss" scoped>
</style>