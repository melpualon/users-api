<template>
    <div class="h-20 flex items-center justify-end border-b border-gray-100 fixed top-0 left-0 right-0 w-full">
        <ul class="flex justify-end">
            <li class="mr-6" v-if="!user">
                <router-link to="/">
                    <a class="cursor-pointer">Login</a>
                </router-link>
            </li>
            <li class="mr-6" v-if="!user">
                <router-link to="/signup">
                    <a class="cursor-pointer">Sign Up</a>
                </router-link>
            </li>
            <li class="mr-6" v-if="user">
                <div class="font-semibold text-black-500">Welcome {{ user.username }}</div>
            </li>
            <li class="mr-6" v-if="user">
                <router-link to="/about">
                    <div class="cursor-pointer">About</div>
                </router-link>
            </li>
            <li class="mr-6" v-if="user">
                <div class="cursor-pointer" @click="logout">Logout</div>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    methods: {
        async logout() {
            await this.$store.dispatch("auth/logout");
            this.$router.push("/");
        },
    },
    computed: {
        ...mapGetters({
            user: "auth/user",
        }),
    },
};
</script>