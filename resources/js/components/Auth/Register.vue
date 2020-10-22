<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Register</div>

                    <div class="card-body">
                        <form >
                            <div class="form-group row">
                                <label for="email" class="col-md-4 col-form-label text-md-right">First Name</label>
                                <div class="col-md-6">
                                    <input id="first_name" type="text"
                                           class="form-control" v-model="creds.first_name"
                                           required autofocus>


                                </div>

                            </div>
                            <div class="form-group row">
                                <label for="email" class="col-md-4 col-form-label text-md-right">Last Name</label>
                                <div class="col-md-6">
                                    <input id="last_name" type="text"
                                           class="form-control" v-model="creds.last_name"
                                           required>


                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="email" class="col-md-4 col-form-label text-md-right">Email</label>
                                <div class="col-md-6">
                                    <input id="email" type="email"
                                           class="form-control" v-model="creds.email"
                                           required autocomplete="email">


                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>

                                <div class="col-md-6">
                                    <input id="password" type="password"
                                           class="form-control " v-model="creds.password"
                                           required autocomplete="current-password">


                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-md-4 col-form-label text-md-right">Role</label>

                                <div class="col-md-6">
                                    <input type="radio" id="one" value="admin" v-model="role">
                                    <label for="one">Admin</label>
                                    <br>
                                    <input type="radio" id="two" value="normal" v-model="role">
                                    <label for="two">Normal</label>
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
                                    <button  @click="register" type="button" class="btn btn-primary">
                                        Register
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
                password: 'peter',
                first_name: 'Peter',
                last_name: 'Braganza'
            },
            role: 'admin'
        }
    },
    mounted() {
    },
    methods: {
        async register() {
            try {
                let res = await axios.post(`/api/auth/register/${this.role}`, this.creds);
                if(!res.data.access_token){
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
