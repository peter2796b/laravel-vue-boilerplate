<template>
    <nav class="navbar navbar-expand-md navbar-light bg-white shadow-sm">
        <div class="container">
            <a class="navbar-brand" href="/">
                App Name
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <!-- Left Side Of Navbar -->
                <ul class="navbar-nav mr-auto">

                </ul>

                <!-- Right Side Of Navbar Guest-->
                <ul v-if="!user" class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <router-link class="nav-link" to="login">Login</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="register">Register</router-link>
                    </li>
                </ul>
                <div v-else class="dropdown">
                    <a class="dropdown-toggle text-decoration-none" href="#" type="button" id="dropdownMenuButton"
                       data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        {{ fullname }}
                    </a>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a class="dropdown-item"  @click="logout">Logout</a>
                    </div>
                </div>
            </div>
        </div>
    </nav>

</template>
<script>
export default {
    data() {
        return {
            guest: true
        }
    },
    computed: {
        user() {
            return this.$store.state.user;
        },
        fullname() {
            return this.user.first_name + ' ' + this.user.last_name;
        }
    },
    methods: {
        logout() {
            localStorage.clear();
            this.$store.dispatch('logout');
            this.$router.push({name: 'home'})
        }
    }
}
</script>
