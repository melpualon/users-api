<template>
    <div class="flex items-center justify-center h-screen">
        <div class="shadow-md h-contain-heght w-contain-width flex items-center border border-gray-100">
            <img :src="require('../assets/img-main-log.jpg')" alt="LGO" class="w-1/2 h-full object-cover">
            <div class="py-6 px-16 w-1/2">
                <h2 class="text-gray-700 text-3xl font-semibold">Registration</h2>
                <p v-if="!confirmPassword" class="text-gray-500 mb-5">Fill up all fields and register your account.</p>
                <form v-if="!confirmPassword" @submit.prevent="signUp">
                    <div class="flex flex-col user">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="userName">User Name</label>
                        <input class="border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" v-model="username" id="username" />
                    </div>
                    <div class="flex flex-col mt-2">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">Password</label>
                        <input class="border w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type="password" id="password" v-model="password" />
                    </div>
                    <div class="flex flex-col mt-2">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="email">Email</label>
                        <input class="border w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type="email" id="email" v-model="email" />
                    </div>
                    <div class="w-full flex justify-end mt-5">
                        <button class="btn-blue mr-2">Sign Up</button>
                        <router-link to="/" class="btn-outline transition-all">Login</router-link>
                    </div>
                    <!-- <button class="btn-blue">Sign Up</button> -->
                </form>
                <div v-if="error" class="text-red-600">{{ error.message }}</div>
                <div v-if="confirmPassword">
                    <p class="text-gray-500 mb-5">Enter your code. Please check your email</p>
                    <div class="flex flex-col mt-2">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">Code</label>
                        <input class=" border w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type="text" v-model="code" />
                        <button class="btn-blue" @click="confirmSignUp">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        username: "",
        password: "",
        email: "",
        error: "",
        confirmPassword: false,
        code: "",
    }),
    methods: {
        async signUp() {
            if (!this.email || !this.password) {
                return;
            }

            try {
                await this.$store.dispatch("auth/signUp", {
                    username: this.username,
                    password: this.password,
                    email: this.email,
                });

                this.confirmPassword = true;
            } catch (error) {
                this.error = error;
            }
        },
        async confirmSignUp() {
            if (!this.username || !this.code) {
                return;
            }

            try {
                const { username, password, code } = this;
                await this.$store.dispatch("auth/confirmSignUp", {
                    username,
                    code,
                });
                await this.$store.dispatch("auth/login", {
                    username,
                    password,
                });

                this.$router.push("/albums");
            } catch (error) {
                console.log(error);
                this.error = error;
            }
        },
    },
};
</script>