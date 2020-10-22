<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Login</div>

                    <div class="card-body">
                        <form>
                            <div class="form-group row">
                                <label for="email" class="col-md-4 col-form-label text-md-right">Email</label>
                                <div class="col-md-6">
                                    <input id="email" type="email"
                                           class="form-control" v-model="creds.email"
                                           required autocomplete="email" autofocus>

                                    <span v-if="errors" class="invalid-feedback" role="alert">
                                        <strong>{{ errors }}</strong>
                                    </span>
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>

                                <div class="col-md-6">
                                    <input id="password" type="password"
                                           class="form-control " v-model="creds.password"
                                           required autocomplete="current-password">

                                    <span v-if="errors" class="invalid-feedback" role="alert">
                                        <strong>{{ errors }}</strong>
                                    </span>
                                </div>
                            </div>

                            <div v-if="errors" class="form-group row">
                                <div class="col-md-12 alert alert-danger">
                                    <ul>
                                        <li v-for="(error) in Object.keys(errors)">
                                            {{ errors[error][0] }}
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div class="form-group row mb-0">
                                <div class="col-md-8 offset-md-4">
                                    <button type="button" @click="login" class="btn btn-primary">
                                        Login
                                    </button>

                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    data() {
        return {
            errors: null,
            creds: {
                email: 'peter@gmail.com',
                password: 'password'
            }
        }
    },

    methods: {
        async login() {
            try {
                let res = await axios.post(`/api/auth/login`, this.creds);
                if (!res.data.access_token) {
                    alert('The admin need to approve you, if you are a developer go to users table and set the active flag!!!')
                }
                //set the access token in the local storage
                await localStorage.setItem('access_token', res.data.access_token);
                await this.$store.dispatch('fetchUserData');
                this.$router.push({name: 'dashboard'})


            } catch (err) {
                this.errors = err.response.data.errors
            }

        }
    }
}
</script>
